const ReactSpringExample = () => (
  <section className="mv6 bg-lightest-blue pa5 shadow-lg">
    <h2 className="mb3">React-Spring Examples</h2>

    <h3 className="mt4 f3">Spring (with native enabled)</h3>
    <Spring from={{ scale: 0 }} to={{ scale: 1 }} config={config.slow}>
      {({ scale }) => (
        <p className="pb4 f4" style={{ transform: `scale(${scale})` }}>
          Scale Up on Mount
        </p>
      )}
    </Spring>

    <h3 className="mt4 f3">Spring (with native enabled)</h3>
    <Spring native from={{ scale: 0 }} to={{ scale: 1 }} config={config.slow}>
      {({ scale }) => (
        <animated.p
          className="pb4 f4"
          style={{
            transform: interpolate(scale, scale => `scale(${scale})`)
          }}
        >
          Scale Up on Mount
        </animated.p>
      )}
    </Spring>

    <p className="lh-copy">
      Add more examples that duplicate what I currently use GSAP for...
    </p>
  </section>
)

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import { Spring, animated, interpolate, config } from 'react-spring'

export default ReactSpringExample
