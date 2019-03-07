const Contact = () => (
  <section className="">
    <h2 className="">Formik Example</h2>

    <ContactForm
      invitation={invitation}
      services={items}
      successMessage={successMessage}
    />
  </section>
)

const invitation = 'Sign up!'
const items = [`Item 1`, `Item 2`, `Item 3`]
const successMessage = 'Nice!'

/*
 *
 * Contact Form
 *
 */

//  TODO: finish extracting the boilerplate from this Formik form...?

// class NetlifyForm extends Component {
//   state = { sentSuccessfully: false }

//   submitFormToNetlify = async (formName, formValues) => {
//     let sendStatus

//     console.log(createURL({ 'form-name': formName, ...formValues }))

//     await fetch(`/`, {
//       method: `POST`,
//       headers: { 'Content-Type': `application/x-www-form-urlencoded` },
//       body: createURL({ 'form-name': formName, ...formValues })
//     })
//       .then(() => {
//         console.log('Form sent successfully!')
//         sendStatus = true
//       })
//       .catch(error => {
//         console.log(`🚧 Form submission error:`, error)
//         sendStatus = false
//       })

//     return sendStatus
//   }

//   // Create the URL encoding for the form submission
//   createURL = data =>
//     Object.keys(data)
//       .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
//       .join(`&`)

//   render() {
//     const { renderSuccess, renderForm } = this.props
//     const { sentSuccessfully } = this.state

//     return <>{sentSuccessfully ? renderSuccess() : renderForm()}</>
//   }
// }

// const ContactForm = ({invitation, successMessage}) => (
//   <NetlifyForm
//     renderSuccess={() => <Success />}
//     renderForm={() => ...}
//   ></NetlifyForm>
// )

// See repo: https://github.com/jaredpalmer/formik
// See docs: https://jaredpalmer.com/formik/docs/api/formik

// TODO: save the wrapper content from this form, and use a render prop to insert the Formik fields into it...
// TODO: if I do this, I can move the Netlify send functions into the class as methods...
class ContactForm extends Component {
  state = { sentSuccessfully: false }

