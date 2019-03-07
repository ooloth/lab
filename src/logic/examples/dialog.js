// Basic state chart for user toggled dialogs

export const dialogMachine = Machine(
  {
    id: 'dialogMachine',
    initial: 'closed',
    states: {
      closed: {
        on: { OPEN: 'open' },
      },

      open: {
        onEntry: 'lockScrolling',
        on: { CLOSE: 'closing' },
      },

      closing: {
        on: { CLOSE_OVERLAY: 'closed' },
        onExit: 'unlockScrolling',
      },
    },
  },
  {
    actions: {
      lockScrolling: () => disableBodyScroll(),
      unlockScrolling: () => enableBodyScroll(),
    },
  }
)

///////////////////////////////////////////////////////////////////////////////////

import { Machine } from 'xstate'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
