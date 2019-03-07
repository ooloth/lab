function ReadMoreExample() {
  const [state, send] = useMachine(readMoreMachine)
  useExpandOnLargeScreens(send)

  return (
    <Section>
      <h2>Read More</h2>
      <Code>Expandable, useMachine, readMoreMachine, useExpandOnLargeScreens</Code>

      <VisibleParagraphs paragraphs={paragraphs.slice(0, 1)} />

      {state.value === `collapsed` && (
        <ReadMore onClick={() => send('EXPAND')} aria-expanded={false}>
          Read more
        </ReadMore>
      )}

      <HiddenParagraphs
        expanded={state.value === `expanded`}
        paragraphs={paragraphs.slice(1)}
      />
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

function VisibleParagraphs({ paragraphs }) {
  return paragraphs.map(paragraph => (
    <Text key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
  ))
}

///////////////////////////////////////////////////////////////////////////////////

const ReadMore = styled.button`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

function HiddenParagraphs({ expanded, paragraphs }) {
  return (
    <Expandable expanded={expanded}>
      {paragraphs.map(paragraph => (
        <Text key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </Expandable>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  padding-top: var(--s5);
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget elit posuere, lacinia lacus nec, efficitur sapien. Morbi accumsan risus eget aliquet cursus. Proin in rutrum purus, quis finibus lacus. Aenean vitae lorem ut orci mollis scelerisque. Aliquam at pretium libero.`,
  `Curabitur auctor aliquam augue vitae auctor. Vivamus tincidunt tincidunt ex eget accumsan. Vestibulum interdum orci vel auctor dapibus. Aenean accumsan dui mauris, a vestibulum nulla volutpat a.`,
]

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import Expandable from '../@ex-components/Expandable'
import useMachine from '../../logic/examples/useMachine'
import {
  readMoreMachine,
  useExpandOnLargeScreens,
} from '../../logic/examples/readMore'
import { copy } from '../../styles'

export default ReadMoreExample
