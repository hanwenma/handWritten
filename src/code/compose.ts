/**
 * compose 函数
 * @param fns
 * @returns
 */
export default function compose(...fns) {
  if (fns.length === 0) return (x) => x;
  if (fns.length === 1) return fns[0];

  return fns.reduce(
    (pre, next) =>
      (...agrs) =>
        pre(next(...agrs))
  );
}

// 测试:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
