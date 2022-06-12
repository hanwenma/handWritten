/**
 * 防抖
 * @param handler
 * @param delay
 * @returns newHandler
 */
export function debounce(handler: Function, delay: number = 200): any {
  let timer: number = 0;
  return function inner(this: typeof inner, ...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => handler.apply(null, args), delay);
  };
}

// 测试
document.documentElement.onmousemove = debounce((event: MouseEvent) => {
  const { screenX, screenY } = event;
  console.log({ screenX, screenY });
});
