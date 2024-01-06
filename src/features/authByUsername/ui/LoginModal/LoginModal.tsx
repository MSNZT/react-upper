import { Modal } from '@/shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm'
import {Suspense} from "react";
import {Loader} from "@/shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    isOpen,
    onClose
  } = props

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
      >
        <Suspense fallback={<Loader />}>
          <LoginFormAsync />
        </Suspense>
      </Modal>
    </div>
  )
}
