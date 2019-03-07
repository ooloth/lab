const NewsPage = () => (
  <Base>
    {/* <PageMetadata page={data.metadata.siteMetadata.newsPage} /> */}

    <main className="avenir" style={{ minHeight: `calc(100vh - 36px)` }}>
      <LabHero title="News" description="Daily news without the noise." />

      <NewsApp />
    </main>

    {/* <Footer /> */}
  </Base>
)

const NewsApp = () => (
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

export default NewsPage
