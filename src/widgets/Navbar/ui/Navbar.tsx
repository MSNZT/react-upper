import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.PRIMARY}
        >
          {t('О нас')}
        </AppLink>
        <AppLink
          to={RoutePath.auth}
          theme={AppLinkTheme.RED}
        >
          {t('Авторизация')}
        </AppLink>
      </div>
    </div>
  )
}
