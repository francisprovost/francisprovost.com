import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../../styles/variables'
import { List, BlankItem } from '../styled'

interface TechnoGroup {
  type: string
  technos: string[]
}

const technoGroups: TechnoGroup[] = [
  {
    type: 'Front-End',
    technos: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS']
  },
  {
    type: 'Testing',
    technos: ['React Testing Library', 'Jest', 'Enzyme', 'Cypress.io']
  },
  {
    type: 'Back-End',
    technos: ['Node.JS', 'Java']
  }
]

const Content = styled.p`
  display: flex;
  flex-direction: column;
`

const TechnoList = styled.span`
  margin-top: ${dimensions.containerPadding * 0.3}em;
  font-size: ${dimensions.fontSize.small}px;
`

const Technos: React.FC = () => {
  return (
    <List id="technos">
      {technoGroups.map(({ type, technos }) => (
        <BlankItem>
          <>
            <h3>{type}</h3>
            <Content>
              <TechnoList>{technos.join(', ')}</TechnoList>
            </Content>
          </>
        </BlankItem>
      ))}
    </List>
  )
}

export default Technos
