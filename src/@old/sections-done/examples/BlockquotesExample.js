const BlockquotesExample = () => (
  <section className="mv6 bg-light-green pa5 shadow-lg">
    <h2 className="mb4">Here are some quotations:</h2>

    <h3 className="pt3 mb2 f4">Quote with no source:</h3>
    <Quote
      quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam, earum maxime, exercitationem iure corrupti consequuntur mollitia qui commodi nemo perferendis quidem dignissimos similique officiis asperiores, harum vel pariatur et!"
      className="ml-auto mr-auto measure"
    />

    <h3 className="mt4 mb2 f4 mt3">Quote with a source:</h3>
    <Quote
      quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam, earum maxime, exercitationem iure corrupti consequuntur mollitia qui commodi nemo perferendis quidem dignissimos similique officiis asperiores, harum vel pariatur et!"
      source="Your mom, New York Times"
      className="ml-auto mr-auto measure"
    />

    <h3 className="mt4 mb2 f4 mt3">Quote with a source and link:</h3>
    <Quote
      quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam, earum maxime, exercitationem iure corrupti consequuntur mollitia qui commodi nemo perferendis quidem dignissimos similique officiis asperiores, harum vel pariatur et!"
      source="Your mom, Your Mom Times"
      href="https://www.google.ca"
      className="ml-auto mr-auto measure"
    />
  </section>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'

import Quote from '../../components/examples/Quote'

export default BlockquotesExample
