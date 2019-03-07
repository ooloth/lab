const FilterBtnRadio = ({
  group,
  category,
  label,
  defaultChecked,
  handleFilter,
  className = ``,
  style
}) => (
  <>
    <input
      type="radio"
      name={group}
      id={category}
      value={category}
      defaultChecked={defaultChecked}
      onChange={handleFilter}
      className="filter-input"
    />
    <label htmlFor={category} className={`filter-label ${className}`} style={style}>
      {label}
    </label>
  </>
)

FilterBtnRadio.propTypes = {
  group: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  handleFilter: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

export default FilterBtnRadio

/*

INSTRUCTIONS:

<FilterBtnRadio
  group={string, required}
  category={string, required}
  label={string, required}
  handleFilter={function, required}
  className={string, optional}
  style={string, optional}
/>

1. Wrap FilterBtnRadio components in a fieldset and include a legend as the first child.
2. Make sure the "group" name is the same for all buttons in the group (and different from the other groups).
3. Make sure the "category" name is unique on the page (becomes the input's ID attribute)

*/
