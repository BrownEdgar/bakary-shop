import React from 'react'

import '../../sass/Footer.scss'
import Fcontent from '../FContent/FContent'

export default function Footer() {
  return (
    <footer>
      <Fcontent />
      <div className="bottom">
        <p>
          <span>&copy;</span>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </footer>
  )
}
