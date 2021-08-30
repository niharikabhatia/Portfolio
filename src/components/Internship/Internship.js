import React from 'react'
import Technologies from '../Technologies/Technologies'
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './InternshipStyles'
import {
  ListContainer,
  ListParagraph,
  ListTitle,
  List,
} from '../Technologies/TechnologiesStyles'
import { Hr } from '../Projects/ProjectsStyles'

const Internship = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>Internships</SectionTitle>
      <List>
        <ListContainer>
          <ListTitle>
            <b>
              Software Research Intern in Devops, LinuxWorld Informatics Pvt.
              Ltd.
            </b>
          </ListTitle>
          <ListParagraph>
            • Developed a highly scalable automation system, designed to
            automate system administration tasks mainly in efficient manner
            using Devops. • Used ansible to automate containers and dynamic node
            setup, and docker to deploy all core cloud services and remote
            facial authentication. • Analyzed problems that are faced during the
            development stages of the product and how they are carefully
            debugged in the most efficient time.
          </ListParagraph>
        </ListContainer>
        <ListContainer>
          <ListTitle>
            <b>Market Research and Data Analysis Intern, Mentee Education</b>
          </ListTitle>
          <ListParagraph>
            •Presented market research to study features and growth of major
            competitors to understand market position and improve it and
            provided ideas to improve the assessment quality and performance
            analysis. Using adaptive learning. • Analyzed students’ performance
            of mock tests conducted by Mentee on Excel using Pivot Tables and
            Statistical tools in detail on their relative skill, topic, and
            subtopic ranks and made other analysis reports of the students for
            their institution.
            <Hr />
          </ListParagraph>
        </ListContainer>
      </List>
    </LeftSection>
  </Section>
)

export default Internship
