/**
 * 函数科里化
 * @param fn
 */
export function curry(fn: Function, ...args): Function {
  const length = fn.length;
  let finalArgs = args;
  return function (this: any, ...leftArgs: any[]) {
    finalArgs = finalArgs.concat(leftArgs);
    // 判断参数的个数 和 传入函数的个数是否相同
    if (finalArgs.length === length) {
      return fn.apply(this, finalArgs);
    }
    return curry.apply(this, [fn, ...finalArgs]);
  };
}

// es6 实现
function curryES6(fn: Function, ...args: any[]) {
  return fn.length <= args.length ? fn(...args) : curryES6.bind(null, fn, ...args);
}

// 测试
function add(x, y) {
  console.log(x + y);
}

// const fn = curry(add);
// fn(1);
// fn(2);

const fn = curry(add, 1, 2);
fn();

// const fn = curryES6(add, 1, 2);
// const fn = curryES6(add, 1);
// fn(2);
