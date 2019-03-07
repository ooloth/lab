// TODO: See Peter's/AZOOR's Base.js for how to replace site with browser warning (last resort if issues can't be resolved)

function Base({ children }) {
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
          // preconnect={[
          //   `https://cdnjs.cloudflare.com`,
          //   `https://cdn.jsdelivr.net`,
          //   `https://www.google-analytics.com`
          // ]}
          />

          <Header
            navLinks={data.allLinksNavYaml.edges}
            socialLinks={data.allLinksSocialYaml.edges}
          />

          {children}

          <Footer socialLinks={data.allLinksSocialYaml.edges} />
        </>
      )}
    />
  )
}

/*
 *
 * Queries
 *
 */

//  TODO: query email and social links from gatsby-config instead (and delete YML duplicates)
const BASE_QUERY = graphql`
  query {
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

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import { ThemeProvider } from 'styled-components'

import Metadata from '../components/Metadata'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

import '../styles/index.css'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
