import Testimonial from '../Components/HomeComponent/Testimonial'
import ChoosePackage from '../Components/PackagesComponent/ChoosePackage'
import DigitalMarketing from '../Components/PackagesComponent/DigitalMarketing'
import GraphicPackage from '../Components/PackagesComponent/GraphicPackage'
import PackagesHeader from '../Components/PackagesComponent/PackagesHeader'
import UxPackage from '../Components/PackagesComponent/UxPackage'
import WebDevPackage from '../Components/PackagesComponent/WebDevPackage'

const OurPackages = () => {
  return (
    <div>
      <PackagesHeader />
      <ChoosePackage />
      <WebDevPackage />
      <GraphicPackage />
      <UxPackage />
      <DigitalMarketing />
      <Testimonial />
    </div>
  )
}

export default OurPackages
