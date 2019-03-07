// function MountWithHooks({
//   animateEnter = true,
//   animateExit = true,
//   appear = true,
//   enterTimeout = 700, // Must be in milliseconds
//   exitTimeout = 700, // Must be in milliseconds
//   ...props
// }) {
//   return (
//     <>
//       <Transition
//         in={props.in}
//         appear={appear}
//         enter={animateEnter}
//         onEnter={this.enterAnim}
//         exit={animateExit}
//         onExit={this.exitAnim}
//         unmountOnExit={true}
//         timeout={{ enter: enterTimeout, exit: exitTimeout }} // required unless addEndListener is used
//       >
//         {this.props.children}
//       </Transition>
//     </>
//   )
// }

class Mount extends Component {
  enterAnim = rtgChild => {
    const { animateSpace = true } = this.props

    loadjs.ready(`gsap`, () => {
      if (animateSpace) this.enterAnimSpaceAndItem(rtgChild)
      else this.enterAnimItemOnly(rtgChild)
    })
  }

  enterAnimSpaceAndItem = rtgChild => {
    let spaceDuration = (this.props.exitTimeout / 1000) * 0.8 || 0.3
    let itemDuration = this.props.exitTimeout / 1000 - 0.2 || 0.3

    let tl = new TimelineLite()
    // Expand the new space gradually
    tl.from(rtgChild, spaceDuration, spaceAnimation)
      // Then, transition the element in
      .from(rtgChild, itemDuration, itemAnimation, `-=0.2`)
  }

  enterAnimItemOnly = rtgChild => {
    let duration = this.props.enterTimeout / 1000 || 0.3
    TweenLite.from(rtgChild, duration, itemAnimation)
  }

  exitAnim = rtgChild => {
    loadjs.ready(`gsap`, () => {
      let itemDuration = this.props.exitTimeout / 1000 - 0.2 || 0.3
      let spaceDuration = (this.props.exitTimeout / 1000) * 0.8 || 0.3

      let tl = new TimelineLite()
      tl
        // Transition the element out
        .to(rtgChild, itemDuration, {
          scale: 0,
          ease: `Power3.easeInOut`
        })
        // Then, collapse the empty space gradually
        .to(
          rtgChild,
          spaceDuration,
          {
            margin: 0,
            borderWidth: 0,
            padding: 0,
            lineHeight: 0,
            fontSize: 0,
            ease: `Power3.easeInOut`
          },
          `-=0.1`
        )
    })
  }

  render() {
    const {
      animateEnter = true,
      animateExit = true,
      appear = true,
      enterTimeout = 700, // Must be in milliseconds
      exitTimeout = 700 // Must be in milliseconds
    } = this.props

    return (
      <Transition
        in={this.props.in}
        appear={appear}
        enter={animateEnter}
        onEnter={this.enterAnim}
        exit={animateExit}
        onExit={this.exitAnim}
        unmountOnExit={true}
        timeout={{ enter: enterTimeout, exit: exitTimeout }} // required unless addEndListener is used
      >
        {this.props.children}
      </Transition>
    )
  }
}

Mount.propTypes = {
  animateEnter: PropTypes.bool,
  animateExit: PropTypes.bool,
  animateSpace: PropTypes.bool,
  appear: PropTypes.bool,
  enterTimeout: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  exitTimeout: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  in: PropTypes.bool // passed automatically by <TransitionGroup /> parent
}

/*
 *
 * Animations
 *
 */

const itemAnimation = {
  autoAlpha: 0,
  scale: 0.9,
  y: 5,
  ease: `Back.easeInOut`
}

const spaceAnimation = {
  margin: 0,
  borderWidth: 0,
  padding: 0,
  lineHeight: 0,
  fontSize: 0,
  ease: `Power3.easeInOut`
}

/* 
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loadjs from 'loadjs'
import Transition from 'react-transition-group/Transition'

export default Mount

/*

INSTRUCTIONS:

<TransitionGroup component={null}>
  {items.map(item => (
    <Mount key={item.id}>
      <Item item={item} />
    </Mount>
  ))}
</TransitionGroup>

1. Either wrap in TransitionGroup and a .map() of items (in which case TG sends "in" prop automatically)
2. Or, use alone and send "in" prop manually

Docs: http://reactcommunity.org/react-transition-group/

*/
