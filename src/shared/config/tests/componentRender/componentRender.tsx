import {type ReactNode} from 'react'
import {MemoryRouter} from 'react-router-dom'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18nForTest from '@/shared/config/i18n/i18nForTest'
import {StateSchema, StoreProvider} from "@/app/providers/StoreProvider";
import {DeepPartial} from "@/app/types/own";

export interface componentRenderOptions {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState
  } = options
  
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
