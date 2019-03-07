const TemplateExample = ({ data }) => (
  <section className="container mv6 bg-light-yellow pa5 shadow-lg">
    <h2 className="mb2">Here are some auto-generated template pages</h2>
    <h4 className="mb4">(These are created programmatically in gatsby-node.)</h4>

    <ul className="flex justify-between">
      {data.map((page, i) => {
        return (
          <li key={i}>
            <Link to={`/${page.node.slug}/`} className="link dib mh3 ">
              {page.node.title}
            </Link>
          </li>
        )
      })}
    </ul>
  </section>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import { Link } from 'gatsby'

export default TemplateExample
