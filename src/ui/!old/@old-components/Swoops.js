/* 

Instructions:

1. Set fill color using the color class passed to className
2. Draw the swoop up or down by passing/not passing the "up" prop (down is default)
3. Size and position the SVG by passing classes to className (SVG will respond)

*/

// Uses a 100x100 viewbox to write points like %s that will respond to wrapper sizing
// See https://stackoverflow.com/a/24898728/8802485
export const ConcaveSwoop = ({ up, className = `` }) => {
  const path = up
    ? `M0,0 L0,100 L100,100 L100,0 Q50,200 0,0` // inset facing up
    : `M0,100 L0,0 L100,0 L100,100 Q50,-100 0,100` // inset facing down

  return (
    <div aria-hidden="true" className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g fill="currentColor">
          <path d={path} />
        </g>
      </svg>
    </div>
  )
}

export const ConvexSwoop = ({ up, className = `` }) => {
  const path = up
    ? `M0,100 Q50,-100 100,100` // bulge facing up
    : `M0,0 Q50,200 100,0` // bulge facing down

  return (
    <div aria-hidden="true" className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g fill="currentColor">
          <path d={path} />
        </g>
      </svg>
    </div>
  )
}

/*
 *
 * Imports
 * 
 */

import React from 'react'
