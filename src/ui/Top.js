function Top({ navLinks, socialLinks }) {
  return (
    <Header id="top">
      <h1>
        <Link href="/">Site Title</Link>
      </h1>

      <SkipNav href="#main-content" />

      <nav>
        <Link href="/page-2/">Page 2</Link>
      </nav>

      <MenuToggleAndOverlay navLinks={navLinks} socialLinks={socialLinks} />
    </Header>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  background-color: var(--light-pink);
  padding: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { Link, SkipNav } from './elements'
import MenuToggleAndOverlay from './@ex-components/MenuToggleAndOverlay'

export default Top
