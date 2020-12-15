import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const Avatar = () => {
  const avatarQuery = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/profile-face.png/" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="avatar">
      <Img fluid={avatarQuery.file.childImageSharp.fluid} />
    </div>
  )
}
