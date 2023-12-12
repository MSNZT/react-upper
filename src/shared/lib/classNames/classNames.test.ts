import { classNames } from './classNames'

describe('classNames', () => {
  test('with first params', () => {
    expect(classNames('main', {}, [])).toEqual('main')
  })
  test('main and mods', () => {
    expect(classNames('main', { kek: true, bek: false, dek: true }, [])).toEqual('main kek dek')
  })
  test('use all params', () => {
    expect(classNames('main', { kek: true, bek: false, dek: true }, ['theme'])).toEqual('main theme kek dek')
  })
  test('without params', () => {
    expect(classNames('', {}, [])).toEqual('')
  })
})
