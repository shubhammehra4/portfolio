import { graphql, useStaticQuery } from "gatsby"

export const useProjectImages = () => {
  return useStaticQuery(
    graphql`
      query ProjectsQuery {
        YELPLOGO: file(relativePath: { eq: "yelpcamp.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 40
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        YELPINDEX: file(relativePath: { eq: "yelpcamp-index.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 768
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        YELPLANDING: file(relativePath: { eq: "yelpcamp-landing.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              height: 500
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        SMARTLOGO: file(relativePath: { eq: "smart.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 40
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        SMARTINDEX: file(relativePath: { eq: "smart-index.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 768
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }

        SMARTLANDING: file(relativePath: { eq: "smart-landing.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 768
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
}
