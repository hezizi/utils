/**
 * debounce
 * @param fn the func to debounce
 * @param delay milliseconds
 * @returns new debounced function
 */

export function debounce<T extends any[]>(
  fn: (...args: T) => void,
  delay: number = 300
) {
  let timer: ReturnType<typeof setTimeout>

  return (...args: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
