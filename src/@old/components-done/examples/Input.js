const Input = ({
  type,
  name,
  ariaLabel,
  placeholder,
  handleChange,
  className = ``
}) => (
  <input
    type={type}
    name={name}
    aria-label={ariaLabel}
    placeholder={placeholder}
    onChange={handleChange}
    title={
      type === `email`
        ? `The portion of the email address after the @ is invalid.`
        : undefined
    }
    pattern={type === `email` ? emailRegex : undefined}
    className={className}
    required
  />
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string
}

const emailRegex = `.+@.+..+`

// const emailRegex2 = `^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(.w{2,})+$`

// Source: https://css-tricks.com/form-validation-part-1-constraint-validation-html/#article-header-id-4

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

export default Input

/*

INSTRUCTIONS:



*/
