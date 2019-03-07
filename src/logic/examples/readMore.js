/*

A variation of expandMachine for "read more" sections that:

1. Auto-expand on large screens, and 
2. Never return to the collapsed state after reaching the expanded state

*/

export const readMoreMachine = Machine({
  id: 'readMoreMachine',
  initial: 'collapsed',
  states: {
    collapsed: {
      on: { EXPAND: 'expanded' },
    },

    expanded: {},
  },
})

///////////////////////////////////////////////////////////////////////////////////

export function useExpandOnLargeScreens(send) {
  const mdScreen = useMediaQuery(`(min-width: 48em)`)

  function expandIfScreenIsLarge() {
    if (mdScreen) {
      send('EXPAND')
    }
  }

  useEffect(() => expandIfScreenIsLarge(), [mdScreen])
}

///////////////////////////////////////////////////////////////////////////////////

import { useEffect } from 'react'
import { Machine } from 'xstate'

import useMediaQuery from './useMediaQuery'
