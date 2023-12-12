import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
  className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.NotFound, {}, [className])}>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  )
}
