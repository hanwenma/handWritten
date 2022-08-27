export class Scheduler {
  tasks: any[];
  queue: any[];
  fulshing: boolean;
  max: number;

  constructor() {
    this.tasks = []; // 总任务数
    this.queue = []; // 排队的任务数
    this.fulshing = false; // 是否正在执行任务
    this.max = 2; // 最大执行任务数
  }

  addTask(time: number = 200, task: any) {
    // 构造任务
    let p = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const rs = task();
            resolve(rs);
          } catch (error) {
            reject(error);
          }
        }, time);
      });
    };

    // 添加任务
    this.tasks.push(p);

    // 刷新任务队列
    if (!this.fulshing) this.flushQueue();
  }

  flushQueue() {
    if (this.tasks.length === 0) return;

    while (this.queue.length < this.max && this.tasks.length) {
      this.queue.push(this.tasks.shift());
    }

    // 执行任务
    this.request();
  }

  request() {
    if (this.queue.length === 0) {
      this.fulshing = false;
      return;
    }
    this.fulshing = true;
    this.queue.shift()();
    this.request();
  }
}

// 测试
const scheduler = new Scheduler();
scheduler.addTask(1000, () => {
  console.log("任务一");
});
scheduler.addTask(200, () => {
  console.log("任务二");
});
scheduler.addTask(500, () => {
  console.log("任务三");
});
scheduler.addTask(100, () => {
  console.log("任务四");
});
