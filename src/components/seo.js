import useSiteMetadata from '../hooks/use-site-metadata'

/**
 * Rendered from a page's exported `Head`, which replaced react-helmet in Gatsby 4.19.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Seo = ({ title, description, keywords, pathname, children }) => {
  const site = useSiteMetadata()

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  const metaDescription = description || site.description
  const url = site.siteUrl + (pathname || '')

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

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.author} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </>
  )
}

export default Seo
