import { CounterSchema } from '@/entities/Counter/model/types/CounterSchema'
import {UserSchema} from "@/entities/User";
import {LoginSchema} from "@/features/authByUsername";
import {EnhancedStore, Reducer, ReducersMapObject, UnknownAction} from "@reduxjs/toolkit";
import {CombinedState} from "@reduxjs/toolkit/query";

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema
  
  // Code splitting
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  // reduce: (state: StateSchema, action: UnknownAction) => CombinedState<StateSchema>
  reduce: Reducer<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
