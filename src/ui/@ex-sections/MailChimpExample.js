function MailChimpExample() {
  const [state, send] = useMachine(mailchimpMachine)

  function handleChange(e) {
    send({ type: `UPDATE_FIELD`, name: e.target.name, value: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    send(`SUBMIT`)
  }

  return (
    <Section>
      <h2>MailChimp</h2>
      <Code>mailchimp</Code>

      {state.value !== `success` && (
        <form onSubmit={handleSubmit}>
          <Email
            type="email"
            name="email"
            aria-label="Email address"
            onChange={handleChange}
            placeholder="Email address"
            title={`The portion of the email address after the @ is invalid.`}
            pattern={emailRegex}
            required
          />

          {state.value === `error` && (
            <AlertText>
              Something went wrong... Please confirm you've entered a valid email
              address and try again.
            </AlertText>
          )}

          <Submit type="submit">Sign Up</Submit>
        </form>
      )}

      {state.value === `success` && (
        <AlertText>Success! Thank you for subscribing.</AlertText>
      )}
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

const emailRegex = `.+@.+..+`

///////////////////////////////////////////////////////////////////////////////////

const Email = styled.input`
  display: block;
  margin-top: var(--s4);
  background: var(--light-pink);
  padding: var(--s2);
  color: var(--black);

  &::placeholder {
    color: var(--black);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const AlertText = styled.p`
  display: block;
  margin: var(--s4) 0;
  background: var(--light-pink);
  padding: var(--s2);
  line-height: 1.4;
`

///////////////////////////////////////////////////////////////////////////////////

const Submit = styled.button`
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import useMachine from '../../logic/examples/useMachine'
import { mailchimpMachine } from '../../logic/examples/mailchimp'

export default MailChimpExample
