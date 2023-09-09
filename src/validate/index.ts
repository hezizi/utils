/**
 * isObject
 * @param val
 * @returns
 */
export function isObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]'
}

/**
 * isEmptyObject
 * @param val
 * @returns
 */
export function isEmptyObject(val: unknown): boolean {
  return isObject(val) && Object.keys(val).length === 0
}

/**
 * isArray
 * @param obj
 * @returns
 */
export function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val)
}

/**
 * isFunction
 * @param val
 * @returns
 */
export function isFunction(val: unknown): val is (...args: any[]) => boolean {
  return typeof val === 'function'
}
