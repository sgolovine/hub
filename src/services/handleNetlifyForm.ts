// Handle Netlify Forms Request for Contact Form
export function handleNetlifyFormsRequest(
  name: string,
  email: string,
  message: string
) {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = { "Content-Type": "application/x-www-form-urlencoded" }

      let body = new URLSearchParams()

      body.set("name", name)
      body.set("email", email)
      body.set("message", message)

      const resp = await fetch("/", {
        method: "POST",
        headers,
        body,
      })
      resolve(resp)
    } catch (err) {
      reject(err)
    }
  })
}
