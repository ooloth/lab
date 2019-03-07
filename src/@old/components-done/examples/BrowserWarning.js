// NOTE: using this is a last resort if IE errors can't be resolved
// See KVP's Base.js for how to show it in IE only

const BrowserWarning = ({ title }) => (
  <main className="fade-in flex items-center container vh-100 pv6 sans-serif">
    <div style={{ maxWidth: `28rem`, letterSpacing: `-0.025rem` }}>
      <h2 className="f3 sm:f2 fw9">
        <span className="db pb4 f1 sm:f-4">Apologies.</span>
        This browser is outdated and no longer supported.
      </h2>

      <p className="pt4 measure lh-copy sm:f4">
        Please visit {title} in a modern browser like
        {browsers.map((browser, i) => (
          <Fragment key={i}>
            {i < browsers.length - 1 ? ` ` : ` or `}

            <Link
              key={i}
              href={browser.href}
              className="blue underline animate hover:black"
            >
              {browser.text}
            </Link>

            {i < browsers.length - 2 ? `,` : i === browsers.length - 1 ? `.` : null}
          </Fragment>
        ))}
      </p>
    </div>

    {/* Hidden copy of Contact form (needed by Netlify's bots on first render) */}
    {/* <FormCopy /> */}
  </main>
)

/*
 *
 * Browser List
 *
 */

const browsers = [
  { href: 'https://www.google.com/chrome', text: 'Chrome' },
  { href: 'https://www.mozilla.org/en-GB/firefox/new', text: 'Firefox' },
  { href: 'https://support.apple.com/downloads/safari', text: 'Safari' },
  { href: 'https://www.microsoft.com/en-gb/windows/microsoft-edge', text: 'Edge' },
  { href: 'https://www.opera.com/download', text: 'Opera' }
]

/*
 *
 * Form Copy
 *
 */

// TODO: If using, update form name and form fields
// const FormCopy = () => (
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
// )

/*
 *
 * Imports & Exports
 *
 */

import React, { Fragment } from 'react'

import Link from './Link'

export default BrowserWarning
