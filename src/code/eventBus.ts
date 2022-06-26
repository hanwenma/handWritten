/**
 * 发布订阅模式
 */
export class EventBus {
  eventBus: Map<any, any>;

  constructor() {
    // 初始化事件对象
    this.eventBus = new Map();
  }

  subscribe(name: string, fn: Function) {
    let events: Set<any> = this.eventBus.get(name);

    if (!events) {
      this.eventBus.set(name, (events = new Set()));
    }

    fn && events.add(fn);
  }

  publish(name: string = "") {
    if (name) {
      let events: Set<any> = this.eventBus.get(name);
      events.forEach((fn) => {
        fn();
      });
      return;
    }

    const evnets = this.eventBus.values();
    for (const fns of evnets) {
      fns.forEach((fn) => fn());
    }
  }

  remove(name?: string, handler?: Function) {
    if (!name) {
      this.eventBus = new Map();
      return;
    }

    const events = this.eventBus.get(name);

    if (events) {
      if (!handler) {
        events.clear();
        return;
      } else {
        events.delete(handler);
      }
    }
  }
}

// 测试
const eventBus = new EventBus();

const t1 = () => {
  console.log("test1");
};

const t2 = () => {
  console.log("test2");
};

const other = () => {
  console.log("other");
};

eventBus.subscribe("test", t1);

eventBus.subscribe("test", t2);

eventBus.subscribe("other", other);

// setTimeout(() => {
//   console.log("============ 触发 test ============");
//   eventBus.publish("test");
//   console.log("============ 触发 other ============");
//   eventBus.publish("other");
// }, 1000);

// setTimeout(() => {
//   console.log("============ 触发 全部 ============");
//   eventBus.publish();
// }, 2000);

console.log("============ 移除 test2 ============");
eventBus.remove("test", t2);

console.log("============ 触发 test ============");
eventBus.publish("test");

console.log("============ 触发 other ============");
eventBus.publish("other");
