import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from '@/entities/Counter'
import {userReducer} from "@/entities/User";
import {useDispatch} from "react-redux";
import {createReducerManager} from "@/app/providers/StoreProvider/config/reducerManager";

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }
  
  const reducerManager = createReducerManager(rootReducers);
  
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
  
  // @ts-ignore
  store.reducerManager = reducerManager;
  
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>()
