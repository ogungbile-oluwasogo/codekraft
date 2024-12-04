import AboutHeader from "../Components/AboutUsComponent/AboutHeader"
import Client from "../Components/AboutUsComponent/Client"
import Experience from "../Components/AboutUsComponent/Experience"
import MoreCodeKraft from "../Components/AboutUsComponent/MoreCodeKraft"
import OurTeam from "../Components/AboutUsComponent/OurTeam"
import TeamSkill from "../Components/AboutUsComponent/TeamSkill"
import AgencyServices from "../Components/HomeComponent/AgencyServices"


const AboutUs = () => {
  return (
    <div>
      <AboutHeader />
      <MoreCodeKraft />
      <Experience />
      <TeamSkill />
      <OurTeam />
      <Client />
    </div>
  )
}

export default AboutUs
