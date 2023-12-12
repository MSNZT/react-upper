import './styles/style.scss'
import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { type FC, Suspense } from 'react'
import { AppRouter } from '@/app/providers/router'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <>
      <Suspense fallback={''}>
        <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <div className="page-wrapper">
            <Sidebar/>
            <AppRouter/>
          </div>
        </div>
      </Suspense>
    </>
  )
}
