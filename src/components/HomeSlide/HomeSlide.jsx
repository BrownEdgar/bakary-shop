
import { useSelector } from 'react-redux';
import Slider from "react-slick";

export default function HomeSlide() {
  const slidesData = useSelector(state => state.slides)
  console.log(slidesData)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='HomeSlide'>
      <Slider {...settings}>

      </Slider>
    </div>
  )
}
