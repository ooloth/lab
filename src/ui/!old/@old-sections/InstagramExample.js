// TODO: To improving loading speed, wrap all social embeds with react-waypoint (see AriaUmezawa > Socials.js > Accounts class for an example). However, don't add Waypoint directly to this component because shouldComponentUpdate must be set to false (to avoid duplicate feed content), which means it can't respond to message from Waypoint. <- Still true?

class InstagramExample extends PureComponent {
  state = { pageLoaded: false }

  // Delay fetch until the page has fully loaded (remove or provide placeholder post content to prevent page jump)
  // TODO: replace with Waypoint? What if this part of the page is in focus when it refreshes?
  componentDidMount = () => {
    window.addEventListener(`load`, () => this.setState({ pageLoaded: true }), {
      once: true
    })
  }

  render() {
    const { pageLoaded } = this.state

    const instafeedTarget = `instafeed`
    const instafeedTemplate = `
      <a href="{{link}}" target="_blank" rel="noopener" class="group relative w-third">
      <div class="aspect-ratio aspect-ratio--1x1">
        <img src="{{image}}" class="aspect-ratio--object object-cover object-center" />
        <p class="flex justify-center items-center absolute fill z-999 bg-transparent group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate">
          View Post
        </p>
      </div>
    </a>
  `

    return (
      <div className="mv6 bg-light-yellow pa5 shadow-lg">
        <h2 className="mb4">Here's an Instagram Feed</h2>

        {pageLoaded && (
          <div id={instafeedTarget} className="flex container">
            <Instafeed
              limit="3"
              resolution="standard_resolution"
              sortBy="most-recent"
              target={instafeedTarget}
              template={instafeedTemplate}
              // To generate the following settings, see "API: Instagram" note
              userId="279691891"
              clientId="d34e19504cac4f0a943b99fe32911137"
              accessToken="279691891.d34e195.0161d2d16d2046e182bede7cdf2cdb6c"
            />
          </div>
        )}
      </div>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { PureComponent } from 'react'
import Instafeed from 'react-instafeed'

export default InstagramExample
