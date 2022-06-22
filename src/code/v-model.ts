export function vModel(data: any, form: any) {
  const keys = Object.keys(data);
  // data -> dom
  keys.forEach((key) => {
    // 初始化
    inputValue.textContent = form.value = data[key];
    // 提前获取值，避免在 get 中死循环
    const value = data[key];
    Object.defineProperty(data, key, {
      get() {
        console.log(`读取 ${key} 数据 = `, value);
      },
      set(newValue) {
        inputValue.textContent = form.value = newValue;
        console.log("数据发生变化 ");
      },
    });
  });

  // dom -> data
  form.oninput = function (e: any) {
    data[keys[0]] = e.target.value;
  };
}

// 测试
const input: any = document.querySelector("#input");
const inputValue: any = document.querySelector("#input-value");

const data = { name: "hahahaha" };

vModel(data, input);

setTimeout(() => {
  data.name = "hello world";
}, 1000);
