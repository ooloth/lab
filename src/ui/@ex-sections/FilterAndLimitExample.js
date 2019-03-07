function LimitExample() {
  const itemsMachine = filterAndLimitMachine.withContext({
    category: 'all',
    limit: 3,
    limitsByScreen: { xl: 8, lg: 6, sm: 4, xs: 3 },
  })
  const [state, send] = useMachine(itemsMachine)

  useRecalculateLimit(state, send)
  const itemsInCategory = filterItemsByCategory(state, items)
  const visibleItems = limitItems(state, itemsInCategory)
  const limited = state.context.limit < itemsInCategory.length
  const viewAllText = state.context.category === `all` ? `` : state.context.category

  return (
    <Section>
      <h2>Filter and Limit</h2>
      <Code>useMachine, filterAndLimitMachine, useRecalculateLimit, useTrail</Code>

      <Filters category={state.context.category} send={send} />

      <Items
        visibleItems={visibleItems}
        previousLimit={state.context.previousLimit}
      />

      {limited && (
        <ViewAll onClick={() => send('VIEW_ALL')} aria-expanded={false}>
          View all {viewAllText} items
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

function Filters({ category, send }) {
  return (
    <Toolbar role="toolbar" aria-label="filter options" aria-controls="properties">
      <Filter value="all" category={category} send={send} />
      <Filter value="odd" category={category} send={send} />
      <Filter value="even" category={category} send={send} />
    </Toolbar>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Toolbar = styled.div`
  padding-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

function Filter({ value, category, send }) {
  return (
    <Button
      value={value}
      onClick={() => send({ type: 'CHANGE_CATEGORY', category: value })}
      aria-pressed={category === value}
    >
      {value} items
    </Button>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Button = styled.button`
  margin-right: var(--s4);
  text-transform: capitalize;
`

///////////////////////////////////////////////////////////////////////////////////

const ViewAll = styled.button`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

function Items({ visibleItems, previousLimit }) {
  // Isolate the previously rendered items (so they won't be re-animated)
  const previouslyRenderedItems = previousLimit
    ? visibleItems.slice(0, previousLimit)
    : []

  // Isolate the new items (so they can be animated)
  const newItems = previousLimit ? visibleItems.slice(previousLimit) : visibleItems

  // Limit the trail length to the length of the newItems array
  const trail = useTrail(newItems.length, {
    opacity: 1,
    transform: `translateY(0%)`,
    from: { opacity: 0, transform: `translateY(25%)` },
  })

  return (
    <List>
      {previouslyRenderedItems.length > 0 &&
        previouslyRenderedItems.map(item => (
          <Item key={item.text}>{item.text}</Item>
        ))}

      {newItems.length > 0 &&
        trail.map((props, i) => (
          <Item key={newItems[i].text} style={props}>
            {newItems[i].text}
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
  { text: `Item 1`, category: `odd` },
  { text: `Item 2`, category: `even` },
  { text: `Item 3`, category: `odd` },
  { text: `Item 4`, category: `even` },
  { text: `Item 5`, category: `odd` },
  { text: `Item 6`, category: `even` },
  { text: `Item 7`, category: `odd` },
  { text: `Item 8`, category: `even` },
  { text: `Item 9`, category: `odd` },
  { text: `Item 10`, category: `even` },
]

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import { animated, useTrail } from 'react-spring'

import useMachine from '../../logic/examples/useMachine'
import {
  filterAndLimitMachine,
  useRecalculateLimit,
  filterItemsByCategory,
  limitItems,
} from '../../logic/examples/filterAndLimit'

export default LimitExample
