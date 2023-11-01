import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque labore rerum natus sequi quae voluptas sint fugit autem temporibus corrupti necessitatibus repellat ducimus ex, illo officiis sunt cupiditate provident!</p>
      </footer>

    </div>
  )
}
