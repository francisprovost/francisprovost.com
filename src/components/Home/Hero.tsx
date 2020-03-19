import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { colors, dimensions, widths } from '../../styles/variables'
import Container from '../Container'
import { getEmSize } from '../../styles/mixins'

const Root = styled.div`
  background-color: ${colors.brand};
  width: 100%;
  padding: 4em ${dimensions.containerPadding}rem;
  color: ${colors.white};
  position: relative;
`
const BackgroundIcon = styled(FontAwesomeIcon)`
  position: absolute;
  opacity: 0.1;
  top: 10px;
  right: 30px;
  font-size: 25em;
`

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${getEmSize(widths.md)}em;
  max-width: 100%;
`

const Slogan = styled.span`
  font-size: ${dimensions.headingSizes.h1}em;
  margin-bottom: 1em;
`
const Description = styled.p`
  font-size: ${dimensions.fontSize.regular}px;
  span {
    font-weight: bold;
  }
`

const Hero: React.FC = () => {
  return (
    <Root>
      <Content>
        <Slogan>For quality first work</Slogan>
        <Description>
          I'm <span>Francis Provost</span> a Fullstack developer with a preference for Front-End. I pay close attention to details to
          maximize the user experience and the developer experience with the code I produce and good pratices that I can implement
        </Description>
      </Content>
      <BackgroundIcon icon={faCode} />
    </Root>
  )
}

export default Hero
