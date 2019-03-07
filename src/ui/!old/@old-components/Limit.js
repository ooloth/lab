class Limit extends Component {
  state = {
    items: this.props.items,
    limit: this.props.limit,
    limited: this.props.items.length > this.props.limit ? true : false
  }

  handleLoadMore = () => {
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

    return this.props.children(visibleItems, limited, this.handleLoadMore)
  }
}

// TODO: add children as a prop
Limit.propTypes = {
  items: PropTypes.array.isRequired,
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

import { Component } from 'react'
import PropTypes from 'prop-types'

export default Limit

/*

INSTRUCTIONS:

<Limit items={articles} limit={3} increment={3}>
  {(visibleItems, limited, handleLoadMore) => (
    <>
      <Items items={visibleItems} />
      {limited && <LoadMore handleLoadMore={handleLoadMore} />}
    </>
  )}
</Limit>

*/
