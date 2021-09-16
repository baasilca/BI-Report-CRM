import { configureStore } from '@reduxjs/toolkit'
import { orderAPI } from './Slices/order'

export const store = configureStore({
  reducer: {
    [orderAPI.reducerPath]: orderAPI.reducer,
  },
  middleware: (gDM) => gDM().concat(orderAPI.middleware),
})