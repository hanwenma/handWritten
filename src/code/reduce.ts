export function reduce(this: unknown[], fn: Function, initial?: unknown) {
  let res: unknown = initial;

  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      if (typeof initial !== void 0) {
        res = fn(res, this[i]);
      } else {
        res = fn(this[i], this[++i]);
      }
    } else {
      res = fn(res, this[i]);
    }
  }

  return res;
}

Array.prototype.reduce = reduce;

// 测试
const res = [1, 2, 3].reduce((memo, curr) => {
  return memo + curr;
},1);

console.log("res = ", res);
