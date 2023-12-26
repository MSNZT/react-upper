import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'

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
    ...otherProps
  } = props
  
  const mods: Mods = {
    [cls.square]: square
  }
  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
