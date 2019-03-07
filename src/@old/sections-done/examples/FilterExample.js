const FilterExample = ({ category1, category2 }) => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Filter Example</h2>

    <FilterByCategory
      category1={category1} // the items in category1
      category2={category2} // the items in category2
      defaultCategory="category1"
      renderFilters={handleFilter => <Filters handleFilter={handleFilter} />}
      renderItems={items => <Items items={items} />}
    />
  </section>
)

/*
 *
 * Filters
 *
 */

const Filters = ({ handleFilter }) => (
  <fieldset className="mb3">
    <legend className="sr-only">Pick a category</legend>
    <FilterBtnRadio
      group="categories"
      category="category1"
      label="Category 1"
      defaultChecked={true}
      handleFilter={handleFilter}
      className="btn mh2"
    />

    <FilterBtnRadio
      group="categories"
      category="category2"
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

const Items = ({ items }) => (
  <TransitionGroup component={null}>
    {items.map(item => (
      <Mount
        key={item.node.text}
        animateExit={false}
        animateSpace={false}
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
 * Import & Exports
 *
 */

import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import FilterByCategory from '../../components/examples/FilterByCategory'
import FilterBtnRadio from '../../components/examples/FilterBtnRadio'
import Mount from '../../components/examples/Mount'

export default FilterExample
