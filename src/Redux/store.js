import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/userSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, counterReducer)

  export const store = configureStore({
    reducer: {counter:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })