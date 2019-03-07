const LimitExample = ({ items }) => {
  let limit = 1

  // Wait for the document to exist
  if (typeof window !== `undefined`) {
    // Create a test element to check for grid support
    const testEl = document.createElement(`div`)
    testEl.style.display = `grid`

    // If grid is supported, show more items initially on large screens
    // TODO: for more values, see GalleryAndLightboxExample
    if (testEl.style.display === `grid`) {
      if (window.matchMedia(`(min-width: 48em)`).matches) {
        limit = 2
      }
    }
  }

  return (
    <section className="mv6 bg-lightest-blue pa5 shadow-lg">
      <h2 className="mb4">Limit Example</h2>

      <Limit items={items} limit={limit} increment={limit}>
        {(visibleItems, limited, handleLoadMore) => (
          <>
            <Items items={visibleItems} />
            {limited && <LoadMore handleLoadMore={handleLoadMore} />}
          </>
        )}
      </Limit>
    </section>
  )
}

/*
 *
 * Items
 *
 */

const Items = ({ items }) => (
  <ul className="">
    <TransitionGroup component={null}>
      {items.map(item => (
        <Mount key={item.node.title} animateSpace={false} appear={false}>
          <Item item={item.node} />
        </Mount>
      ))}
    </TransitionGroup>
  </ul>
)

/*
 *
 * Item
 *
 */

const Item = ({ item }) => (
  <li>
    <h3 className="pv2">{item.title}</h3>
  </li>
)

/*
 *
 * Load More
 *
 */

const LoadMore = ({ handleLoadMore }) => (
  <button onClick={handleLoadMore} className="btn mt4">
    See more items
  </button>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import Limit from '../../components/examples/Limit'
import Mount from '../../components/examples/Mount'

export default LimitExample
