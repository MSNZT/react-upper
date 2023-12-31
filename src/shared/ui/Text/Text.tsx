import cls from "./Text.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";

interface TextProps {
	className?: string
  title?: string
  text?: string,
  theme?: TextTheme
}

export enum TextTheme {
  ERROR = 'error'
}

export const Text = (props: TextProps) => {
  const {
    className,
    title,
    text,
    theme
  } = props
  
  return (
    <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
