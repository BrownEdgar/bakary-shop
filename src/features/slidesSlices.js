import { createSlice } from '@reduxjs/toolkit'

const initalSlidesValue = [
  { id: 1, title: 'We create hamov Memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?', image: './public/images/slides/slider1.jpg' },
  { id: 2, title: 'We create hamov memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?', image: './public/images/slides/slider2.jpg' },
  { id: 3, title: 'We create hamov memories', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio maiores quisquam, temporibus saepe minus! Consequatur error ex vero officiis mollitia? Quos eveniet quo vero magni et aut nisi officia?', image: './public/images/slides/slider3.jpg' },
]


const slidesSlice = createSlice({
  name: "slides",
  initialState: initalSlidesValue,
  reducers: {

  }
})

export default slidesSlice.reducer