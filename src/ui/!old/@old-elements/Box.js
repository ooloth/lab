// TODO: add propTypes to validate the type of each prop (e.g. a number for padding)

export const boxStyles = css`
  ${p => p.ga && `grid-area: ${p.ga};`}

  ${p => p.container && container}

  ${p => p.position && `position: ${p.position}`}
  ${p => p.top && `top: ${p.top}`}
  ${p => p.right && `right: ${p.right}`}
  ${p => p.left && `left: ${p.left}`}
  ${p => p.bottom && `bottom: ${p.bottom}`}

  /* TODO: remove these now to avoid ever using them? */
  /* For prototyping only (TODO: refactor patterns into separate Box instances with their own local custom properties, e.g. --sectionPadding) */
  ${p => p.shadow && `box-shadow: var(--shadow5);`}

  ${p => p.m && `margin: var(--s${p.m});`}
  ${p => p.mv && `padding-top: var(--s${p.mv}); padding-bottom: var(--s${p.mv});`}
  ${p => p.mh && `padding-left: var(--s${p.mh}); padding-right: var(--s${p.mh});`}
  ${p => p.mt && `padding-top: var(--s${p.mt});`}
  ${p => p.mr && `padding-right: var(--s${p.mr});`}
  ${p => p.mb && `padding-bottom: var(--s${p.mb});`}
  ${p => p.ml && `padding-left: var(--s${p.ml});`}

  ${p => p.ba && `border-style: solid;`}
  ${p => p.bv && `border-top-style: solid; border-bottom-style: solid;`}
  ${p => p.bh && `border-left-style: solid; border-right-style: solid;`}
  ${p => p.bt && `border-top-style: solid;`}
  ${p => p.br && `border-right-style: solid;`}
  ${p => p.bb && `border-bottom-style: solid;`}
  ${p => p.bl && `border-left-style: solid;`}
  ${p => p.bw && `border-width: var(--bw${p.bw});`}
  ${p => p.br && `border-radius: var(--br${p.bw});`}
  ${p => p.bc && `border-color: var(--${p.bc});`}

  ${p => p.bg && `background-color: var(--${p.bg});`}

  ${p => p.p && `padding: var(--s${p.p});`}
  ${p => p.pv && `padding-top: var(--s${p.pv}); padding-bottom: var(--s${p.pv});`}
  ${p => p.ph && `padding-left: var(--s${p.ph}); padding-right: var(--s${p.ph});`}
  ${p => p.pt && `padding-top: var(--s${p.pt});`}
  ${p => p.pr && `padding-right: var(--s${p.pr});`}
  ${p => p.pb && `padding-bottom: var(--s${p.pb});`}
  ${p => p.pl && `padding-left: var(--s${p.pl});`}

  ${p => {
    if (p.w) {
      if (typeof p.w === `number`) return `width: var(--s${p.w});`
      if (typeof p.w === `string`) return `width: ${p.w};`
    }
    if (p.maxWidth) {
      if (typeof p.maxWidth === `number`) return `max-width: var(--s${p.maxWidth});`
      if (typeof p.maxWidth === `string`) return `max-width: ${p.maxWidth};`
    }
    if (p.minWidth) {
      if (typeof p.minWidth === `number`) return `max-width: var(--s${p.minWidth});`
      if (typeof p.minWidth === `string`) return `max-width: ${p.minWidth};`
    }
  }}

  ${p => {
    if (p.h) {
      if (typeof p.h === `number`) return `height: var(--s${p.h});`
      if (typeof p.h === `string`) return `height: ${p.h};`
    }
    if (p.maxHeight) {
      if (typeof p.maxHeight === `number`)
        return `max-height: var(--s${p.maxHeight});`
      if (typeof p.maxHeight === `string`) return `max-height: ${p.maxHeight};`
    }
    if (p.minHeight) {
      if (typeof p.minHeight === `number`)
        return `max-height: var(--s${p.minHeight});`
      if (typeof p.minHeight === `string`) return `max-height: ${p.minHeight};`
    }
  }}

  ${p => p.measure && `max-width: var(--measure${p.measure}`}

  ${p => p.color && `color: var(--${p.color});`}
  ${p => p.o && `opacity: ${p.o};`}
`

///////////////////////////////////////////////////////////////////////////////////

export const Box = styled.div`
  ${boxStyles}
`

export const Article = styled.article`
  ${boxStyles}
`

export const Aside = styled.aside`
  ${boxStyles}
`

export const Footer = styled.footer`
  ${boxStyles}
`

export const Header = styled.header`
  ${boxStyles}
`

export const Item = styled.li`
  ${boxStyles}
`

export const List = styled.ul`
  ${boxStyles}
`

export const Main = styled.main`
  ${boxStyles}
`

export const Nav = styled.nav`
  ${boxStyles}
`

export const Section = styled.section`
  ${boxStyles}
`

///////////////////////////////////////////////////////////////////////////////////

import styled, { css } from 'styled-components'

import { container } from '../../styles'
