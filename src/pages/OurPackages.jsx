import { useEffect } from 'react'
import Testimonial from '../Components/HomeComponent/Testimonial'
import ChoosePackage from '../Components/PackagesComponent/ChoosePackage'
import DigitalMarketing from '../Components/PackagesComponent/DigitalMarketing'
import GraphicPackage from '../Components/PackagesComponent/GraphicPackage'
import PackagesHeader from '../Components/PackagesComponent/PackagesHeader'
import UxPackage from '../Components/PackagesComponent/UxPackage'
import WebDevPackage from '../Components/PackagesComponent/WebDevPackage'
import AOS from 'aos';
import 'aos/dist/aos.css';




const OurPackages = () => {
  
  useEffect(() => {
      AOS.init({
        duration: 1200,
      });
    }, [])
  return (
    <>
      <PackagesHeader />
      <ChoosePackage />
      <WebDevPackage />
      <GraphicPackage />
      <UxPackage />
      <DigitalMarketing />
      <Testimonial />
    </>
  )
}

export default OurPackages
