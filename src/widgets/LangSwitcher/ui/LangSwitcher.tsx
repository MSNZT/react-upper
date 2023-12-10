import { classNames } from '@/shared/lib/classNames/classNames'

import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation()

  function toggleLanguage () {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
    >
      {i18n.language}
    </Button>
  )
}
