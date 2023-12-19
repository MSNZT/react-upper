import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "@/shared/ui/Button/ui/Button";

describe('Button', () => {
  test('test', () => {
    render(<Button data-testid='btn-test'>Check</Button>);
    const btn = screen.getByTestId('btn-test');
    expect(btn).toBeInTheDocument()
    screen.debug()
  })
  
  test('check with add theme', () => {
    render(<Button data-testid='btn-test' theme={ButtonTheme.CLEAR}>Check</Button>);
    const btn = screen.getByTestId('btn-test');
    expect(btn).toHaveClass('clear')
    screen.debug()
  })
})
