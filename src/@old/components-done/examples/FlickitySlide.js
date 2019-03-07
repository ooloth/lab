const FlickitySlide = ({ className = ``, children }) => (
  <div className={`carousel-cell ${className}`}>{children}</div>
)

FlickitySlide.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string
}

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

export default FlickitySlide
