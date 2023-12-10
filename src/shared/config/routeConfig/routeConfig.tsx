import { type RouteProps } from 'react-router-dom'
import { Auth } from '@/pages/auth'
import { About } from '@/pages/about'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  AUTH = 'auth'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.AUTH]: '/auth'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Auth />
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <Auth />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />
  }
}
