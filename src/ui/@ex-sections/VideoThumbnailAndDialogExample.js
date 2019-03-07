function VideoThumbnailAndDialogExample({ video }) {
  return (
    <Section>
      <h2>Video Thumbnail + Dialog</h2>
      <Code>@reach/dialog, useMachine, dialogMachine, useTransition</Code>
      <VideoThumbnailAndDialog video={video} />
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

function VideoThumbnailAndDialog({ video }) {
  const [state, send] = useMachine(dialogMachine)

  const transitions = useTransition(state.value === `open`, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onRest: () => send('CLOSE_OVERLAY'), // must manually close after dialog is out
  })

  return (
    <>
      <Thumbnail
        image={video.image}
        openDialog={() => send('OPEN')}
        isDialogOpen={state.value === `open`}
      />

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Overlay
              key={key}
              isOpen={state.value !== `closed`}
              onDismiss={() => send('CLOSE')}
              style={{ opacity: props.opacity }}
            >
              <Close onClick={() => send('CLOSE')}>Close dialog</Close>

              <Content>
                <Player url={video.url} controls={true} playing />
              </Content>
            </Overlay>
          )
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Overlay = styled(animated(DialogOverlay))`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    background-color: hsl(0, 0%, 0%);
    color: var(--white);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Content = styled(animated(DialogContent))`
  && {
    margin: 0;
    box-shadow: var(--shadow1);
    background-color: hsl(0, 0%, 0%);
    padding: 0;
    width: 100%;
    ${aspectRatioParent}
    ${ratio16x9}
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Player = styled(YouTubePlayer)`
  ${aspectRatioChild}
`

///////////////////////////////////////////////////////////////////////////////////

const Close = styled.button`
  position: absolute;
  top: var(--s4);
  right: var(--s4);
  z-index: 102;
`

///////////////////////////////////////////////////////////////////////////////////

function Thumbnail({ image, openDialog, isDialogOpen }) {
  return (
    <Wrapper>
      <Image
        fluid={{ ...image.file.childImageSharp.fluid, aspectRatio: 16 / 9 }}
        alt={image.alt}
      />
      <PlayButton onClick={openDialog} aria-expanded={isDialogOpen}>
        Watch video
        <PlayIcon aria-hidden="true" />
      </PlayButton>
    </Wrapper>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  position: relative;
  margin-top: var(--s5);
`

///////////////////////////////////////////////////////////////////////////////////

const PlayButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  background-color: hsla(0, 0%, 0%, 0%);
  width: 100%;
  height: 100%;
  font-size: var(--f7);
  text-transform: uppercase;
  color: hsla(0, 100%, 100%, 0%);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsla(0, 0%, 0%, 80%);
    color: white;
  }
`

///////////////////////////////////////////////////////////////////////////////////

const PlayIcon = styled(PlaySVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  width: var(--s7);
  height: var(--s7);
  color: white;
  transition: opacity 0.3s ease-in-out;

  ${PlayButton}:hover & {
    opacity: 0;
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import { useTransition, animated } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import useMachine from '../../logic/examples/useMachine'
import { dialogMachine } from '../../logic/examples/dialog'
import { ReactComponent as PlaySVG } from '../../svg/play.svg'
import {
  aspectRatioParent,
  ratio16x9,
  aspectRatioChild,
} from '../../styles/mixins/examples/aspectRatios'

export default VideoThumbnailAndDialogExample
