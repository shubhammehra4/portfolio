import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  description?: string
  lang?: string
  meta?: Array<any>
  title: string
}

const Seo: React.FC<SeoProps> = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
