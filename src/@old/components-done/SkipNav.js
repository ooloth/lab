const SkipNav = ({ href }) => (
  <a href={href} className="sr-only">
    Skip navigation and go to main content
  </a>
)

SkipNav.propTypes = {
  href: PropTypes.string.isRequired
}

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

export default SkipNav

/*

INSTRUCTIONS:

1. Include before any header/sidebar links that appear at the top of each page
2. Make sure the href prop matches the ID of the page element where the main content begins

See: https://medium.freecodecamp.org/next-level-accessibility-freecodecamp-guide-7cbd6473eabd

*/
