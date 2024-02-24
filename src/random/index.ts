/**
 *
 * @param min
 * @param max
 * @returns 两数之间随机数
 */

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/**
 *
 * @param min
 * @param max
 * @param isContainMax  是否包含最大值
 * @returns 两数之间随机整数
 */

export function getRandomInteger(
  min: number,
  max: number,
  isContainMax = false
) {
  const ceil = Math.ceil(min)
  const floor = Math.floor(max)
  const diff = floor - ceil + (isContainMax ? 1 : 0)

  return Math.floor(Math.random() * diff) + ceil
}
