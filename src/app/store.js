import { configureStore } from '@reduxjs/toolkit'
import slidesReducer from '../features/slidesSlices'

export default configureStore({
  reducer: {
    slides: slidesReducer
  }
})