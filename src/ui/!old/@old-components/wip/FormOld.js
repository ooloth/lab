// Create the URL encoding for the form submission
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`)
}

class FormNetlify extends React.Component {
  state = {
    notSent: true,
    sentSuccessfully: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    // Check fetch support before submitting (polyfill loads in gatsby-browser if needed)
    if (typeof window.fetch !== `undefined` || loadjs.ready(`fetch`)) {
      this.submitForm()
    }
  }

  submitForm = () => {
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({ 'form-name': `Basic`, ...this.state })
    })
      .then(response => {
        console.log(`success: ${response}`)
        this.setState({ notSent: false, sentSuccessfully: true })
      })
      .catch(error => console.log(`error: ${error}`))
  }

  render() {
    return (
      <div>
        {/* Show the form until it has been submitted successfully */}
        {this.state.notSent && (
          <form
            name="Basic"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="Basic" className="dn" />

            {/* TODO: extract the inputs below into an Input component I can just pass props to (worth it?)...? */}

            <div className="contact-form-grid">
              <div className="span-2">
                <input
                  aria-label="Enter your full name"
                  type="text"
                  name="name"
                  placeholder="Full Name:"
                  required
                  onChange={this.handleChange}
                  className="input mb4"
                />

                {/* Includes validation for the domain portion of the email address */}
                <input
                  aria-label="Enter your email address"
                  type="email"
                  name="email"
                  placeholder="Email:"
                  required
                  title="The domain portion of the email address is invalid (the portion after the @)."
                  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                  onChange={this.handleChange}
                  className="input mb4"
                />
              </div>

              <Textarea
                aria-label="Enter your message"
                minRows={5}
                name="message"
                placeholder="Message:"
                required
                onChange={this.handleChange}
                className="input span-3 mb4"
                style={{ resize: `none` }}
              />
            </div>

            <button type="submit" className="group relative bg-near-white">
              <span
                className="flex-auto flex justify-center items-center pl3 courier f5 near-black"
                style={{ paddingRight: `6.5rem`, height: `60px` }}
              >
                Send message
              </span>
            </button>
          </form>
        )}

        {/* Hide form and show success message after form has submitted successfully */}
        {this.state.sentSuccessfully && (
          <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
            Success! Thanks for getting in touch. <br className="dn lg:di" />Aria
            will get back to you soon!
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

// NOTE: code adapted from this: https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js

import React from 'react'
import loadjs from 'loadjs'
import Textarea from 'react-textarea-autosize'

export default FormNetlify
