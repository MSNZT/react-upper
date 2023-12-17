import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation()

  function reloadPage () {
    location.reload()
  }

  return (
    <div className={classNames(styles.ErrorPage, {}, [className])}>
      <h2>{t('Произошла ошибка, пожалуйста обновите страницу')}</h2>
      <Button
        onClick={reloadPage}
        theme={ButtonTheme.OUTLINE}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
