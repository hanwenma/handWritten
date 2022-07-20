function isObject(target) {
  return typeof target === "object" && target !== null;
}

/**
 * 深度克隆（考虑 Symbol 类型）
 * @param target
 * @param hash
 */
export function deepClone(target: any, hash: any = new WeakMap()) {
  if (!isObject(target)) return target;

  if (hash.has(target)) {
    return hash.get(target);
  }

  const newTargrt = Array.isArray(target) ? [] : {};

  hash.set(target, newTargrt);

  Reflect.ownKeys(target).forEach((key) => {
    if (isObject(target[key])) {
      newTargrt[key] = deepClone(target[key]);
    } else {
      newTargrt[key] = target[key];
    }
  });

  return newTargrt;
}

// 测试
const obj1 = {
  a: 1,
  b: true,
  c: undefined,
  d: null,
  e: Symbol("ceshi"),
  f: { name: "zs", age: 18 },
  g: [
    { name: "ls", age: 16 },
    { name: "ww", age: 20 },
  ],
  h: function () {
    console.log("hello world!");
  },
};

const obj2 = deepClone(obj1);

console.log(obj1);
console.log(obj2);
console.log(" obj1 === obj2 ", obj1 === obj2);
