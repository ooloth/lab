// TODO: check out https://popmotion.io/pose/examples/accordion/

class Accordion extends Component {
  state = { expanded: false }

  handleClick = e => {
    // Prevent link and button clicks from triggering click event handlers on parent components (allow clicks on other elements to pass through and trigger the collapse)
    if (e.target.nodeName === `A` || e.target.nodeName === `BUTTON`) {
      e.stopPropagation()
    } else {
      this.state.expanded ? this.collapse() : this.expand()
    }
  }

  handleKeyUp = e => e.key === `Enter` && this.handleClick()

  expand = () =>
    loadjs.ready(`gsap`, () => {
      // When expanding, set this immediately
      this.setState({ expanded: true })

      // Invalidate the temporary inline styles (which match the starting state for the animation and are added to prevent a flash of content in the ending position)
      this.details.removeAttribute(`style`)

      // Expand the section to its natural height
      TweenLite.fromTo(
        this.details,
        1,
        {
          height: 0,
          autoAlpha: 0
        },
        {
          height: this.details.offsetHeight,
          autoAlpha: 1,
          ease: `Power3.easeInOut`,
          // After expanding, allow height to adapt naturally when window is resized:
          onComplete: () => this.details.removeAttribute(`style`)
        }
      )
    })

  collapse = () =>
    loadjs.ready(`gsap`, () => {
      // Collapse the section to 0
      TweenLite.to(this.details, 1, {
        height: 0,
        autoAlpha: 0,
        ease: `Power3.easeInOut`,
        onComplete: () => this.setState({ expanded: false })
      })
    })

  render() {
    const { renderHeader, renderDetails } = this.props
    const { expanded } = this.state

    return (
      <div
        role="button"
        tabIndex="0"
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        aria-expanded={expanded}
        className="relative cursor-pointer"
      >
        <span className="sr-only">
          Click or press enter to expand/collapse this item's details
        </span>

        <div className="pv4 hover:bg-near-white animate">
          {renderHeader(expanded)}
          <div
            ref={el => (this.details = el)}
            className="relative z-2 overflow-hidden"
            style={{ height: 0 }}
          >
            {renderDetails()}
          </div>
        </div>
      </div>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import loadjs from 'loadjs'

export default Accordion

/*

Instructions

 

DOCS: https://github.com/muicss/loadjs#documentation
DOCS: https://greensock.com/docs/TweenLite
Forum: https://greensock.com/forums/topic/15749-gsap-with-create-react-app/

See KVP's HomeTestimonials.js and HomeClients.js for example usage

<Accordion
  renderHeader={expanded => (
    <Header item={item.node} expanded={expanded} />
  )}
  renderDetails={() => <Details item={item.node} />}
/>

*/
