const SlickSlider = ({ data, layout, settings = defaultSettings }) => (
  <Slick {...settings}>
    {data.map(slide => {
      return <Fragment key={shortid.generate()}>{layout({ slide })}</Fragment>
    })}
  </Slick>
)

SlickSlider.propTypes = {
  data: PropTypes.array.isRequired,
  layout: PropTypes.func.isRequired,
  settings: PropTypes.object
}

SlickSlider.defaultProps = {
  settings: defaultSettings
}

/*
 *
 * Default Settings
 * 
 */

const defaultSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  // cssEase: `cubic-bezier(...)`
  dots: true,
  fade: true,
  infinite: true,
  lazyload: `progressive`,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Slick from 'react-slick'
import shortid from 'shortid'

export default SlickSlider

/* 

INSTRUCTIONS:

1. Use this for fading carousels (for sliding carousels, use FlickitySlider)
2. Call like this: <SlickSlider data={data} layout={Slide} settings={slickSettings} />
3. "Slide" should be a react component that takes a "slide" prop and is set to "w-100":

const Slide = ({ slide }) => (
  <div className="w-100">
    <Img fluid={slide.node.image.childImageSharp.fluid} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} className="ph5" />
  </div>
)

DOCS:

- GitHub: https://github.com/akiran/react-slick
- Docs: https://react-slick.neostack.com/docs/get-started
- Custom paging: https://react-slick.neostack.com/docs/example/custom-paging

*/
