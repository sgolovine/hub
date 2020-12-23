import { useStaticQuery, graphql } from "gatsby"
import { Icons } from "~/components/LinkButton"

type Data = {
  bio: string
  email: string
  location: {
    label: string
    link: string
  }
  name: string
  phone: string
  links: {
    key: Icons
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
        location {
          label
          link
        }
        name
        phone
        links {
          href
          name
          key
        }
      }
    }
  `)
  return data.dataJson
}
