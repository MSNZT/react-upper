import { useTranslation } from 'react-i18next'
import {Counter} from "@/entities/Counter/ui/Counter";

const About = () => {
  const { t } = useTranslation('about')
  return (
    <div>
      <div>{t('О нас')}</div>
      <Counter/>
    </div>
  )
}

export default About
