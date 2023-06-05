/*

提供了一个数组结构的 data，要求实现一个 query 方法，
返回一个新的数组，query 方法内部有: 过滤、排序、分组 等操作，
并且支持链式调用，调用最终的 execute 方法返回结果

*/

export default function query(arr: any[]) {
  const instance: any = {
    arr: arr.slice(),
    result: [],
    group: null,
  };

  instance.where = (callback: () => boolean) => {
    if(callback) instance.result = instance.arr.filter(callback);
    else instance.result = instance.arr;
    return instance;
  };

  instance.sortBy = (name: string) => {
    instance.result.sort((a, b) => a[name] - b[name]);
    return instance;
  };

  // 分组
  instance.groupBy = (name: string) => {
    instance.group = instance.result.reduce((a, b) => {
      a[b[name]] = a[b[name]] || [];

      a[b[name]].push(b);

      return a;
    }, {});
    return instance;
  };

  instance.execute = () => ({
    result: instance.result,
    group: instance.group,
  });

  return instance;
}

// 测试
const arr = [
  { name: "zs", age: 18, hb: "aa" },
  { name: "ls", age: 12, hb: "bb" },
  { name: "ww", age: 17, hb: "aa" },
  { name: "ll", age: 15, hb: "bb" },
  { name: "lx", age: 19, hb: "aa" },
  { name: "yf", age: 20, hb: "cc" },
];

console.log(
  query(arr)
    .where()
    .sortBy("age")
    .groupBy("hb")
    .execute()
);
