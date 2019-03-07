const NinesPage = () => (
  <Base>
    {/* <PageMetadata page={data.metadata.siteMetadata.ninesPage} /> */}

    <main className="avenir" style={{ minHeight: `calc(100vh - 36px)` }}>
      <LabHero title="Nines" description="Sexy Sudoku." />

      <NinesApp />
    </main>

    {/* <Footer /> */}
  </Base>
)

const NinesApp = () => (
  <section className="container pv5">
    <BackToLab />
  </section>
)

import React, { Fragment } from 'react'

import Base from '../ui/Base'
// import PageMetadata from '../../components/PageMetadata'

import LabHero from '../ui/LabHero'
import BackToLab from '../ui/BackToLab'
// import Footer from '../../sections/Footer'

export default NinesPage
