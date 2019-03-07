// TODO: set any dedicated custom properties here (like Heading.js)

const Image = styled(Img)`
  ${boxStyles}

  ${p => p.bg && bgImageStyles};
`

///////////////////////////////////////////////////////////////////////////////////

const bgImageStyles = css`
  position: absolute !important;
  z-index: -1 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

///////////////////////////////////////////////////////////////////////////////////

import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { boxStyles } from './Box'

export default Image

// See: https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props
