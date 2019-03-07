function Bottom({ navLinks, socialLinks }) {
  return (
    <Footer>
      <FinePrint />
    </Footer>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Footer = styled.footer`
  background-color: var(--light-pink);
  padding: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

function FinePrint() {
  return (
    <Text>
      &copy; {new Date().getFullYear()} Site Title. All&nbsp;rights&nbsp;reserved.
      Brewed&nbsp;by&nbsp;
      <Link href="http://coffeeshopcreative.ca">Coffeeshop&nbsp;Creative</Link>.
    </Text>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { Link } from './elements'
import { copy } from '../styles'

export default Bottom
