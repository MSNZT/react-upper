import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "@/shared/ui/Button/ui/Button";

describe('Button', () => {
  test('test', () => {
    render(<Button>Check</Button>);
    const btn = screen.getByTestId('btn-test');
    expect(btn).toBeInTheDocument()
    screen.debug()
  })
  
  test('check with add theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Check</Button>);
    const btn = screen.getByTestId('btn-test');
    expect(btn).toHaveClass('clear')
    screen.debug()
  })
})
