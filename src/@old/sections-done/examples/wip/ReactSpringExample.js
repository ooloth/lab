const ReactSpringExample = () => (
  <section className="mv6">
    <h2>React Spring Examples</h2>

    <Spring from={{ height: 0 }} to={{ height: `auto` }}>
      {styles => (
        <div className="bg-black pa3 white" style={styles}>
          i will fade in
        </div>
      )}
    </Spring>

    {/* <Spring native from={{ height: 0 }} to={{ height: `auto` }}>
      {styles => (
        <animated.div className="bg-black pa3 white" style={styles}>
          i will fade in
        </animated.div>
      )}
    </Spring> */}

    {/* <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1}>
        <div className="bg-red pa3 h7">Layer 1</div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="bg-blue pa3">Layer 2</div>
      </ParallaxLayer>
    </Parallax> */}
  </section>
)

/* 
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import { Parallax, ParallaxLayer, Spring, animated } from 'react-spring'

export default ReactSpringExample
