import React, { type ErrorInfo, Suspense } from 'react'
import { ErrorPage } from '@/pages/ErrorPage'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Suspense fallback=''>
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
