import {classNames} from '@/shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import {Button} from '@/shared/ui/Button'
import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {Modal} from '@/shared/ui/Modal'
import {ButtonTheme} from "@/shared/ui/Button/ui/Button";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)

  function modalOpen () {
    setIsOpenModal(prev => !prev)
  }

  function modalClose () {
    setIsOpenModal(false)
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.items}>
        <Button
          onClick={modalOpen}
          theme={ButtonTheme.CLEAR}
          className={cls.btn}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isOpenModal} onClose={modalClose}/>
    </div>
  )
}
