const FlickityExample = ({ data }) => (
  <section className="mv6 bg-light-green pa5 shadow-lg">
    <h2 className="mb1">Slick Example</h2>
    <p className="mb4 b">(for fading carousels)</p>

    <div className="container">
      <SlickSlider data={data} layout={Slide} />
    </div>
  </section>
)

const Slide = ({ slide }) => (
  <div className="bg-pink w-100">
    <Img fluid={slide.node.image.childImageSharp.fluid} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} className="ph5" />
  </div>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'

import SlickSlider from '../../components/examples/SlickSlider'
import Img from '../../components/Img'

import '../../../node_modules/slick-carousel/slick/slick.css'
import './../../styles/plugins/examples/react-slick.css'

export default FlickityExample
