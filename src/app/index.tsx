import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { type FC, Suspense } from 'react'
import { AppRouter } from '@/app/providers/router'

export const App: FC = () => {
  const { theme } = useTheme()
  document.body.className = theme;

  return (
    <>
      <div className={classNames('app', {}, [theme])}>
        <Suspense fallback=''>
          <Navbar/>
          <div className="page-wrapper">
            <Sidebar/>
            <AppRouter/>
          </div>
        </Suspense>
      </div>
    </>
  )
}
