import { createSlice } from "@reduxjs/toolkit"
const initialStateValue = {
  data: [
    {
      id: "1",
      title: "Desert Cup",
      description: "Lorem ipsum dolor sit amet  elit. Neque mollitia ullam labore placeat laborum maxime. Sint ex doloremque ut similique.",
      image: "./public/images/desert-cup.jpg"

    },
    {
      id: "2",
      title: "Fruit Cakes",
      description: "Lorem ipsum dolor sit amet  elit. Neque mollitia ullam labore placeat laborum maxime. Sint ex doloremque ut similique.",
      image: "./public/images/fruit-cakes.jpg"
    },
    {
      id: "3",
      title: "Weeding Cake",
      description: "Lorem ipsum dolor sit amet  elit. Neque mollitia ullam labore placeat laborum maxime. Sint ex doloremque ut similique.",
      image: "./public/images/wedding-cakes.jpg"
    },

    {
      id: "4",
      title: "Buns & Meals",
      description: "Lorem ipsum dolor sit amet  elit. Neque mollitia ullam labore placeat laborum maxime. Sint ex doloremque ut similique.",
      image: "./public/images/buns.jpg"
    },

  ]
}
const newsSlice = createSlice({
  name: "sweets",
  initialState: initialStateValue,
  reducers: {
  }
})


export function seslectAllNews(state) {
  return state.news.data
}



export default newsSlice.reducer