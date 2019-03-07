function SecondPage({ data }) {
  return (
    <Base>
      <Metadata page={data.site.siteMetadata.secondPage} />
      <main id="main-content" tabIndex="-1">
        <h1
          css={`
            padding: var(--s8) var(--s4);
          `}
        >
          Hi from page 2
        </h1>
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

export const query = graphql`
  query {
    site {
      siteMetadata {
        secondPage {
          title
          description
          url
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { graphql } from 'gatsby'

import Base from '../ui/Base'
import Metadata from '../ui/Metadata'

export default SecondPage
