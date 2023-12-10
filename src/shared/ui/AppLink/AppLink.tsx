import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  RED = 'red',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY
  } = props
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [cls[theme]])}
    >
      {children}
    </Link>
  )
}
