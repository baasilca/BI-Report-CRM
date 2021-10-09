import { configureStore } from '@reduxjs/toolkit'
import { salesKPIAPI } from './Slices/salesKPI'
import { yearlyOverviewAPI } from './Slices/yearlyOverview'

export const store = configureStore({
  reducer: {
    [salesKPIAPI.reducerPath]: salesKPIAPI.reducer,
    [yearlyOverviewAPI.reducerPath]: yearlyOverviewAPI.reducer,

  },
  middleware: (gDM) => gDM().concat(salesKPIAPI.middleware,yearlyOverviewAPI.middleware),
})