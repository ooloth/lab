function StyledSystemExample({ data }) {
  return (
    <section className="container mv6 bg-light-yellow pa5 shadow-lg">
      <h2 className="mb2">Styled System Example</h2>
      <ThemeProvider theme={theme}>
        <>
          <StyledComponentsTest>Styled Components Test</StyledComponentsTest>
          <StyledSystemTest
            bg="blue"
            py={3}
            color="white"
            width={[`10%`, 4 / 5]}
            fontFamily="sans-serif"
            fontSize={5}
          >
            Styled System Test
          </StyledSystemTest>
        </>
      </ThemeProvider>
      <SystemComponentsTest width={1 / 2}>
        System Components Test
      </SystemComponentsTest>
    </section>
  )
}

const theme = {
  colors: {
    white: `pink`
  }
}

// See: https://www.styled-components.com
const StyledComponentsTest = styled.div`
  height: 5rem;
  width: 50%;
  background: ${theme.colors.white};
`

// See: https://jxnblk.com/styled-system/
const StyledSystemTest = styled.div`
  ${color} ${fontSize} ${space} ${width}

  @supports (display: grid) {
    color: white
  }

`

// See: https://github.com/rebassjs/components (replaces system-components?)
// See: https://github.com/jxnblk/styled-system/tree/master/system-components
// See: https://varun.ca/styled-system/
const SystemComponentsTest = system(
  {
    is: 'h4',
    m: 0,
    bg: 'red',
    fontSize: 6
  },
  'width'
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import system from 'system-components'

export default StyledSystemExample
