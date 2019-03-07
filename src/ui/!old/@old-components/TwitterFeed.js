class TwitterFeed extends Component {
  state = { tweets: null }

  componentDidMount = () => {
    window.addEventListener(`load`, () => this.fetchTweets(), {
      once: true
    })
  }

  fetchTweets = () =>
    twitterFetcher.fetch({
      profile: { screenName: this.props.user },
      maxTweets: this.props.maxTweets,
      dataOnly: true,
      enableLinks: true,
      showRetweet: false,
      // lang: `en`,
      customCallback: this.displayTweets
    })

  displayTweets = tweets => this.setState({ tweets: tweets })

  render() {
    return this.state.tweets ? this.props.render(this.state.tweets) : null
  }
}

TwitterFeed.propTypes = {
  user: PropTypes.string.isRequired,
  maxTweets: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}

/*
 *
 * Imports & Exports
 *
 */

import { Component } from 'react'
import PropTypes from 'prop-types'
import twitterFetcher from 'twitter-fetcher'

import '../../styles/plugins/examples/twitter-fetcher.css'

export default TwitterFeed

/*

INSTRUCTIONS:

<TwitterFeed
  user="beyonce"
  maxTweets={3}
  render={tweets => <Tweets tweets={tweets} />}
/>

1. Update styling in styles/components/_twitter-fetcher.css
2. Handle the page jump on load by wrapping with a Reveal component that animates height, width, scale, etc.

Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
API docs: http://jasonmayes.com/projects/twitterApi/
Github usage example: https://github.com/jasonmayes/Twitter-Post-Fetcher/blob/master/js/exampleUsage.js
API usage example: https://codepen.io/jasonmayes/pen/Ioype

TODO: learn how to target a hashtag instead of a profile name

*/
