/*
 *
 * This template is used to lay out the INSERT PAGE CATEGORY
 * pages that are generated programatically by gatsby-node
 * using the data in INSERT-FILE.yml.
 *
 */

function Template({ data }) {
  const template = data.allTemplateYaml.edges[0].node

  return (
    <Base>
      <Metadata page={template.pageMetadata} />

      <main id="main-content tc sans-serif">
        {/* <PageMetadata page={template.pageMetadata} /> */}

        <h1 className="pv4 tc f1">Hi from {template.title}</h1>

        <div className="tc">
          <Link to="/" className="link dib mb4">
            Go back home
          </Link>
        </div>
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

export const query = graphql`
  query($slug: String!) {
    allTemplateYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          pageMetadata {
            title
            description
            url
          }
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Link, graphql } from 'gatsby'

import Base from '../Base'
import Metadata from '../Metadata'

export default Template
