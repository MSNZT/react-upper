import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from '@/shared/config/tests/componentRender/componentRender'

describe('Counter', () => {
  test('render counter and increment value', () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    const counter = screen.getByTestId('counter')
    const btn = screen.getByTestId('increment')
    expect(counter).toHaveTextContent('10')
    screen.debug()
    fireEvent.click(btn)
    expect(counter).toHaveTextContent('11')
    screen.debug()
  })
})
