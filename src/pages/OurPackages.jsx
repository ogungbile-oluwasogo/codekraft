import ChoosePackage from '../Components/PackagesComponent/ChoosePackage'
import PackagesHeader from '../Components/PackagesComponent/PackagesHeader'
import WebDevPackage from '../Components/PackagesComponent/WebDevPackage'

const OurPackages = () => {
  return (
    <div>
      <PackagesHeader />
      <ChoosePackage />
      <WebDevPackage />
    </div>
  )
}

export default OurPackages
