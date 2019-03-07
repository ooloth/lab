import React from 'react'

// TODO: make the angle of the triangle adjustable (large & small props)?
// TODO: add 3 more variants for upright along the sides (just add a "vertical" prop and then calculate the 4 variants)

const Angle = props => {
  const {
    bottom,
    top,
    left,
    right,
    vertical,
    height = `h2 h3-l`,
    width = `w2 w3-ns`,
    color = `white`,
    className = ``
  } = props

  let position = ``
  let points = ``
  let size = ``

  // Customize sizing based on vertical/horizontal layout
  if (vertical) {
    size = ` h-100 ${width} `
  } else {
    size = ` w-100 ${height} `
  }

  // Customize horizontal triangles based on position props (Y values measure down)
  if (bottom && left && !vertical) {
    points = `0,0 0,100 100,100`
    // position = ` bottom-0 left-0 `
    position = `bottom-0 left-0 rotate-down-from-right`
  } else if (bottom && right && !vertical) {
    points = `0,100 100,0 100,100`
    // position = ` bottom-0 right-0 `
    position = `bottom-0 right-0 rotate-down-from-left`
  } else if (top && left && !vertical) {
    points = `0,0 0,100 100,0`
    // position = ` top-0 left-0 `
    position = `top-0 left-0 rotate-up-from-right`
  } else if (top && right && !vertical) {
    points = `0,0 100,100 100,0`
    // position = ` top-0 right-0 `
    position = `top-0 right-0 rotate-up-from-left`
  }

  // Customize vertical triangles based on position props (Y values measure down)
  if (bottom && left && vertical) {
    points = `0,0 0,100 100,100`
    // position = ` top-0 left-0 `
    position = `top-0 left-0 rotate-right-from-top`
  } else if (bottom && right && vertical) {
    points = `0,100 100,0 100,100`
    // position = ` bottom-0 right-0 h-100 `
    position = `bottom-0 right-0 h-100 rotate-down-from-left`
  } else if (top && left && vertical) {
    points = `0,0 0,100 100,0`
    // position = ` top-0 left-0 h-100 `
    position = `top-0 left-0 h-100 rotate-up-from-right`
  } else if (top && right && vertical) {
    points = `0,0 100,100 100,0`
    // position = ` top-0 right-0 h-100 `
    position = `top-0 right-0 h-100 rotate-up-from-left`
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`absolute ${position} ${size} ${className}`}
    >
      <polygon fill={color} points={points} />
    </svg>
  )
}

export default Angle

// TODO: add proptypes and instructions
