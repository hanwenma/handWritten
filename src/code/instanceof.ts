/**
 * instanceof
 * @param instance
 * @param construc
 */
export function myInstanceof(instance: any, construc: Function): boolean {
  let left = Object.getPrototypeOf(instance); // 获取对象的原型
  let right = construc.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!left) return false;
    if (left === right) return true;
    left = Object.getPrototypeOf(left);
  }
}

// 测试
const a: any = [];
const b: any = {};
const c: any = "";
const d: any = false;
console.log(myInstanceof(a, Array));
console.log(myInstanceof(b, Array));
console.log(myInstanceof(c, String));
console.log(myInstanceof(d, Object));
console.log("=============================");
console.log(a instanceof Array);
console.log(b instanceof Array);
console.log(c instanceof String);
console.log(d instanceof Object);
