function ScrollToIdExample() {
  function scrollToTop(e, id) {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <Section>
      <h2>Scroll to ID</h2>
      <Code>scrollToId</Code>

      <Button onClick={e => scrollToTop(e, `#top`)}>Scroll to top</Button>
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const Button = styled.button`
  display: flex;
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import scrollToId from '../../logic/examples/scrollToId'

export default ScrollToIdExample
