function isObject(data) {
  return typeof data === "object" && data !== null;
}

export default function flatten(data: any) {
  if (!isObject(data)) return data;

  let res = {};

  function dfs(cur, prefix) {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  }

  dfs(obj, "");

  return res;
}

// 测试
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

const rs = flatten(obj);
console.log(rs);
