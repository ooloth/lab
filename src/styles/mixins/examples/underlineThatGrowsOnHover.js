// From Steve Haid's links and buttons

export const underlineThatGrowsOnHover = css`
  position: relative;
  z-index: 0;
  line-height: var(--lh2);

  /* Reset default element styles */
  border: none;
  background: transparent;
  text-decoration: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    z-index: -1;
    background-color: var(--red);
    width: 2.25rem;
    height: 0.25em;
    transform-origin: bottom;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      height: 0.75em;
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import { css } from 'styled-components'
