import {getCounterValue} from "./getCounterValue";
import {StateSchema} from "@/app/providers/StoreProvider";
import {DeepPartial} from "@/app/types/own";

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 3}
    }
    expect(getCounterValue(state as StateSchema)).toBe(3)
  })
})
