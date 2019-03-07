function DialogExample() {
  const [state, send] = useMachine(dialogMachine)

  const transitions = useTransition(state.value === `open`, null, {
    from: { opacity: 0, transform: `translateY(1rem)` },
    enter: { opacity: 1, transform: `translateY(0rem)` },
    leave: { opacity: 0, transform: `translateY(-4rem)` },
    onRest: () => send('CLOSE_OVERLAY'), // must manually close after dialog is out
  })

  return (
    <Section>
      <h2>Dialog</h2>
      <Code>@reach/dialog, useMachine, dialogMachine, useTransition</Code>

      <OpenDialog onClick={() => send('OPEN')}>Open dialog</OpenDialog>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Overlay
              key={key}
              isOpen={state.value !== `closed`}
              onDismiss={() => send('CLOSE')}
              style={{ opacity: props.opacity }}
            >
              <Content style={{ transform: props.transform }}>
                <Close onClick={() => send('CLOSE')}>Close dialog</Close>
                <p>Dialog content goes here...</p>
              </Content>
            </Overlay>
          )
      )}
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

const OpenDialog = styled.button`
  display: flex;
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Overlay = styled(animated(DialogOverlay))`
  && {
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background-color: hsla(0, 0%, 0%, 0.8);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Content = styled(animated(DialogContent))`
  && {
    position: relative;
    box-shadow: var(--shadow5);
    overflow: hidden;
    padding: var(--s6) var(--s4);
    width: 90vw;
    max-width: var(--s14);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Close = styled.button`
  margin-bottom: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'

// TODO: import this once per project:
// import '@reach/dialog/styles.css'

import useMachine from '../../logic/examples/useMachine'
import { dialogMachine } from '../../logic/examples/dialog'

export default DialogExample
