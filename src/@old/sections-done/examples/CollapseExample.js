const CollapseExample = () => (
  <section className="mv6 bg-light-green pa5 shadow-lg">
    <h2 className="mb4">Read More / Collapse Examples</h2>

    <h3 className="mb2">Read More only:</h3>
    <VisibleParagraphs />
    <Collapse
      renderContent={() => <CollapsedParagraphs />}
      renderToggle={(expanded, handleToggle) =>
        !expanded && <ReadMore handleToggle={handleToggle} />
      }
    />

    <h3 className="mt5 mb2">Read More & Read Less:</h3>
    <VisibleParagraphs />
    <Collapse
      renderContent={() => <CollapsedParagraphs />}
      renderToggle={(expanded, handleToggle) => (
        <ReadMoreReadLess expanded={expanded} handleToggle={handleToggle} />
      )}
    />
  </section>
)

/*
 *
 * Visible Paragraphs
 * 
 */

const VisibleParagraphs = () => {
  return paragraphs.slice(0, 1).map((paragraph, i) => {
    return (
      <p
        key={i}
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="mt3 lh-copy"
      />
    )
  })
}

/*
 *
 * Collapsed Paragraphs
 * 
 */

const CollapsedParagraphs = () => {
  return paragraphs.slice(1).map((paragraph, index) => {
    return (
      <p
        key={`paragraph-${index + 1}`} // index restarts at 0 after slice
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="mt3 lh-copy"
      />
    )
  })
}

/*
 *
 * Paragraphs
 * 
 */

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget elit posuere, lacinia lacus nec, efficitur sapien. Morbi accumsan risus eget aliquet cursus. Proin in rutrum purus, quis finibus lacus. Aenean vitae lorem ut orci mollis scelerisque. Aliquam at pretium libero.`,
  `Curabitur auctor aliquam augue vitae auctor. Vivamus tincidunt tincidunt ex eget accumsan. Vestibulum interdum orci vel auctor dapibus. Aenean accumsan dui mauris, a vestibulum nulla volutpat a.`
]

const ReadMore = ({ handleToggle }) => (
  <button
    onClick={handleToggle}
    className="btn mt4"
    // TODO: If the context is .tl, use this to center the button:
    // className="relative left-50 transX--50"
  >
    Read More
  </button>
)

/*
 *
 * Read More / Read Less Toggle
 * 
 */

const ReadMoreReadLess = ({ expanded, handleToggle }) => (
  <button onClick={handleToggle} className="btn mt4">
    Read {expanded ? `Less` : `More`}
  </button>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Collapse from '../../components/examples/Collapse'

export default CollapseExample
