function BrowserWarning({ title }) {
  return (
    <>
      <Wrapper>
        <div>
          <h1>
            <LargeText>Apologies.</LargeText>
            <SmallerText>This browser is no longer&nbsp;supported.</SmallerText>
          </h1>

          <Text>
            Please visit {title} in a modern browser like{` `}
            {browsers.map((browser, i) => (
              <Fragment key={i}>
                <Link href={browser.href}>{browser.text}</Link>

                {i < browsers.length - 2
                  ? `, `
                  : i === browsers.length - 2
                  ? ` or `
                  : `.`}
              </Fragment>
            ))}
          </Text>
        </div>
      </Wrapper>

      {/* TODO: if necessary (how to check?), activate hidden copy of Contact form (needed by Netlify's bots on first render) */}
      {/* <FormCopy /> */}
    </>
  )
}

BrowserWarning.propTypes = {
  title: PropTypes.string.isRequired,
}

///////////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6%;
  height: 100vh;
  text-align: center;
  letter-spacing: -0.025rem;
`

///////////////////////////////////////////////////////////////////////////////////

const LargeText = styled.span`
  font-size: var(--f10);
  font-weight: 900;
  white-space: nowrap;

  ${media.sm`
    font-size: var(--f11);
  `}
`

///////////////////////////////////////////////////////////////////////////////////

const SmallerText = styled.span`
  display: block;
  padding-top: var(--s7);
  font-size: var(--f7);
  font-weight: 800;

  ${media.sm`
    font-size: var(--f8);
  `}
`

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  ${copy}
  margin: 0 auto;
  padding-top: var(--s7);
  max-width: 24rem;
  font-size: var(--f4);

  ${media.sm`
    font-size: var(--f5);
  `}
`

///////////////////////////////////////////////////////////////////////////////////

const browsers = [
  { href: 'https://www.google.com/chrome', text: 'Chrome' },
  { href: 'https://www.mozilla.org/en-GB/firefox/new', text: 'Firefox' },
  { href: 'https://support.apple.com/downloads/safari', text: 'Safari' },
  { href: 'https://www.microsoft.com/en-gb/windows/microsoft-edge', text: 'Edge' },
  { href: 'https://www.opera.com/download', text: 'Opera' },
]

///////////////////////////////////////////////////////////////////////////////////

// TODO: If using a Netlify form, update form name and form fields below

// const FormCopy = () => (
//  <aside>
//   <form
//     name="Contact"
//     data-netlify="true"
//     data-netlify-honeypot="bot-field"
//     className="dn"
//   >
//     {/* Form name */}
//     <input type="hidden" name="form-name" value="Contact" />

//     {/* Honeypot */}
//     <input name="bot-field" />

//     {/* Input copies to control input order in the submissions */}
//     <input type="text" name="Name" />
//     <input type="email" name="Email" />
//     <input type="tel" name="Phone" />
//     <textarea name="Address" />
//     <input type="checkbox" name="Services" />
//   </form>
//  </aside>
// )

///////////////////////////////////////////////////////////////////////////////////

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from './elements'
import { copy, media } from '../styles'

export default BrowserWarning
