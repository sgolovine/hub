import React from "react"
import { Avatar } from "~/components/Avatar"
import { LocationIcon } from "~/components/icons/location"
import { useData } from "~/hooks/useData"
import { LinkButton } from "~/components/LinkButton"

const HomePage = () => {
  const data = useData()
  console.log(data)
  return (
    <div>
      <Avatar />
      <div className="flex flex-col items-center py-4">
        <h1 className="text-lg font-semibold">{data.name}</h1>
        <div className="flex flex-row items-center py-2">
          <LocationIcon fillColor="#444" />
          <p className="text-sm font-light text-gray-600">{data.location}</p>
        </div>
        <div className="my-2">
          <p className="text-sm">{data.bio}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="p-4 my-2 bg-red-400 shadow-md rounded-md">
          Add to Contacts
        </button>
      </div>
      <hr />
      <div className="flex flex-col">
        {data.links.map(link => {
          return (
            <LinkButton
              name={link.name}
              href={link.href}
              key={link.key}
              itemKey={link.key}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
