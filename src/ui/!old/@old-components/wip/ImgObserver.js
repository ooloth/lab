/*

FIXME: Can't figure out how to polyfill Intersection Observer for IE without running into Object.assign and Object.keys errors (which I can't seem to polyfill properly in conjunction...using react-waypoint  instead)

A wrapper around gatsby-image that includes:

1. Lazy loading using IntersectionObserver (when image is within 100px of the viewport)
2. Object-fit and object-position polyfill (enabled by adding a font-family declaration)

Use like this:

<Img
  fluid={fluid}
  alt={alt}
  fit="cover" (optional; default: cover)
  position="50% 0%" (optional; default: 50% 50%)
  className="..." (optional; goes to .gatsby-image-wrapper)
  style="..." (optional; goes to .gatsby-image-wrapper)
  outerWrapperClassName="..." (optional; goes to .gatsby-image-outer-wrapper)
  imgStyle="..." (optional; goes to the actual img element)
  position="absolute" (optional; default: "relative")
  backgroundColor="pink" (optional; default: false)
  Tag="figure" (optional; default: "div"; tag for wrapping elements)
/>

DOCS: https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props
DOCS: https://github.com/researchgate/react-intersection-observer
DOCS: https://github.com/bfred-it/object-fit-images/#usage

*/

class ImgObserver extends React.Component {
  state = { isIntersecting: this.props.critical || false }

  handleChange = event => {
    event.isIntersecting
      ? console.log(`Image in viewport`)
      : console.log(`Image not in viewport`)
    this.setState({ isIntersecting: event.isIntersecting })
  }

  render() {
    const fit = this.props.fit ? this.props.fit : `cover`
    const position = this.props.position ? this.props.position : `50% 50%`
    const imgStyle = `font-family: 'object-fit: ${fit}; object-position: ${position}';`
    console.log(`imgStyle`, imgStyle)

    return (
      <Observer rootMargin="100px 0px" onChange={this.handleChange} onlyOnce={true}>
        <figure data-critical={this.props.critical}>
          {this.state.isIntersecting && (
            <Image
              fluid={this.props.fluid}
              alt={this.props.alt}
              className={this.props.className}
              style={this.props.style}
              outerWrapperClassName={this.props.outerWrapperClassName}
              imgStyle={this.props.imgStyle}
              position={this.props.position}
              backgroundColor={this.props.backgroundColor}
              Tag={this.props.Tag}
            />
          )}
        </figure>
      </Observer>
    )
  }
}

export default ImgObserver

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Image from 'gatsby-image'
import Observer from '@researchgate/react-intersection-observer'
