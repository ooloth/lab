// TODO: If first image is tiny, make sure all styles in styles/plugins/react-modal are scoped (since react-image-lightbox uses the bare react-modal classes to style its instance of react-modal).

class ImageLightboxExample extends Component {
  state = {
    lightboxIsOpen: false,
    photoIndex: null
  }

  handleImageClick = event => {
    this.setState({ lightboxIsOpen: true, photoIndex: event.target.value })
  }

  handleEnter = event => event.charCode === 13 && this.handleImageClick(event)

  render() {
    /* Shouldn't need to update this line */
    const { lightboxIsOpen, photoIndex } = this.state

    /* Update these variables depending on how images are sent into this component */
    const { images } = this.props

    // Set lightbox variables
    const nextIndex = (photoIndex + 1) % images.length
    const prevIndex = (photoIndex + images.length - 1) % images.length

    return (
      <section>
        <h2 className="mb4">Image Gallery + Lightbox</h2>
        <Images
          images={images}
          handleImageClick={this.handleImageClick}
          handleEnter={this.handleEnter}
        />

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={images[photoIndex].childImageSharp.lightbox.src}
            nextSrc={images[nextIndex].childImageSharp.lightbox.src}
            prevSrc={images[prevIndex].childImageSharp.lightbox.src}
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() => this.setState({ photoIndex: prevIndex })}
            onMoveNextRequest={() => this.setState({ photoIndex: nextIndex })}
            enableZoom={false}
            animationOnKeyInput={true}
          />
        )}
      </section>
    )
  }
}

/*
 *
 * Images
 *
 */

const Images = ({ images, handleImageClick, handleEnter }) => (
  <ul className="flex justify-between">
    {images.map((image, i) => {
      return (
        <li key={i} className="group relative mt3 w-30">
          <Img fluid={image.childImageSharp.thumbnail} alt="" />

          {/* Overlay + Lightbox trigger */}
          <button
            onClick={handleImageClick}
            onKeyPress={handleEnter}
            value={i}
            className="flex justify-center items-center absolute fill bg-transparent w-100 group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate"
          >
            View Image
          </button>
        </li>
      )
    })}
  </ul>
)

/*
 *
 * Import & Exports
 *
 */

import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'

import '../../../node_modules/react-image-lightbox/style.css'
import '../../styles/plugins/examples/react-image-lightbox.css'

import Img from '../../components/Img'

export default ImageLightboxExample
