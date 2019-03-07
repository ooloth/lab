const OddsPage = () => (
  <Base>
    {/* <PageMetadata page={data.metadata.siteMetadata.oddsPage} /> */}

    <main className="avenir" style={{ minHeight: `calc(100vh - 36px)` }}>
      <LabHero title="Odds" description="Poker math drills." />

      <OddsApp />
    </main>

    {/* <Footer /> */}
  </Base>
)

const OddsApp = () => (
  <section className="container pv5">
    <BackToLab />
  </section>
)

import React, { Fragment } from 'react'

import Base from '../ui/Base'
// import PageMetadata from '../ui/PageMetadata'

import LabHero from '../ui/LabHero'
import BackToLab from '../ui/BackToLab'
// import Footer from '../../sections/Footer'

export default OddsPage
