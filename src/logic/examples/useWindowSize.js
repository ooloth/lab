function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    if (!isClient) {
      return false
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

///////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react'

export default useWindowSize

///////////////////////////////////////////////////////////////////////////////////

/*

A really common need is to get the current size of the browser window. This hook returns an object containing the window's width and height. If executed server-side (no window object) the value of width and height will be undefined.

See: https://gist.github.com/gragland/4e3d9b1c934a18dc76f585350f97e321

function App() {
  const size = useWindowSize()

  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  )
}

*/
