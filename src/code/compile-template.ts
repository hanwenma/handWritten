export default function compileTemplate(template: string, data: any) {
  const reg = /\{\{ \w+ \}\}/g;

  return template.replace(reg, (match) => {
    const key = match.replace(/[\{\}]/g, "").trim();
    return Array.isArray(data[key]) ? data[key].join(",") : data[key];
  });
}

// 测试
const data = {
  name: "zs",
  age: 18,
  friends: ["ls", "ll", "cp"],
};

const template = `my name is {{ name }}, my age is {{ age }}, my friends are {{ friends }}!`;

console.log("res = ", compileTemplate(template, data));
