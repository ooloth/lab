function TwitterFeedExample() {
  const tweets = useTwitterFeed(`Beyonce`)

  return (
    <Section>
      <h2>Twitter Feed</h2>
      <Code>useTwitterFeed</Code>

      <Subheading>Static</Subheading>
      {tweets && (
        <Tweets>
          {tweets.map(tweet => (
            <li key={tweet.tid}>
              <Text dangerouslySetInnerHTML={{ __html: tweet.tweet }} />
              <Interactions tweetId={tweet.tid} />
            </li>
          ))}
        </Tweets>
      )}

      {/* TODO: for a carousel version, see Ashley's ContactTwitter.js */}
      {/* {tweets && (
        <FadingCarousel slides={tweets} speed={6000}>
          {(slides, slideIndex) => (
            <CarouselSlides slides={slides} slideIndex={slideIndex} />
          )}
        </FadingCarousel>
      )} */}
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const Subheading = styled.h3`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Tweets = styled.ul`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  margin-top: var(--s4);
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

function Interactions({ tweetId }) {
  return (
    <List>
      <Reply id={tweetId} />
      <Retweet id={tweetId} />
      <Favorite id={tweetId} />
    </List>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const List = styled.ul`
  display: flex;
`

///////////////////////////////////////////////////////////////////////////////////

function Reply({ id }) {
  return (
    <li>
      <Link href={`https://twitter.com/intent/tweet?in_reply_to=${id}`}>
        <SrText>Reply</SrText>
        <Bubble aria-hidden="true" />
      </Link>
    </li>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Bubble = styled(CommentSVG)`
  ${icon}
`

///////////////////////////////////////////////////////////////////////////////////

function Retweet({ id }) {
  return (
    <li>
      <Link href={`https://twitter.com/intent/retweet?tweet_id=${id}`}>
        <SrText>Retweet</SrText>
        <Arrows aria-hidden="true" />
      </Link>
    </li>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Arrows = styled(RetweetSVG)`
  margin: 0 var(--s2);
  ${icon}
  width: 1.5em;
`

///////////////////////////////////////////////////////////////////////////////////

function Favorite({ id }) {
  return (
    <li>
      <Link href={`https://twitter.com/intent/favorite?tweet_id=${id}`}>
        <SrText>Favorite</SrText>
        <Heart aria-hidden="true" />
      </Link>
    </li>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Heart = styled(HeartSVG)`
  ${icon}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { Link, SrText } from '../elements'
import useTwitterFeed from '../../logic/examples/useTwitterFeed'
import { ReactComponent as CommentSVG } from '../../svg/comment.svg'
import { ReactComponent as HeartSVG } from '../../svg/heart.svg'
import { ReactComponent as RetweetSVG } from '../../svg/retweet.svg'
import { copy, icon } from '../../styles'

export default TwitterFeedExample
