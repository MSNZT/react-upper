import { CounterSchema } from '@/entities/Counter/model/types/CounterSchema'
import { counterActions, counterReducer } from '@/entities/Counter'

describe('counterSlice', () => {
  test('', () => {
    const state: CounterSchema = { value: 4 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 3 })
  })
})
