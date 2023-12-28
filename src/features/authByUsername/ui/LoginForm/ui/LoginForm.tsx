import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";

import cls from "./LoginForm.module.scss"
import {ButtonTheme} from "@/shared/ui/Button/ui/Button";

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Логин')}
        className={cls.input}
        autofocus
      />
      <Input
        placeholder={t('Пароль')}
        className={cls.input}
      />
      <Button
        className={cls.formBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
