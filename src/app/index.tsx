import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from '@/app/providers/router'
import {useDispatch} from "react-redux";
import {userActions} from "@/entities/User";

export const App: FC = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme()
  document.body.className = theme
  
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
