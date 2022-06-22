export function mySetInterval(fn, time = 500) {
  let flag = true;

  function handle() {
    if (flag) {
      fn();
      setTimeout(handle, time);
    }
  }

  // 初始化执行
  setTimeout(handle, time);

  // 返回停止函数
  return () => {
    flag = false;
  };
}

// 测试
const stop = mySetInterval(() => {
  console.log("hahahha");
}, 1000);

setTimeout(() => {
  stop();
  console.log("stop....");
}, 5000);
