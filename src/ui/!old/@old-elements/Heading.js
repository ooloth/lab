const Heading = styled.h2`
  /* Set custom properties */
  --largeHeading: var(--f7);
  --normalHeading: var(--f6);
  --smallHeading: var(--f5);

  ${media.md`
    --largeHeading: var(--f8);
    --normalHeading: var(--f7);
    --smallHeading: var(--f6);
  `}

  /* Use custom properties */
  ${boxStyles}
  text-align: ${p => {
    if (p.tl) return `left`
    if (p.tc) return `center`
    if (p.tr) return `right`
    else return `inherit`
  }};
  line-height: var(--lh1);
  ${p => p.ls && `letter-spacing: var(--ls${p.ls};`}
  font-family: var(--headingFont);
  font-size: ${p => {
    if (p.large) return `var(--largeHeading)`
    if (p.small) return `var(--smallHeading)`
    else return `var(--normalHeading)`
  }};
  ${p => p.fw && `font-weight: ${p.fw}00;`}
`

///////////////////////////////////////////////////////////////////////////////////

import styled from 'styled-components'

import { boxStyles } from './Box'
import { media } from '../../styles'

export default Heading
