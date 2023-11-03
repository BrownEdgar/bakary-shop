import Cakes from '../../components/Cakes/CAkes';
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import News from '../../components/News/News';
import Sweets from '../../components/Sweets/Sweets';
import '../../sass/Home.scss'

export default function Home() {
  return (
    <div className='Home'>
      <HomeSlide />
      <Sweets />
      <News />
    </div>
  )
}
