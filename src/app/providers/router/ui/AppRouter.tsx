import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { Route, Routes } from 'react-router-dom'
import { type FC, Suspense } from 'react'
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader'

export const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) =>
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className={'content-page'}>
                {element}
              </div>
            </Suspense>
          }
        />
      )}
    </Routes>
  )
}
