import * as React from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import { colors, dimensions } from '../styles/variables'

const SectionRoot = styled(Container)`
  margin: ${dimensions.containerPadding * 2}em 0;
`

const Title = styled.h2`
  color: ${colors.brand};
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 3px;
    min-width: 300px;
    width: 50%;
    background: ${colors.brand};
    background: linear-gradient(to right, ${colors.brand} 0%, transparent 100%);
  }
`

const SectionBody = styled.div`
  margin-top: ${dimensions.containerPadding}em;
`

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionRoot>
      <Title>{title}</Title>
      <SectionBody>{children}</SectionBody>
    </SectionRoot>
  )
}

export default Section
