// TODO: If first image is tiny, make sure all styles in styles/plugins/react-modal are scoped (since react-image-lightbox uses the bare react-modal classes to style its instance of react-modal).

class VideoLightboxExample extends Component {
  state = { lightboxIsOpen: false, videoIndex: null }

  handleImageClick = e =>
    this.setState({ lightboxIsOpen: true, videoIndex: parseInt(e.target.value) })

  render() {
    /* Shouldn't need to update this line */
    const { lightboxIsOpen, videoIndex } = this.state

    /* Update these variables depending on how images are sent into this component */
    const { videos } = this.props

    // Set lightbox variables
    const nextIndex = (videoIndex + 1) % videos.length
    const prevIndex = (videoIndex + videos.length - 1) % videos.length

    return (
      <section className="mv6 bg-light-pink pa5 shadow-lg">
        <h2 className="mb4">Video Gallery + Lightbox</h2>

        <Images
          videos={videos}
          handleImageClick={this.handleImageClick}
          handleEnter={this.handleEnter}
        />

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={
              // TODO: move styles to reactModalStyle prop so clicking outside the video will close the modal?
              // See: https://github.com/treyhuffine/lightbox-react#options
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={videos[videoIndex].node.url} // TODO: may need to remove .node
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
                  url={videos[nextIndex].node.url}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            prevSrc={
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={videos[prevIndex].node.url}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            // nextSrc={<ReactPlayer url={videos[nextIndex].url} />}
            // prevSrc={<ReactPlayer url={videos[prevIndex].url} />}
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() => this.setState({ videoIndex: prevIndex })}
            onMoveNextRequest={() => this.setState({ videoIndex: nextIndex })}
            enableZoom={false}
            animationOnKeyInput={true}
            // reactModalStyle={{ display: `flex`, alignItems: `center`, height: `100%` }}
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

const Images = ({ videos, handleImageClick, handleEnter }) => (
  <ul className="flex justify-between">
    {videos.map((video, i) => {
      return (
        <li key={i} className="group relative mt3 w-30 shadow-lg">
          <Img fluid={video.node.image.childImageSharp.fluid} alt="" />

          {/* Overlay + Lightbox trigger */}
          <button
            onClick={handleImageClick}
            onKeyPress={handleEnter}
            value={i}
            className="flex justify-center items-center absolute fill bg-transparent w-100 group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate"
          >
            Watch Video
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

// NOTE: A forked version of react-image-lightbox that supports non-image component children
import Lightbox from 'lightbox-react'
import ReactPlayer from 'react-player'

import '../../styles/plugins/examples/lightbox-react.css'

import Img from '../../components/Img'

export default VideoLightboxExample
