/*
 *
 * Usage:
 * 
 *   <MailChimpForm url="..." />
 * 
 * Props:
 * 
 *   "url" = valid MailChimp subscription list URL (required)
 *   "email" = boolean (optional, default = true)
 *   "firstName" = boolean (optional, default = false)
 *   "lastName" = boolean (optional, default = false)
 *   "className" = string (optional, goes to form element)
 *   "style" = object (optional, goes to form element)
 * 
 */

// Adapted from react-mailchimp-subscribe (relies on JSONP to avoid MailChimp API, which requires a server, and the MailChimp embeddable form, which leads to a new page on submit)
// See: https://github.com/revolunet/react-mailchimp-subscribe

class MailChimpForm extends React.Component {
  // Make sure this.props.url is a valid Mailchimp subscription URL
  static propTypes = {
    url: (props, propName, componentName) => {
      const mailchimpPattern = /list-manage.com/
      if (!mailchimpPattern.test(props[propName])) {
        return new Error(
          `Invalid prop '${propName}' supplied to '${componentName}'. Please supply a valid Mailchimp URL.`
        )
      }
    }
  }

  static defaultProps = {
    url: `https://boom-creative.us11.list-manage.com/subscribe/post?u=52cfc5036da97b4b83d4b21ed&amp;id=2899d498ce`,
    email: true,
    firstName: false,
    lastName: false,
    className: null,
    style: null
  }

  state = { isValid: false, status: null }

  validateEmail = e => {
    // 1. Validate the email each time the input changes
    const emailValidationPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/

    // 2. When the email is valid, set isValid to true
    this.setState({ isValid: emailValidationPattern.test(e.target.value) })
  }

  handleSubmit = e => {
    // 1. Prevent the default submit behaviour
    e.preventDefault()

    // 2. Abort submission if email in invalid (should pass, but good to check)
    if (!this.state.isValid) {
      this.setState({ status: `error` })
      return
    }

    // 3. Construct the ajax URL

    // 3a. Add email (always)
    const mailchimpList = this.props.url.replace(`/post?`, `/post-json?`)
    const userEmail = encodeURIComponent(e.target.elements.email.value)
    let ajaxURL = `${mailchimpList}&EMAIL=${userEmail}`

    // 3b. Add first name?
    if (e.target.elements.firstName) {
      const userFirstName = encodeURIComponent(e.target.elements.firstName.value)
      ajaxURL += `&FNAME=${userFirstName}`
    }

    // 3c. Add last name?
    if (e.target.elements.lastName) {
      const userLastName = encodeURIComponent(e.target.elements.lastName.value)
      ajaxURL += `&LNAME=${userLastName}`
    }

    // console.log(`ajaxURL`, ajaxURL)

    // 4. Submit the email to MailChimp and update the delivery status
    jsonp(ajaxURL, { param: `c` }, (err, data) => {
      if (err) {
        // console.log(data.err)
        this.setState({ status: `error` })
      } else if (data.result !== `success`) {
        // console.log(`data.result`, data.result)
        // console.log(data.msg)
        this.setState({ status: `error` })
      } else {
        // console.log(data.msg)
        this.setState({ status: `success` })
      }
    })
  }

  render() {
    const { isValid, status } = this.state
    const {
      email,
      firstName,
      lastName,
      formClasses,
      formStyle,
      labelClasses,
      inputClasses
    } = this.props

    return (
      <>
        {/* Show the form until it has been submitted successfully */}
        {status !== `success` && (
          <form
            onSubmit={this.handleSubmit}
            noValidate={true}
            className={formClasses}
            style={formStyle}
          >
            {firstName && (
              <label htmlFor="firstName" className={labelClasses}>
                <span className="sr-only">First name</span>
                <input
                  id="firstName"
                  onChange={this.validateName}
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className={inputClasses}
                  style={{ paddingTop: `.65rem` }}
                />
              </label>
            )}

            {lastName && (
              <label htmlFor="lastName" className={labelClasses}>
                <span className="sr-only">Last name</span>
                <input
                  id="lastName"
                  onChange={this.validateName}
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className={inputClasses}
                  style={{ paddingTop: `.65rem` }}
                />
              </label>
            )}

            {email && (
              <label htmlFor="email" className={labelClasses}>
                <span className="sr-only">Email</span>
                <input
                  id="email"
                  onChange={this.validateEmail}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={inputClasses}
                  style={{ paddingTop: `.65rem` }}
                />
              </label>
            )}

            {/* Submit button (disable until email is valid) */}
            <button
              type="submit"
              disabled={isValid ? null : true}
              className={`dib br3 bg-hot-pink pv2 ph3 ttu white animate ${
                isValid
                  ? `hover:bg-white hover:hot-pink cursor-pointer`
                  : `o-50 cursor-not-allowed`
              }`}
              style={{ paddingTop: `.6rem`, paddingBottom: `.4rem` }}
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Success message */}
        {status === `success` && (
          <p className="ml-auto mr-auto mt4 br3 bg-purple pa2 measure-narrow tc white">
            Thanks for subscribing! We'll be in touch soon.
          </p>
        )}

        {/* Error message */}
        {status === `error` && (
          <p className="ml-auto mr-auto mt4 br3 bg-hot-pink pa2 measure-narrow tc white">
            Oops, please make sure you've entered a valid email address (which isn't
            already subscribed).
          </p>
        )}
      </>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import jsonp from 'jsonp'

export default MailChimpForm
