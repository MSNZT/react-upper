import { useTranslation } from 'react-i18next'
import {Counter} from "@/entities/Counter/ui/Counter";

const Auth = () => {
  const { t } = useTranslation()
  return (
    <div>
    <div>{t('Авторизация')}</div>
      <Counter />
    </div>
  )
}

export default Auth
