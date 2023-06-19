import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'common',
  initialState: {
    count: 2,
  },
  reducers: {
    increment(state) {
      state.count++
    },
  },
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
