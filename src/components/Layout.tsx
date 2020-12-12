import React, { ReactNode } from "react"
import "~/styles/tailwind.css"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return <div>{children}</div>
}
