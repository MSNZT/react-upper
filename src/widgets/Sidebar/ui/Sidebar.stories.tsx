import { type Meta, type StoryObj } from '@storybook/react'
import { type Story } from '@storybook/blocks'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { Sidebar } from './Sidebar'
import {withRouter} from "storybook-addon-react-router-v6";

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    // layout: 'centered'
  },
  decorators: [withRouter],
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Sidebar>

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
