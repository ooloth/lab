const MinesPage = () => (
  <Base>
    {/* <PageMetadata page={data.metadata.siteMetadata.minesPage} /> */}

    <main className="avenir" style={{ minHeight: `calc(100vh - 36px)` }}>
      <LabHero title="Mines" description="Sexy Minesweeper." />

      <MinesApp />
    </main>

    {/* <Footer /> */}
  </Base>
)

const MinesApp = () => (
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

export default MinesPage
