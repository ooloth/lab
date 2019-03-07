const FadingCarouselExample = ({ data }) => (
  <section className="mv6 bg-light-yellow pa5 shadow-lg">
    <h2 className="mb3">Fading Carousel Example</h2>

    <FadingCarousel slides={data}>
      {(slides, slideIndex, handleBtnClick) => (
        <>
          <CarouselSlides slides={slides} slideIndex={slideIndex} />

          <CarouselButtons
            slides={slides}
            slideIndex={slideIndex}
            handleChange={handleBtnClick}
          />
        </>
      )}
    </FadingCarousel>
  </section>
)

/*
 *
 * Carousel Slides
 *
 */

const CarouselSlides = ({ slides, slideIndex }) => (
  <ul className="flex items-center">
    {slides.map((slide, i) => (
      <CarouselSlide
        key={i}
        slide={slide.node}
        className={`flex-none w-100 ${i !== slideIndex ? `o-0` : `o-100`}`}
        style={{
          transform: `translateX(calc(${i} * -100%))`,
          transition: `opacity 1s`
        }}
      />
    ))}
  </ul>
)

/*
 *
 * Carousel Slide
 *
 */

const CarouselSlide = ({ slide, className, style }) => (
  <li className={`container ${className}`} style={style}>
    <Img
      fluid={slide.image.childImageSharp.fluid}
      alt={slide.alt}
      className="aspect-ratio aspect-ratio--16x9"
    />

    <h3 className="pv3">{slide.title}</h3>
  </li>
)

/*
 *
 * Carousel Buttons
 *
 */

const CarouselButtons = ({ slides, slideIndex, handleChange }) => (
  <fieldset className="">
    <legend className="sr-only">Change slides</legend>

    {slides.map((slide, i) => {
      return (
        <Fragment key={i}>
          <input
            type="radio"
            name="hero-carousel"
            aria-label={`Go to slide #${i + 1}`}
            id={`button-${i}`}
            value={i}
            defaultChecked={i === slideIndex ? true : false}
            onChange={handleChange}
            className="carousel-input"
          />

          {/* Update active styling in components/_filters.css */}
          <label
            htmlFor={`button-${i}`}
            className={`carousel-label mr2 ba bw1 br-100 b--black animate ${
              i === slideIndex ? `bg-pink` : `bg-transparent`
            }`}
            style={{ width: `1.1rem`, height: `1.1rem` }}
          />
        </Fragment>
      )
    })}
  </fieldset>
)

/*
 *
 * Imports & Exports
 *
 */

import React, { Fragment } from 'react'

import FadingCarousel from '../../components/examples/FadingCarousel'
import Img from '../../components/Img'

export default FadingCarouselExample
