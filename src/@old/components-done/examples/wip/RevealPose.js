class RevealPose extends Component {
  state = { isVisible: false }

  // Waypoint handlers
  handleWaypointEnter = () => this.setState({ isVisible: true })
  handleWaypointLeave = () => this.props.reset && this.setState({ isVisible: false })

  render() {
    const {
      css,
      offsetTop,
      offsetBottom,
      className = ``,
      style = {},
      tag,
      children
    } = this.props
    const Tag = tag || `div`

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        topOffset={offsetTop}
        bottomOffset={offsetBottom}
      >
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </Waypoint>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import loadjs from 'loadjs'
// import { withStateMachine } from 'react-automata'
import Waypoint from 'react-waypoint'

export default RevealPose

/*

INSTRUCTIONS:



*/
