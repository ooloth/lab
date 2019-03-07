const SVGsAndEmojisExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Here are some SVGs and emojis:</h2>

    <h3 className="pt3 mb2 f4">SVG logo:</h3>
    <YouTubeLogo aria-label="Heart" className="f1 w4 h-auto" />

    <h3 className="mt4 mb2 f4 mt3">SVG icons:</h3>
    <Heart aria-label="Heart" className="icon mr1 f1 red" />
    <Instagram className="icon ml1 f1 purple" />

    <h3 className="mt4 mb2 f4 mt3">Emojis:</h3>
    <Emoji emoji="🕺" ariaLabel="A man dancing" className="f1" />
    <Emoji emoji="🔥" ariaLabel="A flame" className="mh2 f1" />
    <Emoji emoji="🎉" ariaLabel="A party noisemaker and confetti" className="f1" />
  </section>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'

// These use gatsby-plugin-svgr (initialized in gatsby-config)
// See: https://github.com/zabute/gatsby-plugin-svgr
import { ReactComponent as Heart } from '../../svg/heart.svg'
import { ReactComponent as Instagram } from '../../svg/instagram.svg'
import { ReactComponent as YouTubeLogo } from '../../svg/youtube-logo.svg'

import Emoji from '../../components/examples/Emoji'

export default SVGsAndEmojisExample
