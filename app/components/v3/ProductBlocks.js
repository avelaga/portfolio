// Blocks for software pages, which explain a product rather than show a series:
// the problem it solves (a side-by-side comparison), how it works (numbered
// steps) and what it includes (a feature grid). They take a product page's
// structure but keep the site's look and voice: plain claims and real numbers,
// dotted rules and square cells, numbers in the label font where a product site
// would use icons (see V3-ethos.md). Lines only ever start a section; the items
// inside one are grouped by flat panels, so the eye can tell the two levels apart.

// The problem, as two panels side by side: the usual way (dim) and this project
// (bright, outlined). Each panel is a list of label/answer pairs; on wide screens
// the rows line up across both panels (CSS subgrid), on phones they stack
export function Compare({ them, us, rows }) {
  const panel = (heading, key, className) => (
    <div className={`v3-compare-panel ${className}`} style={{ '--rows': rows.length + 1 }}>
      <h3 className="v3-compare-heading">{heading}</h3>
      {rows.map((row) => (
        <dl key={row.label} className="v3-compare-row">
          <dt>{row.label}</dt>
          <dd>{row[key]}</dd>
        </dl>
      ))}
    </div>
  );
  return (
    <div className="v3-compare" style={{ '--rows': rows.length + 1 }}>
      {panel(them, 'them', 'v3-compare-panel--them')}
      {panel(us, 'us', 'v3-compare-panel--us')}
    </div>
  );
}

export function Steps({ steps }) {
  return (
    <ol className="v3-steps">
      {steps.map(({ title, text }, i) => (
        <li key={title} className="v3-step">
          <span className="v3-step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="v3-step-title">{title}</h3>
          <p className="v3-step-text">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Features({ features }) {
  return (
    <ul className="v3-features">
      {features.map(({ title, text }) => (
        <li key={title} className="v3-feature">
          <h3 className="v3-feature-title">{title}</h3>
          <p className="v3-feature-text">{text}</p>
        </li>
      ))}
    </ul>
  );
}
