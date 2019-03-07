class FadingCarousel extends Component {
  state = { slideIndex: 0 }

  componentDidMount = () => {
    this.carouselInterval = setInterval(this.goToSlide, this.props.speed) // autoplay
  }

  goToSlide = e => {
    const { slideIndex } = this.state

    let nextIndex
    // button click takes precedence:
    if (e) nextIndex = e.target.value
    // loop to first slide if at end:
    else if (slideIndex === this.props.slides.length - 1) nextIndex = 0
    // otherwise, advance by one:
    else nextIndex = slideIndex + 1

    this.setState({ slideIndex: nextIndex })
  }

  handleBtnClick = e => {
    this.setState({ slideIndex: parseInt(e.target.value) })
    clearInterval(this.carouselInterval) // stop autoplay after manual navigation
  }

  componentWillUnmount = () => clearInterval(this.carouselInterval)

  render() {
    const { slides } = this.props
    const { slideIndex } = this.state

    return this.props.children(slides, slideIndex, this.handleBtnClick)
  }
}

FadingCarousel.propTypes = {
  slides: PropTypes.array.isRequired
}

FadingCarousel.defaultProps = {
  speed: 5000
}

/*
 *
 * Imports & Exports
 *
 */

import { Component } from 'react'
import PropTypes from 'prop-types'

export default FadingCarousel
