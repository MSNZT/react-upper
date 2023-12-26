import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

import HomeIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  function toggleSidebar () {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid='sidebar-test'
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleSidebar}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={cls.link}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.linkText}>{t('О нас')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.auth}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={cls.link}
        >
          <AboutIcon className={cls.icon}/>
          <span className={cls.linkText}>{t('Авторизация')}</span>
        </AppLink>
      </div>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
}
