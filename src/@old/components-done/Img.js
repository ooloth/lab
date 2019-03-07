import React from 'react'
import Image from 'gatsby-image'

function Img({ objFit = `cover`, objPosition = `50% 50%`, ...props }) {
  return (
    <Image
      {...props}
      imgStyle={{
        ...props.imgStyle,
        objectFit: objFit,
        objectPosition: objPosition,
        fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`
      }}
    />
  )
}

export default Img

/*

USAGE:

A wrapper around gatsby-image that includes an object-fit and object-position polyfill (enabled by adding a font-family declaration).

Example:

<Img
  fluid={fluid}
  fixed={props.fixed}
  alt={alt}
  objFit="cover" (optional; default: cover)
  objPosition="50% 0%" (optional; default: 50% 50%)
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
Issue: https://github.com/gatsbyjs/gatsby/issues/4021#issuecomment-389276173

*/
