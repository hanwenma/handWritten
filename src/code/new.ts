/**
 * new
 * @param construct
 * @returns obj
 */
export function myNew(construct: Function, ...args): Object {
  // 1. 创建新对象
  // 2. 将空对象的原型指向构造函数的原型
  const obj = Object.create(construct.prototype);

  // 3. 执行构造函数
  const result = construct.apply(obj, args);

  // 4. 判断 result 是否为对象，若是则返回 result，否则返回 obj
  const isObj = typeof result === "function" || typeof result === "object";
  return isObj ? result : obj;
}

// 测试
function F1(this: any, name, age) {
  this.name = name;
  this.age = age;
}

console.log(myNew(F1, "zs", 18));
console.log(new F1("zs", 18));

function F2(this: any, name, age) {
  this.name = name;
  this.age = age;
  return {
    message: "hello world",
  };
}

console.log(myNew(F2, "zs", 18));
console.log(new F2("zs", 18));
