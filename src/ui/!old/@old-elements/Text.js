// TODO: add props for styling variants (e.g. 'align')
// TODO: share common text styles with heading (separate the unique styles)

export const textStyles = css`
  /* Set custom properties */
  --largeText: var(--f4);
  --normalText: var(--f3);
  --smallText: var(--f2);

  /* Use custom properties */
  ${boxStyles}
  text-align: ${p => {
    if (p.tl) return `left`
    if (p.tc) return `center`
    if (p.tr) return `right`
    else return `inherit`
  }};
  line-height: var(--lh2);
  ${p => p.ls && `letter-spacing: var(--ls${p.ls};`}
  font-size: ${p => {
    if (p.large) return `var(--largeText)`
    if (p.normal) return `var(--normalText)`
    if (p.small) return `var(--smallText)`
    else return `inherit`
  }};
  ${p => p.fw && `font-weight: ${p.fw}00;`}
`

const Text = styled.p`
  ${textStyles}
`

///////////////////////////////////////////////////////////////////////////////////

import styled, { css } from 'styled-components'
import { boxStyles } from './Box'

export default Text
