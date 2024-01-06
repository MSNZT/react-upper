import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import ThemeLight from '@/shared/assets/icons/theme-light.svg'

export enum ButtonTheme {
  CLEAR = 'clear',
  BORDER = 'border',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'bgInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    children,
    square,
    disabled,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled
  }
  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
