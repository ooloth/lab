// TODO: If first image is tiny, make sure all styles in styles/plugins/react-modal are scoped (since react-image-lightbox uses the bare react-modal classes to style its instance of react-modal).

class ImageGalleryAndLightbox extends Component {
  state = { lightboxIsOpen: false, photoIndex: 0 }

  handleImageClick = e => {
    this.setState({ lightboxIsOpen: true, photoIndex: parseInt(e.target.value) })
    noScroll.on()
  }

  handleCloseLightbox = () => {
    noScroll.off()
    this.setState({ lightboxIsOpen: false })
  }

  render() {
    /* Shouldn't need to update this line */
    const { lightboxIsOpen, photoIndex } = this.state

    /* Update these variables depending on how images are sent into this component */
    const { galleryImages, lightboxImages, renderGallery } = this.props

    // Set lightbox variables
    const nextIndex = (photoIndex + 1) % lightboxImages.length
    const prevIndex =
      (photoIndex + lightboxImages.length - 1) % lightboxImages.length

    return (
      <>
        {renderGallery(galleryImages, this.handleImageClick)}

        {/* TODO: may need to remove references to "node" */}
        {lightboxIsOpen && (
          <Lightbox
            mainSrc={
              lightboxImages[photoIndex].node.image.childImageSharp.lightbox.src
            }
            prevSrc={
              lightboxImages[prevIndex].node.image.childImageSharp.lightbox.src
            }
            nextSrc={
              lightboxImages[nextIndex].node.image.childImageSharp.lightbox.src
            }
            onMovePrevRequest={() => this.setState({ photoIndex: prevIndex })}
            onMoveNextRequest={() => this.setState({ photoIndex: nextIndex })}
            onCloseRequest={this.handleCloseLightbox}
            imageCaption={lightboxImages[photoIndex].node.caption}
            enableZoom={false}
            animationOnKeyInput={true}
          />
        )}
      </>
    )
  }
}

ImageGalleryAndLightbox.propTypes = {
  galleryImages: PropTypes.array.isRequired,
  lightboxImages: PropTypes.array.isRequired,
  renderGallery: PropTypes.func.isRequired
}

/*
 *
 * Images
 *
 */

/*
 *
 * Import & Exports
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import noScroll from 'no-scroll'

import '../../../node_modules/react-image-lightbox/style.css'
import '../../styles/plugins/examples/react-image-lightbox.css'

export default ImageGalleryAndLightbox

/*

INSTRUCTIONS:

 <ImageGalleryAndLightbox
  galleryImages={visibleItems}
  lightboxImages={items}
  renderGallery={(galleryImages, handleImageClick) => (
    <Thumbnails items={galleryImages} handleImageClick={handleImageClick} />
  )}
/>

const Thumbnails = ({ items, handleImageClick }) => (
  <ul>
    {items.map((item, i) => (
      <Item
        key={item.node.image}
        item={item.node}
        lightboxIndex={i}
        handleImageClick={handleImageClick}
      />
    ))}
  </ul>
)

const Thumbnail = ({ item, lightboxIndex, handleImageClick }) => (
  <li className="relative">
    <Img fluid={item.image.childImageSharp.thumbnail} alt={item.alt} />

    /* Overlay + Lightbox trigger *
    <button
      onClick={handleImageClick}
      value={lightboxIndex}
      className="flex justify-center items-center absolute fill bg-transparent w-100 group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate"
    >
      View Image
    </button>
  </li>
)

1. Query a "thumbnail" (fluid) and "lightbox" (fixed) version of each image
2. Send all images to ImageGalleryAndLightbox via the "images" prop
3. Set the value of each button triggering the lightbox to the image's map index (so Lightbox knows the order of the lightbox images)

*/
