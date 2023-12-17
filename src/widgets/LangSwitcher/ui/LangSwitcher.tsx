import { classNames } from '@/shared/lib/classNames/classNames'

import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  async function toggleLanguage () {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {t(short ? 'Короткий язык' : 'Полный язык')}
    </Button>
  )
}
