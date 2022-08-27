/**
 * 获取对应类型
 * @param target
 * @returns typeStr
 */
function getType(target: any): string {
  return Object.prototype.toString
    .call(target)
    .replace("[object ", "")
    .replace("]", "");
}

/**
 * 浅克隆
 * @param target
 * @returns newTarget
 */
export function shadowClone(target: any): any {
  const typeStr = getType(target);

  if (typeStr === "Object") {
    return { ...target };
  } else if (typeStr === "Array") {
    return [...target];
  } else {
    return target;
  }
}

/**
 * 深克隆
 * @param target
 * @returns newTarget
 */
export function deepClone(target: any): any {
  const typeStr = getType(target);

  if (typeStr === "Object") {
    const obj = {};
    Object.keys(target).forEach((key) => {
      if (typeof target[key] === "object") {
        obj[key] = deepClone(target[key]);
      } else {
        obj[key] = target[key];
      }
    });
    return obj;
  } else if (typeStr === "Array") {
    const arr: any[] = [];
    for (const item of target) {
      if (typeof item === "object") {
        arr.push(deepClone(item));
      } else {
        arr.push(item);
      }
    }
    return arr;
  } else {
    return target;
  }
}

// 测试-浅拷贝
const obj = {
  name: "zs",
  age: 18,
  friends: ["ll", "wm"],
  info: {
    height: 180,
    width: 200,
  },
};

const arr = ["string", 100, { name: "ls", age: 20 }, [{ a: 1, b: 2 }]];

// const obj1 = shadowClone(obj);
// const arr1 = shadowClone(arr);

// console.log(obj1, obj);
// console.log(obj1 === obj);
// console.log(obj1.friends === obj.friends);
// console.log(arr1[2] === arr[2]);


const obj2 = simpleDeepClone(obj);
const arr2 = simpleDeepClone(arr);

console.log(obj2, obj);
console.log(obj2 === obj);
console.log(obj2.friends === obj.friends);
console.log(arr2 === arr);
console.log(arr2[2] === arr[2]);

function isObject(target:any){
  return typeof target === 'object' && target !== null;
}

function simpleDeepClone(target: any){
  // 基本数据类型
  if(!isObject(target)) return target;

  const res = Array.isArray(target) ? [] : {};

  for (const key in target) {
      res[key] = simpleDeepClone(target[key]);
  }

  return res;
}