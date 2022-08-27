export default function objectIs(val1: any, val2: any) {
  if (val1 !== val1 && val2 !== val2) return true;

  if (val1 === 0 && val2 === 0) {
    return (1 / val1).toString() === (1 / val2).toString();
  }

  return val1 === val2;
}

// 测试
const val1 = Infinity;
const val2 = Infinity;

const rs = objectIs(val1, val2);

console.log("objectIs：");
console.log(val1, val2, rs);
console.log("Object.is：");
console.log(val1, val2, Object.is(val1, val2));
