import { type RouteProps } from 'react-router-dom'
import { AuthPage } from '@/pages/auth'
import { AboutPage } from '@/pages/about'
import { NotFoundPage } from '@/pages/notFound'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  AUTH = 'auth',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <AuthPage />
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
