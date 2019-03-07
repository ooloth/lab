// TODO: Hmm... this makes the page shake on scroll in Chrome...

// TODO: Try using the Parallax component from react-spring for this: https://github.com/drcmda/react-spring

// TODO: an alternative to try (seems smooth): https://github.com/jscottsmith/react-scroll-parallax

// TODO: another candidate (smooth): https://github.com/RRutsche/react-parallax

// TODO: another candidate (smooth): https://github.com/Stanko/react-plx, https://stanko.github.io/plx-react-parallax-component/

// TODO: another candidate (smooth): https://github.com/GA-MO/react-skrollr (note that original repository is 4 years old and archived: https://github.com/Prinzhorn/skrollr)

// TODO: another alternative recommended by rellax creator when creating SLOW parallax effects: https://github.com/markdalgleish/stellar.js (not that original repository is old)

// TODO: another option (untested, no demo): https://github.com/keske/react-parallax-component

const ParallaxExample = () => (
  <section className="mv6">
    <h2>Parallax Example</h2>

    <div className="flex justify-between items-center bg-pink h7">
      <p>I'm normal</p>
      <Parallax
        className="bg-blue h-50 shadow-md"
        style={{ height: `110%` }}
        speed={2}
        percentage={0.5}
      >
        I’m slow and smooth
      </Parallax>
    </div>
  </section>
)

/* 
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Parallax from 'react-rellax'
// see: https://github.com/nelonoel/react-rellax

export default ParallaxExample
