const FlickityExample = ({ data }) => (
  <section className="mv6 bg-light-yellow pa5 shadow-lg">
    <h2 className="mb1">Flickity Example</h2>
    <p className="mb4 b">(for sliding carousels)</p>

    <div className="container">
      <FlickitySlider data={data} layout={Slide} />
    </div>
  </section>
)

const Slide = ({ slide }) => (
  <FlickitySlide className="flex flex-column justify-center bg-pink w-100">
    <Img fluid={slide.node.image.childImageSharp.fluid} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} className="ph5" />
  </FlickitySlide>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'

import FlickitySlider from '../../components/examples/FlickitySlider'
import FlickitySlide from '../../components/examples/FlickitySlide'
import Img from '../../components/Img'

import '../../../node_modules/flickity/dist/flickity.min.css'
import '../../styles/plugins/examples/react-flickity-component.css'

export default FlickityExample
