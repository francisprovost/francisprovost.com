import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../../styles/variables'
import { List, BlankItem } from '../styled'

interface Job {
  company: string
  startDate: string
  endDate: string
  jobTitle: string
  contract?: boolean
}

const jobsData: Job[] = [
  {
    company: 'Vertigo Innovation',
    startDate: 'January 2019',
    endDate: 'Today',
    jobTitle: 'Fullstrack Developer'
  },
  {
    company: 'Sweet IQ',
    startDate: 'July 2019',
    endDate: 'March 2020',
    jobTitle: 'Front-End Developer',
    contract: true
  },
  {
    company: 'Solutions Medias 360',
    startDate: 'April 2014',
    endDate: 'December 2018',
    jobTitle: 'Fullstrack Developer & Front-End Technical Lead'
  }
]

const Content = styled.p`
  display: flex;
  flex-direction: column;
`

const JobTitle = styled.span`
  margin-top: ${dimensions.containerPadding * 0.3}em;
  font-size: ${dimensions.fontSize.small}px;
`
const JobDates = styled.span`
  font-size: ${dimensions.fontSize.xsmall}px;
`

const Experiences: React.FC = () => {
  return (
    <List id="experiences">
      {jobsData.map(({ company, startDate, endDate, jobTitle, contract }) => (
        <BlankItem>
          <>
            <h3>{company}</h3>
            <Content>
              <JobDates>
                {startDate} - {endDate}
              </JobDates>
              <JobTitle>
                {jobTitle}
                {contract && ' - Contractor'}
              </JobTitle>
            </Content>
          </>
        </BlankItem>
      ))}
    </List>
  )
}

export default Experiences
