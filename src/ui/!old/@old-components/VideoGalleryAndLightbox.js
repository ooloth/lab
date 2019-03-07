class VideoGalleryAndLightbox extends Component {
  state = { lightboxIsOpen: false, videoIndex: 0 }

  handleImageClick = e =>
    this.setState({ lightboxIsOpen: true, videoIndex: parseInt(e.target.value) })

  render() {
    /* Shouldn't need to update this line */
    const { lightboxIsOpen, videoIndex } = this.state

    /* Update these variables depending on how images are sent into this component */
    const { galleryItems, lightboxItems, renderGallery } = this.props

    // Set lightbox variables
    const nextIndex = (videoIndex + 1) % lightboxItems.length
    const prevIndex = (videoIndex + lightboxItems.length - 1) % lightboxItems.length

    return (
      <>
        {renderGallery(galleryItems, this.handleImageClick)}

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={
              // TODO: move styles to reactModalStyle prop so clicking outside the video will close the modal?
              // See: https://github.com/treyhuffine/lightbox-react#options
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxItems[videoIndex].node.video} // TODO: may need to remove .node
                  width="100%"
                  height="100%"
                  style={{ display: `flex`, alignItems: `center` }}
                  playing
                />
              </div>
            }
            nextSrc={
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxItems[nextIndex].node.video}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            prevSrc={
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxItems[prevIndex].node.video}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() => this.setState({ videoIndex: prevIndex })}
            onMoveNextRequest={() => this.setState({ videoIndex: nextIndex })}
            enableZoom={false}
            animationOnKeyInput={true}
          />
        )}
      </>
    )
  }
}

VideoGalleryAndLightbox.propTypes = {
  // images: PropTypes.array.isRequired
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

// NOTE: A forked version of react-image-lightbox that supports non-image component children
import Lightbox from 'lightbox-react'
import ReactPlayer from 'react-player'

import '../../styles/plugins/examples/lightbox-react.css'

export default VideoGalleryAndLightbox

/*

INSTRUCTIONS:

<VideoGalleryAndLightbox
  galleryItems={videos}
  lightboxItems={videos}
  renderGallery={(galleryItems, handleImageClick) => (
    <Videos videos={galleryItems} handleClick={handleImageClick} />
  )}
/>

(See J Patrick Raftery's PerformancesListen.js)

*/
