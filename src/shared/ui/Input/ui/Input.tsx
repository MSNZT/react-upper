import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Input.module.scss'
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    onChange,
    value,
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  function onChangeHandler (evt: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(evt.target.value)
    setCaretPosition(evt.target.value.length)
  }

  function onFocus () {
    setIsFocused(true)
  }

  function onBlur () {
    setIsFocused(false)
  }

  function onSelect (evt: any) {
    setCaretPosition(evt.target.selectionStart || 0)
  }

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      inputRef.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <span className={cls.placeholder}>
        {`${placeholder}>`}
      </span>}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeHandler}
          type={type}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          maxLength={20}
          {...otherProps}
        />
        {isFocused && <span
          className={cls.caret}
          style={{ left: `${caretPosition * 9}px` }}
        ></span>}
      </div>
    </div>
  )
})
