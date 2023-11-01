import { createSlice } from '@reduxjs/toolkit'

const initalSlidesValue = [
  { id: 1, title: 'We create hamov memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?' },
  { id: 2, title: 'We create hamov memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?' },
  { id: 3, title: 'We create hamov memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?' },
]


const slidesSlice = createSlice({
  name: "slides",
  initialState: initalSlidesValue,
  reducers: {

  }
})

export default slidesSlice.reducer