import { type Meta, type StoryObj } from '@storybook/react'
import { type Story } from '@storybook/blocks'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Navbar>

export default meta

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const Secondary: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
