function Metadata({ page, preconnect, preload }) {
  return (
    <StaticQuery
      query={SITE_QUERY}
      render={data => (
        <PageMetadata
          site={data.site.siteMetadata}
          page={page}
          preconnect={preconnect}
          preload={preload}
        />
      )}
    />
  )
}

Metadata.propTypes = {
  page: PropTypes.object,
  preconnect: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  preload: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

/*
 *
 * Page
 *
 */

function PageMetadata({ site, page, preconnect, preload }) {
  // Use sitewide metadata unless overridden by page-specific metadata
  const lang = page ? (page.lang ? page.lang : site.lang) : site.lang

  const title = page ? (page.title ? page.title : site.title) : site.title

  const description = page
    ? page.description
      ? page.description
      : site.description
    : site.description

  const url = page ? (page.url ? page.url : site.siteUrl) : site.siteUrl

  const image = page
    ? page.image
      ? site.siteUrl + page.image.childImageSharp.fluid.src
      : site.siteUrl + siteImage
    : site.siteUrl + siteImage

  const type = page ? (page.type ? page.type : `website`) : `website`

  return (
    <>
      <Helmet>
        {/* HTML language */}
        <html itemScope itemType="http://schema.org/WebPage" lang={lang} />

        {/* Title first (Gatsby already adds meta charset and viewport) */}
        <title itemProp="name">{title}</title>

        {/* Search engine */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* Preconnect to external resources */}
        {preconnect &&
          preconnect.map(url => <link key={url} rel="preconnect" href={url} />)}

        {/* Preloaded above-the-fold static assets (fonts, audio, video) */}
        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content */}
        {preload &&
          preload.map(resource => (
            <link
              key={resource.href}
              rel="preload"
              href={resource.href}
              as={resource.as}
              type={resource.type}
              crossOrigin="anonymous"
            />
          ))}

        {/* Schema.org for Google */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Open Graph general (Facebook, Pinterest, Slack) */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content={site.locale} />

        {/* Non-essential, but required for analytics */}
        {site.facebookAppId && (
          <meta property="fb:app_id" content={site.facebookAppId} />
        )}
        {site.twitterSite && <meta name="twitter:site" content={site.twitterSite} />}
        {site.twitterCreator && (
          <meta name="twitter:site" content={site.twitterCreator} />
        )}
      </Helmet>

      <StructuredData site={site} image={image} />
    </>
  )
}

/*
 *
 * Structured Data
 *
 */

function StructuredData({ site, image }) {
  const sameAs = site.socialLinks.map(link => `"${link}"`)

  const structuredData = `{
    "@context": "http://schema.org",
    "@type": "${site.structuredDataType}",
    "@id": "${site.siteUrl}",
    "name": "${site.title}",
    ${site.jobTitle && `"jobTitle": "${site.jobTitle}",`}
    "description": "${site.description}",
    "url": "${site.siteUrl}",
    "image": "${image.replace(`js/../`, ``)}",
    ${site.email && `"email": "mailto:${site.email}",`}
    ${site.telephone && `"telephone": "${site.telephone}",`}
    ${site.address &&
      `
      "address": {
        "@type": "PostalAddress",
        ${site.address.street && `"streetAddress": ${site.address.street},`}
        ${site.address.locality && `"addressLocality": ${site.address.locality},`}
        ${site.address.region && `"addressRegion": ${site.address.region},`}
        ${site.address.country && `"addressCountry": ${site.address.country}`}
      },
    `}
    "sameAs": [${sameAs}]
  }`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredData }}
    />
  )
}

/*
 *
 * Queries
 *
 */

const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        lang
        locale
        email
        twitterSite
        twitterCreator
        socialLinks
        address {
          locality
          region
          country
        }
        structuredDataType
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
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import siteImage from '../images/placeholder-1.jpg'

export default Metadata
