class Collapse extends Component {
  state = { expanded: this.props.expanded || false }

  static propTypes = {
    duration: PropTypes.number,
    ease: PropTypes.string,
    expanded: PropTypes.bool,
    renderContent: PropTypes.func.isRequired,
    renderToggle: PropTypes.func.isRequired
  }

  static defaultProps = {
    duration: 1,
    ease: `Power3.easeInOut`,
    expanded: false
  }

  handleToggle = () => (this.state.expanded ? this.collapse() : this.expand())

  handleKeyUp = e => e.key === `Enter` && this.handleToggle()

  expand = () => {
    loadjs.ready(`gsap`, () => {
      // Expand section to its natural height...
      TweenLite.set(this.node, {
        height: `auto`,
        autoAlpha: 1
      })

      // ...from a starting height of 0
      TweenLite.from(this.node, this.props.duration, {
        height: 0,
        autoAlpha: 0,
        ease: this.props.ease
      })

      this.setState({ expanded: true })
    })
  }

  collapse = () => {
    loadjs.ready(`gsap`, () => {
      // Collapse section height to 0
      TweenLite.to(this.node, this.props.duration, {
        height: 0,
        autoAlpha: 0,
        ease: this.props.ease
      })

      this.setState({ expanded: false })
    })
  }

  render() {
    const { renderContent, renderToggle, className = `` } = this.props
    const { expanded } = this.state

    return (
      <>
        <div
          ref={el => (this.node = el)}
          className={`overflow-hidden ${className}`}
          style={{ height: 0 }}
        >
          {renderContent()}
        </div>
        {renderToggle(expanded, this.handleToggle, this.handleKeyUp)}
      </>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loadjs from 'loadjs'

export default Collapse

/*

USAGE:

<Collapse
  renderContent={() => <CollapsedContent />}
  renderToggle={(expanded, handleToggle, handleKeyUp) => (
    <ToggleComponent 
      expanded={expanded} 
      handleToggle={handleToggle} 
      handleKeyUp={handleKeyUp}
    />
  )}
/>

NOTES:

1. Toggle allows for repeated expanding/collapsing, but can choose to only render toggle when expanded={false} in the renderToggle markup (don't need to add a prop for that)

*/
