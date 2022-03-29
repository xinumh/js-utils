/**
 * 
 * Checks if `value` is `null` or `undefined`
 * 
 * @param {*} value value
 * @returns 
 */
const isNil = (value: any) => {
  return value == void 0 || value === '' || value === null
}

export default isNil