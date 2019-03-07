function AccordionExample() {
  const [state, send] = useMachine(expandMachine)

  return (
    <Section>
      <h2>Accordion</h2>
      <Code>Expandable, useMachine, expandMachine</Code>

      <ExpandToggle onClick={() => send('TOGGLE')}>
        Show/hide accordion content
      </ExpandToggle>

      <Expandable expanded={state.value === `expanded`}>
        <Text>{paragraph}</Text>
      </Expandable>
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

const ExpandToggle = styled.button`
  display: flex;
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  padding-top: var(--s2);
  padding-bottom: var(--s2);
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget elit posuere, lacinia lacus nec, efficitur sapien. Morbi accumsan risus eget aliquet cursus. Proin in rutrum purus, quis finibus lacus. Aenean vitae lorem ut orci mollis scelerisque. Aliquam at pretium libero.`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import Expandable from '../@ex-components/Expandable'
import useMachine from '../../logic/examples/useMachine'
import { expandMachine } from '../../logic/examples/expand'
import { copy } from '../../styles'

export default AccordionExample
