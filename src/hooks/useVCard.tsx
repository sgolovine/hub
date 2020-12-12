import { graphql, useStaticQuery } from "gatsby"

export const useVCard = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/contact_card.vcf/" }) {
        publicURL
      }
    }
  `)

  return data.file.publicURL
}
