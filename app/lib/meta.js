// One place for page metadata: titles, descriptions and the link previews shown
// when a page is texted or shared. Preview images are 1200×630 JPGs in public/og/
// (JPG rather than WebP, which some apps won't render in a preview).

export const SITE_URL = 'https://abhi.work';
const SITE_NAME = 'Abhi Velaga';

export function pageMeta({ title, description, image, imageSize = [1200, 630], path = '' }) {
  const fullTitle = title ? `${SITE_NAME} - ${title}` : `${SITE_NAME} - A creative who builds`;
  const images = image ? [{ url: image, width: imageSize[0], height: imageSize[1] }] : undefined;
  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: 'website',
      images,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: images?.map((i) => i.url) },
  };
}
