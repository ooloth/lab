const Quote = ({ quote, source, href, className, style }) => (
  <blockquote cite={href} className={className} style={style}>
    {/* Quotation */}
    <p dangerouslySetInnerHTML={{ __html: quote }} className="quote-body" />

    {/* Source and link (optional) */}
    {source && href ? (
      <Anchor href={href} className="quote-link">
        <cite className="quote-source">{source}</cite>
      </Anchor>
    ) : source ? (
      <cite className="quote-source">{source}</cite>
    ) : null}
  </blockquote>
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Anchor from '../Anchor'

export default Quote

/*

INSTRUCTIONS:

<Quote 
  quote={string, required}
  source={string, optional}
  href={string, optional}
  className={string, optional}
  style={string || object, optional}
/>

1. Style the container (the blockquote element) via the className and style props
2. Style the quote (the p element) via the .quote component class
3. Style the link (the a element) via the .quote-link component class
4. Style the source (the cite element) via the .quote-source component class

*/
