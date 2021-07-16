import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import Link from 'next/link'

import { heights, dimensions, colors, breakpoints } from '../styles/variables'
import Container from './Container'
import { List, BlankItem } from './styled'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 5px ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const Nav = styled.nav`
  margin-left: auto;
`

const Menu = styled(List)`
  display: flex;
  justify-content: space-between;
  width: 350px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 250px;
  }
`

const MenuItem = styled(BlankItem)``

const MenuLink = styled.a`
  color: ${colors.white};
`

const Header: React.FC = () => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink href="/">
        <img src="/logo_light.svg" alt="Francis Provost" height={heights.header - 10} />
      </HomepageLink>
      <Nav>
        <Menu>
          <MenuItem>
            <MenuLink href="/#experiences">Experiences</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/#technos">Technos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/#contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderInner>
  </StyledHeader>
)

export default Header
