const Footer = ({ socialLinks }) => (
  <footer className="bg-black pa3 tc sans-serif white">
    <h1>I'm a footer</h1>
    <Copyright />
  </footer>
)

/*
 *
 * Copyright
 *
 */

const Copyright = () => (
  <p className="container pv4 ph3 lh-copy f6">
    &copy; {new Date().getFullYear()} Insert Site Name.
    All&nbsp;rights&nbsp;reserved. Brewed&nbsp;by&nbsp;
    <Anchor href="http://coffeeshopcreative.ca" className="">
      Coffeeshop&nbsp;Creative
    </Anchor>
    .
  </p>
)

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'

import Anchor from '../components/Anchor'

export default Footer
