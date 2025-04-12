
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const numberGassingSlice = createSlice({
  name: 'numberGassing',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      console.log("first")
      // state.inputValue = action.payload;
    },
  },
})

export const { inputValue,  } = numberGassingSlice.actions

export default numberGassingSlice.reducer