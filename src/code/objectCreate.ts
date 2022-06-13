/**
 * Object.create()
 * @param _prototype
 * @returns obj
 */
export function objectCreate(_prototype: Object | null): Object {
  const obj: Object = {};
  Object.setPrototypeOf(obj, _prototype);
  return obj;
}

// 测试
console.log(objectCreate(null));
