const TwitterExample = () => (
  <section className="mv6 bg-lightest-blue pa5 shadow-lg">
    <h2 className="mb3">Here's a Twitter Feed</h2>

    <TwitterFeed
      user="beyonce"
      maxTweets={3}
      render={tweets => <Tweets tweets={tweets} />}
    />
  </section>
)

/*
 *
 * Tweets
 *
 */

const Tweets = ({ tweets }) => (
  <ul className="container">
    {tweets.map(tweet => (
      <Tweet key={tweet.tid} tweet={tweet} />
    ))}
  </ul>
)

/*
 *
 * Tweet
 *
 */

const Tweet = ({ tweet }) => (
  <li className="tweet pv4">
    <Content tweet={tweet.tweet} />
    <Reply id={tweet.tid} />
    <Retweet id={tweet.tid} />
    <Favorite id={tweet.tid} />
  </li>
)

/*
 *
 * Author
 *
 */

// TODO: Add some default author details to make future projects easy.
// const Author = ({ author }) => <div>Hi</div>

/*
 *
 * Content
 *
 */

const Content = ({ tweet }) => (
  <p dangerouslySetInnerHTML={{ __html: tweet }} className="mb3 lh-title" />
)

/*
 *
 * Reply
 *
 */

const Reply = ({ id }) => (
  <Anchor href={`https://twitter.com/intent/tweet?in_reply_to=${id}`} srText="Reply">
    <CommentIcon className="icon f4 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Retweet
 *
 */

const Retweet = ({ id }) => (
  <Anchor
    href={`https://twitter.com/intent/retweet?tweet_id=${id}`}
    srText="Retweet"
  >
    <RetweetIcon className="icon mh2 f3 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Favorite
 *
 */

const Favorite = ({ id }) => (
  <Anchor
    href={`https://twitter.com/intent/favorite?tweet_id=${id}`}
    srText="Favorite"
  >
    <HeartIcon className="icon f4 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Anchor from '../../components/Anchor'
import TwitterFeed from '../../components/examples/TwitterFeed'

// These use gatsby-plugin-svgr (initialized in gatsby-config)
// See: https://github.com/zabute/gatsby-plugin-svgr
import { ReactComponent as CommentIcon } from '../../svg/comment.svg'
import { ReactComponent as HeartIcon } from '../../svg/heart.svg'
import { ReactComponent as RetweetIcon } from '../../svg/retweet.svg'

export default TwitterExample
