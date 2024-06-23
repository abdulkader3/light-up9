import { configureStore } from '@reduxjs/toolkit'
import Shanto from './Slices/Shanto'

export default configureStore({
  reducer: {
    counter: Shanto,
  },
})
