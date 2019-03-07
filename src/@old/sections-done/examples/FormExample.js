const FormExample = () => (
  <section className="mv6 bg-light-green pa5 shadow-lg">
    <h2 className="mb4">Here's a form:</h2>

    <Form
      name="Example Contact"
      fieldOrder={[`name`, `email`]}
      renderFormFields={handleChange => <FormFields handleChange={handleChange} />}
      renderError={() => <Error />}
      renderSuccess={() => <Success />}
    />
  </section>
)

/* 
 *
 * Form Fields
 * 
 */

const FormFields = ({ handleChange }) => (
  <>
    <Input
      type="text"
      name="name"
      ariaLabel="Enter your full name"
      placeholder="Full Name:"
      handleChange={handleChange}
      className="input mb4"
    />

    <Input
      type="email"
      name="email"
      ariaLabel="Enter your email address"
      placeholder="Email:"
      handleChange={handleChange}
      className="input mb4"
    />

    <Textarea
      aria-label="Enter your message"
      minRows={5}
      name="message"
      placeholder="Message:"
      required
      onChange={handleChange}
      data-gramm_editor="false"
      className="input mb4"
      style={{ resize: `none` }}
    />

    <button type="submit" className="btn">
      Send message
    </button>
  </>
)

/* 
 *
 * Send Error
 * 
 */

// TODO: Extract common classes into a Tailwinds component class
const Error = () => (
  <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
    Success! Thanks for getting in touch. <br className="dn lg:di" />
    Aria will get back to you soon!
  </div>
)

/* 
 *
 * Success
 * 
 */

// TODO: Extract common classes into a Tailwinds component class
const Success = () => (
  <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
    Success! Thanks for getting in touch. We'll get back to you soon!
  </div>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Textarea from 'react-textarea-autosize'

import Form from '../../components/examples/old/Form'
import Input from '../../components/examples/Input'

export default FormExample
