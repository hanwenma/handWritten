/*
实现一个LazyMan，可以按照以下方式调用:
LazyMan("Hank")输出:
Hi! This is Hank!

LazyMan("Hank").sleep(10).eat("dinner")输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan("Hank").eat("dinner").eat("supper")输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan("Hank").eat("supper").sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
*/

function wait(time: number) {
  let now = Date.now() / 1000;
  let futrue = now + time;
  while (true) {
    if (futrue < now / 1000) {
      break;
    }
    now = Date.now();
  }
}

export function LazyMan(name: string) {
  // 入队
  LazyMan.queue.push(() => console.log(`Hi! This is ${name}!`));

  // 异步刷新队列
  setTimeout(() => {
    LazyMan.queue.forEach((fn) => fn());
    LazyMan.queue.length = 0;
  });

  return LazyMan;
}

// 任务队列
LazyMan.queue = [];

LazyMan.sleep = function (time: number) {
  // 入队
  LazyMan.queue.push(() => wait(time));
  return LazyMan;
};

LazyMan.sleepFirst = function (time: number) {
  // 入队
  LazyMan.queue.unshift(() => wait(time));
  return LazyMan;
};

LazyMan.eat = function (foo: string) {
  // 入队
  LazyMan.queue.push(() => console.log(`Eat ${foo}~`));
  return LazyMan;
};

// 测试
// LazyMan("Hank")

// LazyMan("Hank").sleep(10).eat("dinner")

// LazyMan("Hank").eat("dinner").eat("supper")

LazyMan("Hank").eat("supper").sleepFirst(5);
