import { configureStore } from '@reduxjs/toolkit'
import { salesKPIAPI } from './Slices/salesKPI'

export const store = configureStore({
  reducer: {
    [salesKPIAPI.reducerPath]: salesKPIAPI.reducer,
  },
  middleware: (gDM) => gDM().concat(salesKPIAPI.middleware),
})