// See: https://reactjs.org/docs/error-boundaries.html
// See: https://codepen.io/gaearon/pen/wqvxGa?editors=0010

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { children } = this.props
    const { error, errorInfo } = this.state

    // If there's a problem,replace the children with the error
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: `pre-wrap` }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }

    // Normally, just render children
    return children
  }
}

import React, { Component } from 'react'

export default ErrorBoundary
