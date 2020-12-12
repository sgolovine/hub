import { useStaticQuery, graphql } from "gatsby"

type Data = {
  bio: string
  email: string
  location: string
  name: string
  phone: string
  links: {
    key: string
    name: string
    href: string
  }[]
}

export const useData = (): Data => {
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
