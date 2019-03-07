function useLocalStorage(key, initialValue) {
  // The initialValue arg is only used if there is nothing in localStorage; otherwise, we use the value in localStorage so state persist through a page refresh.
  // We pass a function to useState so localStorage lookup only happens once.
  // We wrap in try/catch in case localStorage is unavailable
  const [item, setInnerValue] = useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue
    } catch (error) {
      // Return default value if JSON parsing fails
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that persists the new value to localStorage.
  const setValue = value => {
    setInnerValue(value)
    window.localStorage.setItem(key, JSON.stringify(item))
  }

  // Alternatively we could update localStorage inside useEffect, but this would run every render and it really only needs to happen when the returned setValue function is called.
  /*
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(item));
  });
  */

  return [item, setValue]
}

///////////////////////////////////////////////////////////////////////////////////

import { useState } from 'React'

export default useLocalStorage

/*
 *
 * Usage
 *
 */

/*

Sync state to local storage so that it persists through a page refresh. Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.

See: https://gist.github.com/gragland/2970ae543df237a07be1dbbf810f23fe

function App() {
  // Similar to useState, but we pass in a key to value in local storage
  const [name, setName] = useLocalStorage('name', 'Bob')

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

*/
