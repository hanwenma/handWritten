/**
 * apply
 * @param this
 * @param context
 * @param void
 */
export function myApply(this: Function, context: any, args: any[]) {
  context = context || window;

  // 将函数作为目标对象的临时 fn 属性，【隐式绑定】
  context.fn = this;
  // 以对象方法进行调用
  context.fn(...args);
  // 删除临时 fn 属性
  delete context.fn;
}

/**
 * bind
 * @param this
 * @param context
 * @returns function
 */
export function myBind(this: Function, context: any): Function {
  return (...args: any[]) => {
    this.myApply(context, args);
  };
}

/**
 * call
 * @param this
 * @param context
 * @returns void
 */
export function myCall(this: Function, context: any, ...args) {
    this.myApply(context, args);
}

const prototype: any = Function.prototype;

prototype.myApply = myApply;
prototype.myBind = myBind;
prototype.myCall = myCall;

// 测试
function test(this: any, msg: string) {
  this.msg = msg;
  console.log(this);
  console.log(this.msg);
}

const obj = { name: "zs" };

// console.log("myApply");
// test.myApply(null, ["hello"]);
// test.myApply(obj, ["hello"]);

// console.log("myBind");
// const fn1 = test.myBind(null);
// const fn2 = test.myBind(obj);
// fn1("hello");
// fn2("hello");

console.log("myCall");
test.myCall(null, "hello");
test.myCall(obj, "hello");
