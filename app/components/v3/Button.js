import Link from 'next/link';

// One button for every V3 call to action. Renders a Next link for internal
// hrefs, a plain anchor for external ones, and a <button> when there's no href.
export default function Button({ href, external, variant = 'secondary', size, className = '', children, ...rest }) {
  const classes = [
    'v3-button',
    `v3-button--${variant}`,
    size && `v3-button--${size}`,
    className,
  ].filter(Boolean).join(' ');

  if (href && external) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  if (href) {
    return <Link href={href} className={classes} {...rest}>{children}</Link>;
  }
  return <button type="button" className={classes} {...rest}>{children}</button>;
}
