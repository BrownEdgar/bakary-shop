
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import '../../sass/HomeSlide.scss'

export default function HomeSlide() {
  const slidesData = useSelector(state => state.slides);
  console.log(slidesData)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='HomeSlide'>
      <Slider {...settings}>
        {slidesData.map(elem => {
          return (
            <div className="slide-itemm" key={elem.id}>
              <img src={elem.image} alt="" />
              <div className="slide-content">
                <h1>{elem.title}</h1>
                <p>{elem.desc}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
