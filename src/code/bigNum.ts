export default function bigNumAdd(n1: string | bigint, n2: string | bigint) {
  if (typeof n1 !== "bigint") n1 = BigInt(n1);
  if (typeof n2 !== "bigint") n2 = BigInt(n2);

  const res = (n1 + n2).toString();

  console.log(n1, n2, res);

  return res;
}

// 测试
const n1 = "9007199254740991";
const n2 = "1234567899999999999";
bigNumAdd(n1, n2);
