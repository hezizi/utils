/**
 * throttle
 * @param fn the function to throttle
 * @param delay milliseconds
 * @returns new throttled function
 */

export function throttle<T extends any[]>(
  fn: (...args: T) => void,
  delay: number = 300
) {
  let throttle = false

  return (...args: T) => {
    if (throttle) return

    fn.apply(this, args)
    throttle = true

    setTimeout(() => {
      throttle = false
    }, delay)
  }
}
