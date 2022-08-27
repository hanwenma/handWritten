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

function flattenAgain(data: any) {
  const res = {};

  function genData(obj, keyStr = "") {
    for (const key in obj) {
      const item = obj[key];
      const realKey = keyStr ? `${keyStr}.${key}` : key;

      if (isObject(item)) {
        if (Array.isArray(item)) {
          item.forEach((v, i) => {
            genData(v, `${realKey}[${i}]`);
          });
        }else{
          genData(item, realKey);
        }
      } else {
        res[realKey] = item;
      }
    }
  }

  genData(data);

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

const rs = flattenAgain(obj);
console.log(rs);
