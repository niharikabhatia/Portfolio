import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Technologies from '../components/Technologies/Technologies'
import Projects from '../components/Projects/Projects'
import Internship from '../components/Internship/Internship'
import Timeline from '../components/TimeLine/TimeLine'
import Certificate from '../components/Certificate/Certificate'

import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {<BgAnimation />}
      </Section>
      <Projects />
      <Internship />
      <Certificate />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  )
}

export default Home
