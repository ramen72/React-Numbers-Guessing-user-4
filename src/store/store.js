import { configureStore } from '@reduxjs/toolkit'
import { numberGassingSlice } from '../slices/numberGassing/numberGassing'

export const store = configureStore({
  reducer: {
    value: numberGassingSlice,
  },
}) 