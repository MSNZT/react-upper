import {Sidebar} from "@/widgets/Sidebar";
import {fireEvent, screen} from "@testing-library/react";
import {componentRender} from "@/shared/config/tests/componentRender/componentRender";

describe('Sidebar', () => {
  test('with only params', () => {
    componentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
    screen.debug()
  })
  test('click on the button', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed');
    screen.debug()
  })
})
