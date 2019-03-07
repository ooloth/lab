class FlickitySlider extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    layout: PropTypes.func.isRequired,
    options: PropTypes.object
  }

  state = { Flickity: null }

  // TODO: replace this with loadjs call? test before/after for loading speed and bundle size... would that cause a flash of content change (e.g. if the slider is in the hero)?
  // To prevent build/SSR errors, don't import Flickity until the window exists
  componentDidMount = () => {
    if (typeof window !== `undefined`) {
      const Flickity = require(`react-flickity-component`)
      this.setState({ Flickity })
    }
  }

  // Call the equal height hack after Flickity exists (after being loaded in CDM)
  componentDidUpdate = () => this.makeCellsEqualHeight()

  // Make all cells equal height (can't be done with flex when using Flickity)
  // See: https://github.com/metafizzy/flickity/issues/534
  // See: https://codepen.io/desandro/pen/ZXEGVq
  makeCellsEqualHeight = () => {
    const resize = this.flkty.resize
    this.flkty.resize = () => {
      this.flkty.element.classList.remove(`flickity-resize`)
      resize.call(this.flkty)
      this.flkty.element.classList.add(`flickity-resize`)
    }
  }

  render() {
    const { data, layout, options = defaultOptions } = this.props
    const { Flickity } = this.state

    return (
      Flickity && (
        <Flickity
          flickityRef={c => (this.flkty = c)}
          options={options}
          reloadOnUpdate={true} // run reloadCells and resize on componentDidUpdate
        >
          {data.map(slide => {
            return <Fragment key={shortid.generate()}>{layout({ slide })}</Fragment>
          })}
        </Flickity>
      )
    )
  }
}

/*
 *
 * Default Options
 *
 */

const defaultOptions = {
  draggable: true,
  speed: 700,
  wrapAround: true
}

/*
 *
 * Import & Exports
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

export default FlickitySlider

/*

INSTRUCTIONS:

1. Use this for sliding carousels (for fading carousels, use SlickSlider)
2. Call like this: <FlickitySlider data={data} layout={Slide} options={flickityOptions} />
3. "Slide" should be a react component that takes a "slide" prop and uses FlickitySlide as is wrapping component:

const Slide = ({ slide }) => (
  <FlickitySlide className="pa3 w-100">
    <Img fluid={slide.node.image.childImageSharp.fluid} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} />
  </FlickitySlide>
)

DOCS:

- GitHub: https://github.com/theolampert/react-flickity-component

*/
