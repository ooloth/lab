const FilterAndLimitExample = ({ cat1, cat2 }) => {
  let limit = 3

  // Wait for the document to exist
  if (typeof window !== `undefined`) {
    // Create a test element to check for grid support
    const testEl = document.createElement(`div`)
    testEl.style.display = `grid`

    // If grid is supported, show more items initially on large screens
    if (testEl.style.display === `grid`) {
      if (window.matchMedia(`(min-width: 62em)`).matches) {
        limit = 12
      } else if (window.matchMedia(`(min-width: 48em)`).matches) {
        limit = 9
      } else if (window.matchMedia(`(min-width: 36em)`).matches) {
        limit = 6
      }
    }
  }

  return (
    <section className="mv6 bg-near-white pa5 shadow-lg">
      <h2 className="mb4">Filter and Limit Example</h2>

      <FilterAndLimit
        cat1={cat1} // cat1 items
        cat2={cat2} // cat2 items
        defaultCategory="cat1"
        limit={limit}
        increment={limit}
      >
        {(items, visibleItems, limited, handleFilter, handleSeeMore) => (
          <>
            <Filters handleFilter={handleFilter} />
            <Items items={items} visibleItems={visibleItems} />
            {limited && <SeeMore handleSeeMore={handleSeeMore} />}
          </>
        )}
      </FilterAndLimit>

      {/* <FilterAndLimit
        cat1={cat1} // cat1 items
        cat2={cat2} // cat2 items
        defaultCategory="cat1"
        limit={limit}
        increment={limit}
        renderFilters={handleFilter => <Filters handleFilter={handleFilter} />}
        renderItems={(items, visibleItems) => (
          <Items items={items} visibleItems={visibleItems} />
        )}
        renderSeeMore={handleSeeMore => <SeeMore handleSeeMore={handleSeeMore} />}
      /> */}
    </section>
  )
}

/*
 *
 * Filters
 *
 */

const Filters = ({ handleFilter }) => (
  <fieldset className="mb3">
    <legend className="sr-only">Pick a category</legend>

    <FilterBtnRadio
      group="cats"
      category="cat1"
      label="Category 1"
      defaultChecked={true}
      handleFilter={handleFilter}
      className="btn mh2"
    />

    <FilterBtnRadio
      group="cats"
      category="cat2"
      label="Category 2"
      handleFilter={handleFilter}
      className="btn mh2"
    />
  </fieldset>
)

/*
 *
 * Items
 *
 */

const Items = ({ items, visibleItems }) => (
  <TransitionGroup component={null}>
    {visibleItems.map(item => (
      <Mount
        key={item.node.text}
        animateExit={false}
        // animateSpace={false}
        appear={false}
      >
        <Item item={item.node} />
      </Mount>
    ))}
  </TransitionGroup>
)

/* 

No <Mount /> version:

<>
  {items.map(item => (
    <p key={item.node.text} className="mt3">
    {item.node.text}
    </p>
  ))}
</> 

*/

/*
 *
 * Item
 *
 */

const Item = ({ item }) => <p className="mt3">{item.text}</p>

/*
 *
 * See More Button
 *
 */

const SeeMore = ({ handleSeeMore }) => (
  <button onClick={handleSeeMore} className="btn mt4">
    See More
  </button>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import FilterAndLimit from '../../components/examples/FilterAndLimit'
import FilterBtnRadio from '../../components/examples/FilterBtnRadio'
import Mount from '../../components/examples/Mount'

export default FilterAndLimitExample
