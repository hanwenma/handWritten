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

export default function LazyMan(name: string) {
  const task = () => console.log(`Hi! This is ${name}!`);
  LazyMan.tasks.push(task);
  LazyMan.excutionTask();
  return LazyMan;
}

LazyMan.tasks = [];

LazyMan.excutionTask = function () {
    setTimeout(() => {
      while (LazyMan.tasks.length) {
        const res: any = LazyMan.tasks.shift()();
        if (res instanceof Promise) {
          res.then(LazyMan.excutionTask);
          break;
        }
      }
    });
  }

LazyMan.sleep = function (time: number, first: boolean = false) {
  const task = () => {
    return new Promise((r) => {
      setTimeout(() => {
        r("");
      }, time * 1000);
    });
  };

  LazyMan.tasks[first ? "unshift" : "push"](task);
  return LazyMan;
};

LazyMan.sleepFirst = function (time: number) {
  LazyMan.sleep(time, true);
  return LazyMan;
};

LazyMan.eat = function (name: string) {
  const task = () => console.log(`Eat ${name}~`);
  LazyMan.tasks.push(task);
  return LazyMan;
};

// 测试

// LazyMan("Hank");

// LazyMan("Hank").sleep(10).eat("dinner")


// LazyMan("Hank").eat("dinner").eat("supper")

LazyMan("Hank").eat("supper").sleepFirst(5)