function Base({ children }) {
  const [isIE, setIsIE] = useState(false)

  useEffect(() => {
    setIsIE(is.ie())
  }, [])

  return (
    <StaticQuery
      query={BASE_QUERY}
      render={data => (
        <>
          <Metadata
            // preload={[
            //   { href: avenirRegular, as: `font`, type: `font/woff2` },
            //   { href: avenirHeavy, as: `font`, type: `font/woff2` }
            // ]}
            preconnect={[`https://unpkg.com`]}
          />

          <CustomProperties />
          <Reset />

          {isIE ? (
            <BrowserWarning title={data.site.siteMetadata.title} />
          ) : (
            <>
              <Top
                navLinks={data.allLinksNavYaml.edges}
                socialLinks={data.allLinksSocialYaml.edges}
              />

              {children}

              <Bottom
                navLinks={data.allLinksNavYaml.edges}
                socialLinks={data.allLinksSocialYaml.edges}
              />
            </>
          )}
        </>
      )}
    />
  )
}

///////////////////////////////////////////////////////////////////////////////////

//  TODO: query email and social links from gatsby-config instead (and delete YML duplicates)?
const BASE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allLinksNavYaml {
      edges {
        node {
          href
          text
        }
      }
    }
    allLinksSocialYaml {
      edges {
        node {
          href
          text
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import is from 'is_js'

import Metadata from './Metadata'
import BrowserWarning from './BrowserWarning'
import Top from './Top'
import Bottom from './Bottom'

import { CustomProperties, Reset } from '../styles'
// import '../styles/base/font-face.css'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
