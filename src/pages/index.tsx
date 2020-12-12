import React from "react"
import { useData } from "~/hooks/useData"

const HomePage = () => {
  const data = useData()
  console.log(data)
  return <h1>Hello world</h1>
}

export default HomePage
