function LimitExample() {
  const itemsMachine = limitMachine.withContext({
    limit: 3,
    limitsByScreen: { xl: 8, lg: 6, sm: 4, xs: 3 },
  })
  const [state, send] = useMachine(itemsMachine)

  useRecalculateLimit(state, send)
  const visibleItems = limitItems(state, items)
  const limited = state.context.limit < items.length

  return (
    <Section>
      <h2>Limit</h2>
      <Code>useMachine, limitMachine, useRecalculateLimit, useTrail</Code>

      <Items
        visibleItems={visibleItems}
        previousLimit={state.context.previousLimit}
      />

      {limited && (
        <ViewAll onClick={() => send('VIEW_ALL')} aria-expanded={false}>
          View all items
        </ViewAll>
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

const ViewAll = styled.button`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

function Items({ visibleItems, previousLimit }) {
  // Isolate the previously rendered items (so they won't be re-animated)
  let previouslyRenderedItems = []
  if (previousLimit) {
    previouslyRenderedItems = visibleItems.slice(0, previousLimit)
  }

  // Isolate the new items (so they can be animated)
  let newItems = visibleItems
  if (previousLimit) {
    newItems = visibleItems.slice(previousLimit)
  }

  // Limit the trail length to the length of the newItems array
  const trail = useTrail(newItems.length, {
    opacity: 1,
    transform: `translateY(0%)`,
    from: { opacity: 0, transform: `translateY(25%)` },
  })

  return (
    <List>
      {previouslyRenderedItems.length > 0 &&
        previouslyRenderedItems.map((item, i) => <Item key={i}>{item}</Item>)}

      {newItems.length > 0 &&
        trail.map((props, i) => (
          <Item key={i} style={props}>
            {newItems[i]}
          </Item>
        ))}
    </List>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Item = styled(animated.li)`
  margin-top: var(--s4);
  background-color: var(--light-pink);
  padding: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const items = [
  `Item 1`,
  `Item 2`,
  `Item 3`,
  `Item 4`,
  `Item 5`,
  `Item 6`,
  `Item 7`,
  `Item 8`,
  `Item 9`,
  `Item 10`,
]

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import { animated, useTrail } from 'react-spring'

import useMachine from '../../logic/examples/useMachine'
import {
  limitMachine,
  useRecalculateLimit,
  limitItems,
} from '../../logic/examples/limit'

export default LimitExample
