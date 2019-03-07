// TODO: If first image is tiny, make sure all styles in styles/plugins/react-modal are scoped (since react-image-lightbox uses the bare react-modal classes to style its instance of react-modal).

const GalleryAndLightboxExample = ({ portrait, onstage, video }) => {
  let limit = 3

  // Wait for the document to exist
  if (typeof window !== `undefined`) {
    // Create a test element to check for grid support
    const testEl = document.createElement(`div`)
    testEl.style.display = `grid`

    // If grid is supported, show more items initially on large screens
    if (testEl.style.display === `grid`) {
      if (window.matchMedia(`(min-width: 62em)`).matches) {
        limit = 12
      } else if (window.matchMedia(`(min-width: 48em)`).matches) {
        limit = 9
      } else if (window.matchMedia(`(min-width: 36em)`).matches) {
        limit = 6
      }
    }
  }

  return (
    <section className="mv6 bg-near-white pa5 shadow-lg">
      <h2 className="mb3">Image/Video Gallery + Lightbox</h2>
      <p className="mb4 f4">
        (Including category filtering, "view more" and mount transitions)
      </p>

      <FilterAndLimit
        portrait={portrait} // the portrait items
        onstage={onstage} // the onstage items
        video={video} // the video items
        defaultCategory="portrait"
        limit={limit}
        increment={limit}
      >
        {(items, visibleItems, limited, handleFilter, handleSeeMore) => (
          <>
            <Filters handleFilter={handleFilter} />
            <Gallery items={items} visibleItems={visibleItems} />
            {limited && <SeeMore handleSeeMore={handleSeeMore} />}
          </>
        )}
      </FilterAndLimit>
    </section>
  )
}

/*
 *
 * Filters
 *
 */

const Filters = ({ handleFilter }) => (
  <fieldset className="mv4 pb3">
    <legend className="sr-only">Pick a media category</legend>

    <FilterBtnRadio
      group="media"
      category="portrait"
      label="Portrait"
      defaultChecked={true}
      handleFilter={handleFilter}
      className="btn mb3 sm:mr4 w-100 sm:w-auto"
    />

    <FilterBtnRadio
      group="media"
      category="onstage"
      label="Onstage"
      handleFilter={handleFilter}
      className="btn mb3 sm:mr4 w-100 sm:w-auto"
    />

    <FilterBtnRadio
      group="media"
      category="video"
      label="Video"
      handleFilter={handleFilter}
      className="btn mb3 sm:mr4 w-100 sm:w-auto"
    />
  </fieldset>
)

/*
 *
 * Gallery
 *
 */

// TODO: forget the Tag variable and just move the two gallery calls into the if statement?
const Gallery = ({ items, visibleItems }) => {
  let category = items[0].node.category
  let Tag = ImageGallery
  // console.log(`items`, items)
  // console.log(`visibleItems`, visibleItems)
  if (category === `video`) Tag = VideoGallery

  return <Tag items={items} visibleItems={visibleItems} />
}

/*
 *
 * Image Gallery
 *
 */

const ImageGallery = ({ items, visibleItems }) => (
  <ImageGalleryAndLightbox
    galleryImages={visibleItems}
    lightboxImages={items}
    renderGallery={(galleryImages, handleImageClick) => (
      <Thumbnails items={galleryImages} handleImageClick={handleImageClick} />
    )}
  />
)

/*
 *
 * Video Gallery
 *
 */

const VideoGallery = ({ items, visibleItems }) => (
  <VideoGalleryAndLightbox
    galleryItems={visibleItems}
    lightboxItems={items}
    renderGallery={(galleryImages, handleImageClick) => (
      <Thumbnails items={galleryImages} handleImageClick={handleImageClick} />
    )}
  />
)

/*
 *
 * Items
 *
 */

class Thumbnails extends React.Component {
  state = { gsapReady: false }

  componentDidMount = () =>
    loadjs.ready(`gsap`, () => this.setState({ gsapReady: true }))

  render() {
    const { items, handleImageClick } = this.props
    const { gsapReady } = this.state

    return (
      <ul className="media-grid">
        {/* Show real images once GSAP is ready (to avoid an initial flash of content) */}
        {gsapReady ? (
          <TransitionGroup component={null}>
            {items.map((item, i) => (
              <Mount
                key={item.node.image.childImageSharp.thumbnail.src} // MUST be unique
                animateSpace={false}
                animateExit={false}
                enterTimeout={700}
                exitTimeout={0}
              >
                <Thumbnail
                  item={item.node}
                  category={item.node.category}
                  lightboxIndex={i}
                  handleImageClick={handleImageClick}
                />
              </Mount>
            ))}
          </TransitionGroup>
        ) : (
          <>
            {/* To make sure the mount animation plays on first load, show an invisible version of the thumbnails until GSAP is ready (to avoid a space jump) */}
            {items.map((item, i) => (
              <Thumbnail
                key={item.node.image.childImageSharp.thumbnail.src}
                item={item.node}
                category={item.node.category}
                lightboxIndex={i}
                handleImageClick={handleImageClick}
                className="o-0"
              />
            ))}
          </>
        )}
      </ul>
    )
  }
}

/*
 *
 * Thumbnail
 *
 */

const Thumbnail = ({
  item,
  category,
  lightboxIndex,
  handleImageClick,
  className = ``
}) => (
  <li className={`group relative mt3 ${className}`}>
    <Img
      fluid={item.image.childImageSharp.thumbnail}
      alt={item.alt}
      objPosition={item.objPosition}
      className="aspect-ratio aspect-ratio--1x1"
    />

    {/* Overlay + Lightbox trigger */}
    <button
      onClick={handleImageClick}
      value={lightboxIndex}
      className="flex justify-center items-center absolute fill bg-transparent w-100 group-hover:bg-black-50 f4 md:f3 transparent group-hover:white animate"
    >
      {category === `video` ? `Watch video` : `View image`}
    </button>
  </li>
)

/*
 *
 * See More Button
 *
 */

const SeeMore = ({ handleSeeMore }) => (
  <button onClick={handleSeeMore} className="btn mt4">
    See more
  </button>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import loadjs from 'loadjs'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import FilterAndLimit from '../../components/examples/FilterAndLimit'
import FilterBtnRadio from '../../components/examples/FilterBtnRadio'
import ImageGalleryAndLightbox from '../../components/examples/ImageGalleryAndLightbox'
import Img from '../../components/Img'
import Mount from '../../components/examples/Mount'
import VideoGalleryAndLightbox from '../../components/examples/VideoGalleryAndLightbox'

export default GalleryAndLightboxExample
