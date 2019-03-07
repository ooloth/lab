const YamlExample = ({ data }) => (
  <section className="mt5 pt4 mb6">
    <h2 className="mb3 f3">Here's some queried YAML content:</h2>

    <ul className="flex justify-between">
      {data.map((example, i) => {
        return <Example key={i} example={example.node} />
      })}
    </ul>
  </section>
)

/*
 *
 * Example
 *
 */

const Example = ({ example }) => (
  <li className="ph3 w-third">
    <Img
      fluid={example.image.childImageSharp.fluid}
      alt={example.alt}
      className="shadow-lg"
    />

    <h3 className="mb3 pt3 f3">{example.title}</h3>

    <p
      className="ml-auto mr-auto mb3 measure lh-tall"
      dangerouslySetInnerHTML={{ __html: example.description }}
    />

    <Anchor href={example.link} className="link dib">
      I'm a link
    </Anchor>
  </li>
)

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'

import Img from '../../components/Img'
import Anchor from '../../components/Anchor'

export default YamlExample
