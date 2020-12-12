import React, { useState } from "react"
import { navigate } from "gatsby"
import { ArrowLeft } from "~/components/icons/arrowLeft"
import { handleNetlifyFormsRequest } from "~/services/handleNetlifyForm"

const ContactPage = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter your name")
      return
    }
    if (!email) {
      alert("Please enter your email")
      return
    }
    if (!message) {
      alert("Please enter a message")
      return
    }

    handleNetlifyFormsRequest(name, email, message)
      .then(() => {
        alert("message sent successfully")
        handleClear()
      })
      .catch(() => {
        alert("could not send message")
      })
  }

  const handleClear = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const handleGoBack = () => navigate("/")

  const renderForm = () => {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="flex flex-col">
          <label className="text-sm font-bold my-2">Your Name</label>
          <input
            required
            placeholder="John Doe"
            name="name"
            type="text"
            className="py-3 border rounded-md shadow-md px-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold my-2">Your Email</label>
          <input
            required
            placeholder="jdoe@gmail.com"
            name="email"
            type="email"
            className="py-3 border rounded-md shadow-md px-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold my-2">Message</label>
          <textarea
            placeholder="Hey Sunny!"
            rows={10}
            name="message"
            className="p-2 border rounded-md shadow-md resize-none"
          />
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="p-4 my-2 bg-green-400 shadow-md rounded-md"
          >
            <p className="text-gray-800 font-bold">Send Message</p>
          </button>
          <button
            onClick={handleClear}
            className="p-4 my-2 bg-red-400 shadow-md rounded-md"
          >
            <p className="text-gray-800 font-bold">Clear</p>
          </button>
        </div>
      </form>
    )
  }

  return (
    <div>
      <div className="flex flex-row">
        <button onClick={handleGoBack} className="pr-4">
          <ArrowLeft />
        </button>
        <h1 className="text-lg font-bold">Send me a message</h1>
      </div>
      <div className="flex flex-col">{renderForm()}</div>
    </div>
  )
}

export default ContactPage
