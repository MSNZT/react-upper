import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import cls from "./LoginModal.module.scss"
import {Modal} from "@/shared/ui/Modal";
import { LoginForm } from "../../LoginForm";

interface LoginModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
	const {
		className,
		isOpen,
		onClose
	} = props
  const {t} = useTranslation()
	
	return (
		<div className={classNames(cls.LoginModal, {}, [className])}>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				lazy
			>
				<LoginForm />
			</Modal>
		</div>
	);
};
