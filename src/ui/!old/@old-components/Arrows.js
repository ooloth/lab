// For CSS, see styles/components/examples/_arrows.css

export const ArrowDown = ({ className, style }) => (
  <span
    className={`button-scroll-down animate ${className ? className : ``}`}
    style={{ ...style }}
  >
    <span aria-hidden="true" className="arrow-line animate">
      <span className="arrow" />
    </span>
  </span>
)

export const ArrowLeft = ({ className, style, ...props }) => (
  <span
    className={`arrow-left db animate ${className ? className : ``}`}
    style={{ ...style }}
    {...props}
  >
    <span aria-hidden="true" className="arrow-line animate">
      <span className="arrow" />
    </span>
  </span>
)

export const ArrowRight = ({ className, style, ...props }) => (
  <span
    className={`arrow-right db animate ${className ? className : ``}`}
    style={{ ...style }}
    {...props}
  >
    <span aria-hidden="true" className="arrow-line animate">
      <span className="arrow" />
    </span>
  </span>
)

/*
 *
 * Slick Arrows
 * 
 */

export const SlickPrev = props => (
  <button
    aria-label="See previous production"
    onClick={props.onClick}
    className="db arrow-left top-50 nt2 sm:mt0 md:ml3 lg:ml4"
  >
    <ArrowLeft className="bg-yellow" />
  </button>
)

export const SlickNext = props => (
  <button
    aria-label="See next production"
    onClick={props.onClick}
    className="db arrow-right top-50 nt2 sm:mt0 md:mr3 lg:mr4"
  >
    <ArrowRight className="bg-yellow" />
  </button>
)

/*
 *
 * Imports
 * 
 */

import React from 'react'
