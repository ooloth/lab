const LabPage = () => (
  <Base>
    <main className="avenir" style={{ minHeight: `calc(100vh - 36px)` }}>
      <LabHero title="Lab" description="Experiments with app-building." />

      <PageLinks />
    </main>

    {/* <Footer /> */}
  </Base>
)

// TODO: add some kind of image/icon to go with each link (turn links into squares with an image/icon, title, and maybe a one-line description)
const PageLinks = () => (
  <section>
    <ul>
      {labLinks.map((link, i) => (
        <li key={i}>
          <Link to={`/${link}/`}>{link}</Link>
        </li>
      ))}
    </ul>
  </section>
)

const labLinks = [`cards`, `mines`, `moves`, `news`, `nines`, `poker`, `odds`]

/*
 *
 * Imports & Exports
 *
 */

import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Base from '../ui/Base'
// import PageMetadata from '../ui/PageMetadata'

import LabHero from '../ui/LabHero'
// import Footer from '../../sections/Footer'

export default LabPage
