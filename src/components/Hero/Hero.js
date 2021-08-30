import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Niharika Bhatia and this is my personal portfolio that summarises
        my academic and management skills.
      </SectionText>
      <SectionText>
        A Computer Science and Engineering student who is enthusiastic,
        hardworking and passionate to learn, firm believer in flexibility and
        evolution along with the rapidly evolving world. Being worked for
        different projects helped to adapt to changes quickly and made me a
        mature team-worker. I am able to work well both in a team environment as
        well as using my own initiative. I can work well under pressure, adhere
        to strict deadlines and bring creative ideas to the table.
      </SectionText>
      <Button onClicki={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
