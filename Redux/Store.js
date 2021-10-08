import { configureStore } from '@reduxjs/toolkit'
import { salesKPIAPI } from './Slices/salesKPI'
import { api } from './Slices/test'

export const store = configureStore({
  reducer: {
    [salesKPIAPI.reducerPath]: salesKPIAPI.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(salesKPIAPI.middleware,api.middleware),
})