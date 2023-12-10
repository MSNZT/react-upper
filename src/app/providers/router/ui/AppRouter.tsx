import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { Route, Routes } from 'react-router-dom'
import { type FC, Suspense } from 'react'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={'Загрузка...'}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) =>
          <Route
            key={path}
            path={path}
            element={
              <div className={'content-page'}>
                {element}
              </div>
            }
          />
        )}
      </Routes>
    </Suspense>
  )
}
