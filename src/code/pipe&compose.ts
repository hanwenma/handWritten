/*
  pipe 和 compose 函数都能够让原本嵌套执行的函数平铺，
  区别就在于：
    - pipe    的嵌套是 从左往右
    - compose 的嵌套是 从右往左
*/

export function pipe(...fns){
    return (x) => {
      return fns.reduce((res, fn) => fn(res), x)
    }
}

export function compose(...fns){
    return (x) => {
      return fns.reduceRight((res, fn) => fn(res), x)
    }
}