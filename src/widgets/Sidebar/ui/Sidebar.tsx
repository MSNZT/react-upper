import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  function toggleSidebar () {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.switchers}>
        <Button
          onClick={toggleSidebar}
        >
          {collapsed ? '>' : '<'}
        </Button>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
