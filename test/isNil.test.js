import { isNil } from '../src/index'

test('should return true if the value is null or undefined', () => {
  expect(isNil(null)).toBe(true)
  expect(isNil(undefined)).toBe(true)
})