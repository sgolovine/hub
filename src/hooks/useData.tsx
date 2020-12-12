import { useStaticQuery, graphql } from "gatsby"

export const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        bio
        email
        location
        name
        phone
        links {
          href
          name
        }
      }
    }
  `)
  return data.dataJson
}
