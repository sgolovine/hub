import React from "react"
import { navigate } from "gatsby"
import { Avatar } from "~/components/Avatar"
import { LocationIcon } from "~/components/icons/location"
import { useData } from "~/hooks/useData"
import { LinkButton } from "~/components/LinkButton"
import { useVCard } from "~/hooks/useVCard"
import { isMobile } from "react-device-detect"

const HomePage = () => {
  const data = useData()
  const vcard = useVCard()

  const handleAddToContacts = () => {
    navigate(vcard)
  }

  const handleContact = () => {
    navigate("/contact")
  }

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
        {isMobile && (
          <button
            onClick={handleAddToContacts}
            className="p-4 my-2 bg-red-400 shadow-md rounded-md"
          >
            <p className="text-gray-800 font-bold">Add to Contacts</p>
          </button>
        )}
        <button
          onClick={handleContact}
          className="p-4 my-2 bg-green-400 shadow-md rounded-md"
        >
          <p className="text-gray-800 font-bold">Send Message</p>
        </button>
      </div>
      <hr className="py-2" />
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
