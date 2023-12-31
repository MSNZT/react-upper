import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
}

export const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body)
}
