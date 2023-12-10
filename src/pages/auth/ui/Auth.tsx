import { useTranslation } from 'react-i18next'

const Auth = () => {
  const { t } = useTranslation()
  return (
    <div>{t('Авторизация')}</div>
  )
}

export default Auth
