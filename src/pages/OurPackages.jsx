import ChoosePackage from '../Components/PackagesComponent/ChoosePackage'
import GraphicPackage from '../Components/PackagesComponent/GraphicPackage'
import PackagesHeader from '../Components/PackagesComponent/PackagesHeader'
import WebDevPackage from '../Components/PackagesComponent/WebDevPackage'

const OurPackages = () => {
  return (
    <div>
      <PackagesHeader />
      <ChoosePackage />
      <WebDevPackage />
      <GraphicPackage />
    </div>
  )
}

export default OurPackages
