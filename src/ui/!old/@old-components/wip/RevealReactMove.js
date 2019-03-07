/*
 * 
 * Usage:
 * 
 *   <Reveal transX={200}>
 *     {insert the component(s)/node(s) to reveal as children}
 *   </Reveal>
 * 
 * Props:
 * 
 *   See the props and their types listed in state below (e.g. transX, rotateY, scale).
 * 
 * Instructions:
 * 
 *   1. Add any desired settings and CSS props and their values (generally in px or deg).
 *   2. The value will represent the component's starting position.
 *   3. When the component enters the viewport, the animation will begin.
 *   4. The animation moves from the prop values to the natural values (e.g. -200px to 0px)
 * 
 */

// See "Toggle" example here: https://react-move.js.org/#/examples/simple

class RevealReactMove extends React.Component {
  state = {
    revealed: false,
    // See: https://github.com/jlmakes/scrollreveal#22-the-starting-defaults
    settings: {
      delay: this.props.delay || 300,
      duration: this.props.duration || 1500,
      easing: this.props.easing || easeExpInOut,
      // interval: this.props.interval || null,
      bottomOffset: this.props.offsetBottom || 100,
      topOffset: this.props.offsetTop || 100,
      repeat: this.props.repeat || false
    },
    transforms: {
      opacity: this.props.opacity || 0,
      perspective: this.props.perspective || 0,
      rotate: this.props.rotate || {
        x: this.props.rotateX || 0,
        y: this.props.rotateY || 0,
        z: this.props.rotateZ || 0
      },
      scale: {
        x: this.props.scaleX || this.props.scale || 0.9,
        y: this.props.scaleY || this.props.scale || 0.9,
        z: this.props.scaleZ || 0
      },
      skew: {
        x: this.props.skewX || this.props.skew || 0,
        y: this.props.skewY || 0
      },
      translate: {
        x: this.props.transX || 0,
        y: this.props.transY || 0,
        z: this.props.transZ || 0
      }
    }
  }

  // TODO: add PropTypes validation here? (e.g. make sure the props is a number?)

  handleWaypointEnter = () => {
    console.log('Entered!')
    !this.state.revealed && this.setState({ revealed: true })
  }

  handleWaypointLeave = () => {
    if (this.state.settings.repeat && this.state.revealed) {
      this.setState({ revealed: false })
    }
  }

  render() {
    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        topOffset={this.state.settings.topOffset}
        bottomOffset={this.state.settings.bottomOffset}
      >
        <div>
          <Animate
            start={() => ({
              opacity: this.state.transforms.opacity,
              perspective: this.state.transforms.perspective,
              rotateX: this.state.transforms.rotate.x,
              rotateY: this.state.transforms.rotate.y,
              rotateZ: this.state.transforms.rotate.z,
              scaleX: this.state.transforms.scale.x,
              scaleY: this.state.transforms.scale.y,
              scaleZ: this.state.transforms.scale.z,
              skewX: this.state.transforms.skew.x,
              skewY: this.state.transforms.skew.y,
              transX: this.state.transforms.translate.x,
              transY: this.state.transforms.translate.y,
              transZ: this.state.transforms.translate.z,
              className: this.props.className,
              style: this.props.style
            })}
            update={() => ({
              opacity: [this.state.revealed ? 1 : this.state.transforms.opacity],
              perspective: [this.state.revealed ? 0 : this.state.transforms.perspective],
              rotateX: [this.state.revealed ? 0 : this.state.transforms.rotate.x],
              rotateY: [this.state.revealed ? 0 : this.state.transforms.rotate.y],
              rotateZ: [this.state.revealed ? 0 : this.state.transforms.rotate.z],
              scaleX: [this.state.revealed ? 1 : this.state.transforms.scale.x],
              scaleY: [this.state.revealed ? 1 : this.state.transforms.scale.y],
              scaleZ: [this.state.revealed ? 1 : this.state.transforms.scale.z],
              skewX: [this.state.revealed ? 0 : this.state.transforms.skew.x],
              skewY: [this.state.revealed ? 0 : this.state.transforms.skew.y],
              transX: [this.state.revealed ? 0 : this.state.transforms.translate.x],
              transY: [this.state.revealed ? 0 : this.state.transforms.translate.y],
              transZ: [this.state.revealed ? 0 : this.state.transforms.translate.z],
              timing: {
                delay: this.state.settings.delay,
                duration: this.state.settings.duration,
                ease: this.state.settings.easing
              }
            })}
          >
            {state => {
              const {
                opacity,
                perspective,
                rotateX,
                rotateY,
                rotateZ,
                scaleX,
                scaleY,
                scaleZ,
                skewX,
                skewY,
                transX,
                transY,
                transZ,
                className,
                style
              } = state

              return (
                <div
                  className={className}
                  style={{
                    opacity: `${opacity}`,
                    transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scaleX(${scaleX}) scaleY(${scaleY}) scaleZ(${scaleZ}) skewX(${skewX}deg) skewY(${skewY}deg) translateX(${transX}px) translateY(${transY}px) translateZ(${transZ}px)`,
                    ...style
                  }}
                >
                  {this.props.children}
                </div>
              )
            }}
          </Animate>
        </div>
      </Waypoint>
    )
  }
}

export default RevealReactMove

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Waypoint from 'react-waypoint'
import Animate from 'react-move/Animate'
import { easeExpInOut } from 'd3-ease'
