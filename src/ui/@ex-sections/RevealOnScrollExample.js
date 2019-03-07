function RevealOnScrollExample() {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const props = useSpring({
    opacity: onScreen ? 1 : 0,
    transform: onScreen ? `translateY(0%)` : `translateY(25%)`,
    from: { opacity: 0, transform: `translateY(25%)` },
    config: config.slow,
  })

  return (
    <Section>
      <h2>Reveal on Scroll</h2>
      <Code>useOnScreen</Code>

      <Item ref={ref} style={props}>
        Lorem ipsum dolor sit amet consectetur.
      </Item>

      {/* TODO: add a state chart to handle whether the reveal happens once or multiple times? */}
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

const Item = styled(animated.p)`
  margin-top: var(--s4);
  background-color: var(--light-pink);
  padding: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React, { useRef } from 'react'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'

import useOnScreen from '../../logic/examples/useOnScreen'

export default RevealOnScrollExample
