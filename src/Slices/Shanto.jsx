import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {},
  },
  reducers: {
    loveFORever:(state , action)=>{
      state.value = action.payload
      
    } ,
    buywithlove:(state , action)=>{
      state.value = action.payload
    },
    almostdone:(state , action)=>{
      state.value = action.payload
    }
  },
})


export const { loveFORever , buywithlove , almostdone } = counterSlice.actions

export default counterSlice.reducer
