import { configureStore } from '@reduxjs/toolkit'
import slidesReducer from '../features/slidesSlices'
import sweetsReducer from '../features/sweetsSlice'
import newsReducer from '../features/newsSlice'

export default configureStore({
  reducer: {
    slides: slidesReducer,
    sweets: sweetsReducer,
    news: newsReducer,
  }
})