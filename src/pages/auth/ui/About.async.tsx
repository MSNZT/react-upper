import { lazy } from 'react'

export const AuthAsync = lazy(async () => await import('./Auth'))
