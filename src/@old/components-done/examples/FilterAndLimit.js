class FilterAndLimit extends Component {
  state = {
    items: this.props[this.props.defaultCategory],
    limit: this.props.limit,
    limited:
      this.props[this.props.defaultCategory].length > this.props.limit ? true : false
  }

  handleFilter = e =>
    this.setState({
      items: this.props[e.target.value],
      limit: this.props.limit,
      limited: this.props[e.target.value].length > this.props.limit ? true : false
    })

  handleSeeMore = () => {
    const { items, limit } = this.state
    const increment = this.props.increment || this.props.limit
    const remaining = items.length - limit

    if (remaining > increment) {
      this.setState(prev => ({ limit: prev.limit + increment }))
    } else {
      this.setState(prev => ({ limit: prev.limit + remaining, limited: false }))
    }
  }

  render() {
    const { items, limit, limited } = this.state
    const visibleItems = items.slice(0, limit)

    return this.props.children(
      items,
      visibleItems,
      limited,
      this.handleFilter,
      this.handleSeeMore
    )

    // return (
    //   <>
    //     {this.props.renderFilters(this.handleFilter)}
    //     {this.props.renderItems(items, visibleItems)}
    //     {limited && this.props.renderSeeMore(this.handleSeeMore)}
    //   </>
    // )
  }
}

FilterAndLimit.propTypes = {
  children: PropTypes.func.isRequired,
  defaultCategory: PropTypes.string.isRequired,
  // renderFilters: PropTypes.func.isRequired,
  // renderItems: PropTypes.func.isRequired,
  limit: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  increment: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/*
 *
 * Import & Exports
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default FilterAndLimit

/*

INSTRUCTIONS:

1. Pass each category's items via a separate prop (e.g. "blue" items via a "blue" prop).
2. If an "all" category is needed, pass the items (in the correct order) via an "all" prop.
3. Match each filter button's value attribute to its category name exactly.

*/
