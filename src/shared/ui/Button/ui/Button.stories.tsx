import {Button, ButtonTheme} from "./Button";
import {Meta, StoryObj} from "@storybook/react";
import {Story} from "@storybook/blocks";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemeProvider/lib/ThemeContext";


const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Kuku'
  },
}

export const Secondary: Story = {
  args: {
    children: 'Kuku',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
