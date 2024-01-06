import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

import cls from './Modal.module.scss'
import { Portal } from '@/shared/ui/Portal'
import { ReactNode, useCallback, useEffect, useState } from 'react'

interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  children?: ReactNode
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    children,
    lazy
  } = props

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.showModal]: isOpen
  }

  if (lazy && !isMounted) {
    return null
  }
  
  29

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.modalContent} onClick={e => { e.stopPropagation() }}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