  render() {
    // TODO: update props as needed
    const { invitation, services, successMessage } = this.props
    const { sentSuccessfully } = this.state

    return (
      <>
        {sentSuccessfully ? (
          <Success message={successMessage} />
        ) : (
          <>
            <p className="mb3 sm:pb2 md:pb3 measure lh-copy">{invitation}</p>

            <Formik
              // TODO: update based on actual fields
              initialValues={{
                Name: '',
                Email: '',
                Phone: '',
                Address: '',
                Services: []
              }}
              validationSchema={ValidationSchema}
              // validateOnChange={false}
              validateOnBlur={false}
              onSubmit={async values => {
                if (typeof window.fetch !== `undefined`) {
                  // TODO: update form name
                  const sentSuccessfully = await submitFormToNetlify(
                    'Contact',
                    values
                  )
                  this.setState({ sentSuccessfully })
                } else {
                  console.log(
                    `🚧 Fetch is not supported in this browser. Fix that first!`
                  )
                }
              }}
            >
              {({ values, errors, touched, isValidating, isSubmitting }) => (
                <Form name="Contact" netlify="true" netlify-honeypot="bot-field">
                  {/* Required by Netlify to track form name */}
                  {/* TODO: update value to match form name */}
                  <input type="hidden" name="form-name" value="Contact" />

                  {/* Honeypot */}
                  <input name="bot-field" hidden />

                  {/* Input copies to control input order in the submissions */}
                  {/* TODO: update based on actual fields */}
                  <input type="text" name="Name" hidden />
                  <input type="email" name="Email" hidden />
                  <input type="tel" name="Phone" hidden />
                  <textarea name="Address" hidden />
                  <input type="checkbox" name="Services" hidden />

                  {/* Checkboxes - using the FieldArray so I can validate at least one chosen */}
                  {/* See: https://codesandbox.io/s/o5pw1vx916 */}
                  <fieldset>
                    <legend className="sr-only">
                      Select the services you are looking for
                    </legend>

                    <div className="checkbox-grid">
                      <FieldArray
                        name="Services"
                        render={arrayHelpers => (
                          <>
                            {services.map(service => (
                              <div key={service} className="heading mt3">
                                <label
                                  key={service}
                                  htmlFor={service}
                                  className="custom-checkbox"
                                >
                                  <input
                                    name="Services"
                                    type="checkbox"
                                    value={service}
                                    id={service}
                                    checked={values.Services.includes(service)}
                                    onChange={e => {
                                      if (e.target.checked)
                                        arrayHelpers.push(service)
                                      else {
                                        const index = values.Services.indexOf(
                                          service
                                        )
                                        arrayHelpers.remove(index)
                                      }
                                    }}
                                  />
                                  {/* Styled "checkbox" */}
                                  <span className="checkmark" />

                                  {/* Visible text label */}
                                  <span className="checkbox-label">{service}</span>
                                </label>
                              </div>
                            ))}
                          </>
                        )}
                      />
                    </div>
                  </fieldset>
                  <ErrorMessage
                    name="Services"
                    component="p"
                    className="input-error"
                  />

                  <div className="input-grid">
                    <div>
                      <Field
                        type="text"
                        name="Name"
                        aria-label="Name"
                        placeholder="Name"
                        className="input mt4"
                      />
                      <ErrorMessage
                        name="Name"
                        component="p"
                        className="input-error"
                      />
                    </div>

                    <div>
                      <Field
                        type="email"
                        name="Email"
                        aria-label="Email"
                        placeholder="Email"
                        className="input mt3"
                      />
                      <ErrorMessage
                        name="Email"
                        component="p"
                        className="input-error"
                      />
                    </div>

                    <div>
                      <Field
                        type="tel"
                        name="Phone"
                        aria-label="Phone"
                        placeholder="Phone"
                        className="input mt3"
                      />
                      <ErrorMessage
                        name="Phone"
                        component="p"
                        className="input-error"
                      />
                    </div>

                    <div>
                      <Field
                        name="Address"
                        component="textarea"
                        aria-label="Address"
                        placeholder="Address"
                        className="input mt3"
                      />
                      <ErrorMessage
                        name="Address"
                        component="p"
                        className="input-error"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="link heading db mt4 sm:pt2 f4 yellow"
                  >
                    Submit
                  </button>

                  {/* TODO: hide this output before launching */}
                  <pre className="bg-near-white pa3">
                    values: {JSON.stringify(values, null, 2)}
                  </pre>
                  <pre className="bg-near-white pa3">
                    errors: {JSON.stringify(errors, null, 2)}
                  </pre>
                </Form>
              )}
            </Formik>
          </>
        )}
      </>
    )
  }
}

// Send the form
const submitFormToNetlify = async (formName, formValues) => {
  let submitted

  // NOTE: "no-cache" avoids sending to the service worker, which silently fails
  await fetch(`/?no-cache=1`, {
    method: `POST`,
    headers: { 'Content-Type': `application/x-www-form-urlencoded` },
    body: createURL({ 'form-name': formName, ...formValues })
  })
    .then(() => {
      submitted = true
    })
    .catch(error => {
      console.log(`🚧 Form submission error:`, error)
      submitted = false
    })

  return submitted
}

// Create the URL encoding for the form submission
const createURL = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`)
    .replace(/%2C/gi, '%2C%20') // add a space after any commas in array results

// See: https://github.com/jquense/yup
// TODO: too heavy on first load? defer until after load?
const ValidationSchema = Yup.object().shape({
  Name: Yup.string().required('Please enter your name'),
  Email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please include your email address'),
  Phone: Yup.string()
    .min(7, 'Please enter a valid phone number')
    .required('Please include your phone number'),
  Address: Yup.string()
    .min(10, 'Please enter your full address')
    .required('Please include your address'),
  Services: Yup.array()
    .of(Yup.string())
    .required('Please select at least one service')
})

/* 
 *
 * Success
 * 
 */

const Success = ({ message }) => <p className="measure lh-copy">{message}</p>

/*
 *
 * Imports & Exports
 * 
 */

// See: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default Contact
