/**
 * 中横线转驼峰
 * @param str kebab string
 * @returns camel string
 *
 * kebabToCamel('my-name-is-yucihent') => 'myNameIsYucihent'
 */

export default function kebabToCamel(str: string) {
  return str.replace(/-(\w)/g, (_, letter) => {
    return letter.toUpperCase()
  })
}
