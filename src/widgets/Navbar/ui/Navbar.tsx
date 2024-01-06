import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { LoginModal } from '@/features/authByUsername'
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "@/entities/User";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthNodal] = useState(false)
  const authData = useSelector(getUserAuthData)

  function modalOpen () {
    setIsAuthNodal(prev => !prev)
  }

  function modalClose () {
    setIsAuthNodal(false)
  }
  
  function logout() {
    dispatch(userActions.setLogout())
  }
  
  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.items}>
          <Button
            onClick={logout}
            theme={ButtonTheme.CLEAR}
            className={cls.btn}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
    )
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
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={modalClose}/>}
    </div>
  )
}
