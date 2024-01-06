import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'

import cls from './LoginForm.module.scss'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { useSelector } from "react-redux";
import { useCallback } from 'react'
import { useAppDispatch } from "@/app/providers/StoreProvider";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import {
  getLoginIsLoading
} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import {
  DynamicModuleLoader,
  ReducersList
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])
  
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])
  
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);
  
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} className={cls.formName}/>
        {error && <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR}/>}
        <form className={cls.form}>
          <Input
            value={username}
            onChange={onChangeUsername}
            placeholder={t('Логин')}
            className={cls.input}
            autofocus
          />
          <Input
            value={password}
            onChange={onChangePassword}
            placeholder={t('Пароль')}
            className={cls.input}
          />
          <Button
            onClick={onLoginClick}
            className={cls.formBtn}
            theme={ButtonTheme.OUTLINE}
            disabled={isLoading}
          >
            {t('Войти')}
          </Button>
        </form>
      </div>
    </DynamicModuleLoader>
  )
}

export default LoginForm
