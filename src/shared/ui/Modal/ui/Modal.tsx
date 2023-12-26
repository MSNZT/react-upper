import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

import cls from './Modal.module.scss'
import { Portal } from '@/shared/ui/Portal'
import { useCallback, useEffect } from 'react'
import {useTheme} from "@/app/providers/ThemeProvider";

interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props
  
  const {theme} = useTheme();

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

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.modalContent} onClick={e => { e.stopPropagation() }}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque beatae dolore fuga fugiat ipsum iure nam neque non nulla, recusandae saepe soluta? Assumenda cumque deserunt dicta modi quas temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque beatae dolore fuga fugiat ipsum iure nam neque non nulla, recusandae saepe soluta? Assumenda cumque deserunt dicta modi quas temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque beatae dolore fuga fugiat ipsum iure nam neque non nulla, recusandae saepe soluta? Assumenda cumque deserunt dicta modi quas temporibus!
          </div>
        </div>
      </div>
    </Portal>
  )
}
