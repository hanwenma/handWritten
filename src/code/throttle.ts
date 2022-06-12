/**
 * 节流
 * @param handler
 * @param delay
 * @returns newHandler
 */
export function throttle(handler: Function, delay: number = 1000): any {
  let previous = 0;
  return function inner(this: typeof inner, ...args: any[]) {
    let now = Date.now();
    let remainder = now - previous;
    if (remainder > delay) {
      handler.apply(this, args);
      previous = now;
    }
  };
}

// 测试
document.documentElement.onmousemove = throttle((event: MouseEvent) => {
  const { screenX, screenY } = event;
  console.log({ screenX, screenY });
});
