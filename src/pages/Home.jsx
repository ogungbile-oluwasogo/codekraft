
import AgencyServices from '../Components/HomeComponent/AgencyServices';
import Need from '../Components/HomeComponent/Need';
import style from './Home.module.css';
import { Typewriter } from 'react-simple-typewriter';
import Packages from '../Components/HomeComponent/Packages';
import AllPackages from '../Components/HomeComponent/AllPackages';
import Testimonial from '../Components/HomeComponent/Testimonial';

const Home = () => {



  return (
    <>
      <div className={style['image-container']}>
        <img src="/home.jpg" alt="" />
        <div className={style.overlay}>
          <div className={style.frame1}></div>
            <h1>CODEKRAFT LTD.</h1>
            <p>Crafting Digital Experiences with Code and Creativity</p>
            <h2>
              <Typewriter
                words={['Unlock your business potential through our planning expertise.....', 'Maximize your business success with our expert planning solutions.....', 'Transform your business with our visionary planning expertise.....']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </h2>
        </div>
      </div>
      <div className={style['flex-home']}>
        <Need />
      </div>
      <AgencyServices />
      <Packages />
      <AllPackages />
      <Testimonial />
    </>
  )
}

export default Home
