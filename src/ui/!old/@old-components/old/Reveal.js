// import Observer from 'react-intersection-observer'

// function useIntersectionObserver(target, root) {
//   const [isIntersecting, setIntersecting] = React.useState(false)

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting !== isIntersecting) {
//           setIntersecting(entry.isIntersecting)
//         }
//       },
//       {
//         rootMargin: '0px',
//         root: root.current
//       }
//     )
//     if (target.current) {
//       observer.observe(target.current)
//     }
//     return () => {
//       observer.unobserve(target.current)
//     }
//   }, [])

//   return isIntersecting
// }

// export function Reveal2({
//   css,
//   offsetTop = `125%`,
//   offsetBottom = `125%`,
//   className = ``,
//   style = {},
//   tag: Tag = `div`,
//   children,
//   ...props
// }) {
//   // const [isIntersecting, setIsIntersecting] = React.useState(false)

//   const ref = React.useRef()

//   const visible = useIntersectionObserver(ref)

//   console.log({ visible })

//   return (
//     // <Observer {...props} onChange={e => setIsIntersecting(e.isIntersecting)}>
//     <Tag ref={ref}>{children}</Tag>
//     // </Observer>
//   )
// }

class Reveal extends Component {
  state = { isVisible: false }

  // Waypoint handlers
  handleWaypointEnter = () => {
    if (!this.state.isVisible) {
      this.setState({ isVisible: true }) // right away, to prevent duplicate reveals
      this.reveal()
    }
  }

  handleWaypointLeave = async () => {
    if (this.props.reset) {
      await this.resetAnimation()
      this.setState({ isVisible: false }) // after reset, to prevent duplicate reveals
    } else {
      this.killAnimation()
    }
  }

  // GSAP animations
  reveal = () => {
    loadjs.ready(`gsap`, () => {
      TweenLite.set(this.node, { clearProps: `all` }) // Clear inital styles
      this.props.stagger ? this.animateFromStagger() : this.animateFrom()
    })
  }

  animateFrom = () => {
    const { css, delay, duration, ease } = this.props

    TweenLite.from(this.node, duration || 1, {
      css: { ...css },
      ease: ease || `Power4.easeInOut`,
      delay: delay || 0.3
    })
  }

  animateFromStagger = () => {
    const { css, cycle, delay, duration, ease, staggerDelay } = this.props
    const nodes = this.node.childNodes[0].childNodes

    TweenMax.staggerFrom(
      nodes,
      duration || 1,
      {
        css: { ...css },
        cycle: cycle,
        delay: delay || 0.3,
        ease: ease || `Power4.easeInOut`
      },
      staggerDelay || 0.3
    )
  }

  wipeAnimation = () => {
    if (this.props.stagger) {
      this.node.childNodes[0].childNodes.forEach(node => {
        TweenLite.killTweensOf(node)
        TweenLite.set(node, { clearProps: `all` })
      })
    } else {
      TweenLite.killTweensOf(this.node)
      TweenLite.set(this.node, { clearProps: `all` })
    }
  }

  resetAnimation = async () => {
    await this.wipeAnimation()
    TweenLite.set(this.node, { ...this.props.css })
  }

  killAnimation = () => this.wipeAnimation()

  render() {
    const {
      css,
      offsetTop = '125%',
      offsetBottom = '125%',
      className = '',
      style = {},
      tag,
      children
    } = this.props
    const Tag = tag || `div`

    return (
      // Apply the initial CSS to the wrapper even for staggers to avoid a flash of items
      <div ref={el => (this.node = el)} style={{ ...css }}>
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
      </div>
    )
  }
}

Reveal.propTypes = {
  css: PropTypes.object.isRequired,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ease: PropTypes.string,
  stagger: PropTypes.bool,
  staggerDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cycle: PropTypes.object,
  reset: PropTypes.bool,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loadjs from 'loadjs'
import Waypoint from 'react-waypoint'

export default Reveal

/*

INSTRUCTIONS:

<Reveal 
  css={object of CSS values for "from" tween, required}
  duration={number || string, optional}
  ease={string, optional}
  offsetTop={number || string, optional}
  offsetBottom={number || string, optional}
  reset={boolean, optional}
>
  <ComponentToReveal />
</Reveal>

1. The node with ref needs to be outside the Waypoint component (that's why the extra div)
2. Use the className prop to set overflow-hidden on the inner wrapper (helpful sometimes, but it also kills all shadows)
3. Use the style prop to add styles to the inner wrapper

*/
