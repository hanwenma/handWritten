const bucket = new WeakMap();

let activeEffect: any = null;

/**
 * reactive
 * @param raw
 * @returns Proxy
 */
export function reactive(raw: Object): Object {
  return new Proxy(raw, {
    get(target, key, receiver) {
      // 没有注册副作用函数，直接返回数据
      if (!activeEffect) return Reflect.get(target, key);

      track(target, key);

      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return result;
    },
  });
}

/**
 * effect
 * @param fn
 */
export function effect(fn: Function) {
  activeEffect = fn;
  fn();
}

/**
 * track
 * @param target
 * @param key
 */
export function track(target, key) {
  let depMap = bucket.get(target);
  if (!depMap) {
    bucket.set(target, (depMap = new Map()));
  }

  let deps = depMap.get(key);
  if (!deps) {
    depMap.set(key, (deps = new Set()));
  }

  deps.add(activeEffect);
}

/**
 * trigger
 * @param target
 * @param key
 * @returns
 */
export function trigger(target, key) {
  let depsMap = bucket.get(target);
  if (!depsMap) return;
  let deps = depsMap.get(key);
  deps && deps.forEach((effectFn) => effectFn());
}

// 测试
const data: any = reactive({
  name: "zs",
  age: 18,
});

effect(() => {
  console.log("副作用执行 = ", data.age + " = " + data.name);
});

setTimeout(() => {
  data.name = "xxxx";
  data.age = 20;
  console.log(bucket);
}, 3000);
