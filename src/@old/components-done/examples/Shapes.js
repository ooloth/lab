/* The CSS for these floating shapes can be found in styles/components/examples/floating-shapes.css */

const Shapes = () => (
  <div aria-hidden="true" className="flex justify-center">
    <FloatingTriangle className="top-25 md:top-30 left-25 anim-diagonal-left" />
    <FloatingCircle className="top-20 left-80 md:left-75 anim-vertical anim-delay-2" />
    <FloatingTriangle className="top-30 md:top-40 left-70 anim-diagonal-right anim-delay-1" />
    <FloatingCircle className="top-90 md:top-80 left-10 md:left-0 anim-vertical anim-delay-3" />
    <FloatingTriangle className="top-90 left-80 anim-diagonal-left anim-delay-3" />
  </div>
)

const FloatingCircle = ({ className }) => (
  <aside className={`absolute ${className ? className : ``}`}>
    <Circle
      r={13}
      fill={{ color: `transparent` }}
      stroke={{ color: `rgb(200, 200, 200)` }}
      strokeWidth={3}
    />
  </aside>
)

const FloatingTriangle = ({ className }) => (
  <aside className={`absolute ${className ? className : ``}`}>
    <Triangle
      width={26}
      height={26}
      fill={{ color: `transparent` }}
      stroke={{ color: `rgb(200, 200, 200)` }}
      strokeWidth={3}
    />
  </aside>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import { Circle, Triangle } from 'react-shapes'

export default Shapes
