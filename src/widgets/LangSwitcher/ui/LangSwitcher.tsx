import { classNames } from '@/shared/lib/classNames/classNames'

import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  function toggleLanguage () {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {t('Русский')}
    </Button>
  )
}
