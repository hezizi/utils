export function isObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isEmptyObject(val: unknown): boolean {
  return isObject(val) && !Object.keys(val).length
}

export function isFunction(val: unknown): val is (...args: any[]) => boolean {
  return typeof val === 'function'
}
