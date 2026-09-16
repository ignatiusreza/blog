import useSiteMetadata from '../hooks/use-site-metadata'

/**
 * Rendered from a page's exported `Head`, which replaced react-helmet in Gatsby 4.19.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// Cards are 1200x630, the size every major crawler expects. Articles can point
// at their own via frontmatter; everything else falls back to the site card.
const DEFAULT_IMAGE = '/og/default.png'

const Seo = ({ title, description, keywords, image, pathname, children }) => {
  const site = useSiteMetadata()

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  const metaDescription = description || site.description
  const url = site.siteUrl + (pathname || '')
  const imageUrl = site.siteUrl + (image || DEFAULT_IMAGE)

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.author} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {children}
    </>
  )
}

export default Seo
