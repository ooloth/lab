const StatsOld = ({ stats }) => (
  <ul>
    <Stat from={0.25} to={0.8} text={stats[0]} className="bg-dark-red" />
    <Stat from={0.25} to={0.7} text={stats[1]} className="bg-red" />
    <Stat from={0.25} to={0.6} text={stats[2]} className="bg-light-red" />
    <Stat from={0.25} to={0.9} text={stats[3]} className="bg-washed-red" />
  </ul>
)

/*
 *
 * General
 *
 */

import React from 'react'

/*
 *
 * Stat Old
 *
 */

// See "Toggle" example here: https://react-move.js.org/#/examples/simple

import Waypoint from 'react-waypoint'
import Animate from 'react-move/Animate'
import { easeExpInOut } from 'd3-ease'

class Stat extends React.Component {
  state = { expanded: false }

  handleWaypointEnter = () => {
    if (!this.state.expanded) {
      this.setState({ expanded: true })
    }
  }

  render() {
    return (
      <Waypoint onEnter={this.handleWaypointEnter}>
        <li>
          <Animate
            start={() => ({
              x: this.props.from,
              bgColor: this.props.className
            })}
            update={() => ({
              x: [this.state.expanded ? 1 : this.props.from],
              timing: { duration: 1500, ease: easeExpInOut }
            })}
          >
            {state => {
              const { x, bgColor } = state

              return (
                <div
                  className={`relative origin-left ${bgColor} mb4 md:mb5 h3`}
                  style={{
                    transform: `scaleX(${x})`,
                    borderRadius: `0 2rem 2rem 0`,
                    width: `${this.props.to * 100}%`
                  }}
                >
                  <span
                    className="absolute top-50 right-0 origin-right overflow-hidden ph3 white"
                    style={{
                      transform: `scaleX(${1 / x}) translateY(-50%)`
                    }}
                  >
                    {this.props.text}
                  </span>
                </div>
              )
            }}
          </Animate>
        </li>
      </Waypoint>
    )
  }
}
