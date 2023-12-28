import { Modal } from '@/shared/ui/Modal'
import { LoginForm } from '../../LoginForm'

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
        <LoginForm />
      </Modal>
    </div>
  )
}
