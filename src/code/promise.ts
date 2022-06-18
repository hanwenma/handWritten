// 三种状态
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// promise 接收⼀个函数参数，该函数会⽴即执⾏
export class MyPromise {
  [name: string]: any;

  constructor(fn) {
    this.value;
    this.status = PENDING; // 默认状态
    this.onResolveCallBack = []; // 缓存 onResolve
    this.onRejectCallBack = []; // 缓存 onReject

    // 这里使用 try catch 捕获中可能发生的错误
    try {
      // 这里必须要绑定 this，否则在外部调用时 this 就不会执行当前实例
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject.bind(this, error);
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = RESOLVED;

      // setTimeout 为了保证异步顺序执行
      setTimeout(() => {
        // 遍历调用 onResolveCallBack
        this.onResolveCallBack.forEach((r) => r());
      });
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.value = reason;
      this.status = REJECTED;

      // setTimeout 为了保证异步顺序执行
      setTimeout(() => {
        // 遍历调用 onRejectCallBack
        this.onRejectCallBack.forEach((r) => r());
      });
    }
  }

  static resolve(value) {
    return new MyPromise(function (resolve, reject) {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
      }
      resolve(value);
    });
  }

  static reject(value) {
    return new MyPromise(function (resolve, reject) {
      if (value instanceof MyPromise) {
          value.then(resolve, reject);
      } else {
        reject(value);
      }
    });
  }

  static all(promiseArr: MyPromise[]) {
    const result: any[] = [];
    return new MyPromise(function (resolve, reject) {
      promiseArr.forEach((p) => {
        p.then(
          (value) => {
            result.push(value);
            // 当两者的长度一致，表明所有 promise 执行完成，并结果都是成功的
            if (promiseArr.length === result.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static race(promiseArr: MyPromise[]) {
    return new MyPromise(function (resolve, reject) {
      promiseArr.forEach((p) => {
        p.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}

// then
MyPromise.prototype.then = function (onResolve, onReject) {
  // 保证 onResolve & onReject 为函数
  // 主要是为了 .then().then((v)=>v) 的情况，称之为 then 穿透
  onResolve = typeof onResolve === "function" ? onResolve : (v) => v;
  onReject = typeof onReject === "function" ? onReject : (v) => v;

  // 这里是为了实现链式操作
  let promise = new MyPromise((resolve, reject) => {
    // 当前 promise 实例调用了 resolve
    if (this.status === RESOLVED) {
      // setTimeout 为了保证异步顺序执行
      setTimeout(() => {
        let result = onResolve(this.value);
        transferPromiseResult(promise, result, resolve, reject);
      });
    }

    // 当前 promise 实例调用了 reject
    if (this.status === REJECTED) {
      // setTimeout 为了保证异步顺序执行
      setTimeout(() => {
        let result = onReject(this.value);
        transferPromiseResult(promise, result, resolve, reject);
      });
    }

    // 当前 promise 状态为 pending，把当前的 onResolve & onReject 缓存起来
    if (this.status === PENDING) {
      this.onResolveCallBack.push(() => {
        let result = onResolve(this.value);
        transferPromiseResult(promise, result, resolve, reject);
      });
      this.onRejectCallBack.push(() => {
        let result = onReject(this.value);
        transferPromiseResult(promise, result, resolve, reject);
      });
    }
  });

  return promise;
};

// 将上一次的 promise 的值，传递给下一个 then
function transferPromiseResult(promise, result, resolve, reject) {
  // 为了处理当前的 promise 实例，在当前的 then 被返回
  if (promise === result) {
    throw new TypeError("Chaining cycle detected for promise #<MyPromise>");
  }

  try {
    // 如果上一个 then 返回的是 MyPromise 的实例 && 不是同一个 promise 实例
    // 那只需要把 MyPromise 中的处理好的返回值传递给一下 then 即可
    if (result instanceof MyPromise) {
      result.then(resolve, reject);
    } else {
      // 正常结果，传给下一个 then
      resolve(result);
    }
  } catch (error) {
    reject(error);
  }
}

// 测试
const p = new MyPromise((r, j) => {
  setTimeout(() => {
    r("my promise");
  }, 2000);
});

p.then().then((value) => {
  console.log(value);
});
