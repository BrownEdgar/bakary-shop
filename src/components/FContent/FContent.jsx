import FaceBook from '../../assets/images/social/fb-icon.png'

import '../../sass/FContent.scss'

export default function Fcontent() {
  return (
    <div className='Fcontent'>
      <div className='items items_location'>
        <h2>Our Location</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboru</p>
        <address>
          <p>
            <span>Phone:</span>
            <span>0374123456</span>
          </p>
          <p>
            <span>Email:</span>
            <span>example@gmail.com</span>
          </p>
        </address>
        <ul id="icons">
          <li>
            <img src={FaceBook} alt="" />
          </li>
          <li>
            <img src={FaceBook} alt="" />
          </li>
          <li>
            <img src={FaceBook} alt="" />
          </li>
          <li>
            <img src={FaceBook} alt="" />
          </li>
        </ul>
      </div>
      <div className='items items_menu'>
        <h2>Our Location</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboru</p>
        <address>
          <p>
            <span>Phone:</span>
            <span>0374123456</span>
          </p>
          <p>
            <span>Email:</span>
            <span>example@gmail.com</span>
          </p>
        </address>
      </div>
      <div className='items items_posts'>
        <h2>Our Location</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboru</p>
        <address>
          <p>
            <span>Phone:</span>
            <span>0374123456</span>
          </p>
          <p>
            <span>Email:</span>
            <span>example@gmail.com</span>
          </p>
        </address>
      </div>
      <div className='items items_Feed.'>
        <h2>Our Location</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboru</p>
        <address>
          <p>
            <span>Phone:</span>
            <span>0374123456</span>
          </p>
          <p>
            <span>Email:</span>
            <span>example@gmail.com</span>
          </p>
        </address>
      </div>
    </div>
  )
}
