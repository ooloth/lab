class ScrollTo extends React.Component {
  scrollToId = e => {
    const {
      href,
      offset = 0,
      duration = 1.5,
      easing = `Power3.easeInOut`
    } = this.props
    const durationInSeconds = duration > 50 ? duration / 1000 : duration

    e.preventDefault()

    loadjs.ready([`gsap`, `scrollToPlugin`], () => {
      // Need to include {autoKill: false} to prevent iOS from killing the scroll partway
      // See: https://greensock.com/forums/topic/15108-ios-10-scrolltoplugin/

      TweenLite.to(window, durationInSeconds, {
        scrollTo: { y: href, offsetY: offset, autoKill: false },
        ease: easing
      })
    })
  }

  render() {
    const { href, className, children } = this.props

    return (
      <a href={href} onClick={this.scrollToId} className={className}>
        {children}
      </a>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import loadjs from 'loadjs'

export default ScrollTo

/*

EXAMPLE:

<ScrollTo 
  href="#top" 
  offset={40}
  duration={5} 
  easing="Power4.easeInOut"
  className="link dib mb5"
>
  Back to top
</ScrollTo>

*/
