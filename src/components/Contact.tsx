import { m } from "framer-motion"
import React, { useRef, useState } from "react"
import Seo from "./Seo"

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const input = useRef<{
    name?: HTMLInputElement
    email?: HTMLInputElement
    feedback?: HTMLTextAreaElement
  }>({})

  const [errors, setErrors] = useState<{
    name?: boolean
    email?: boolean
    feedback?: boolean
  }>({})
  const [sending, setSending] = useState(false)

  function handleValidate(name: string, email: string, feedback: string) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )

    if (name.length < 2) {
      setErrors({ name: true })
      input.current.name.focus()
      return true
    } else if (email.length === 0 || !pattern.test(email)) {
      setErrors({ email: true })
      input.current.email.focus()
      return true
    } else if (feedback.length === 0) {
      setErrors({ feedback: true })
      input.current.feedback.focus()
      return true
    }
    setErrors({})
    return false
  }

  const sendMail = (e: React.SyntheticEvent) => {
    e.preventDefault()
    let name = input.current.name.value
    let email = input.current.email.value
    let feedback = input.current.feedback.value
    let err = handleValidate(name, email, feedback)
    if (err) return

    setSending(true)
    fetch("https://tclsxo.deta.dev/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message: feedback }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data)
        setSending(false)
      })
      .catch(error => {
        console.error("Error:", error)
        setTimeout(() => setSending(false), 1000)
      })
  }
  return (
    <>
      <Seo title="Contact" />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col w-full"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl">Get in Touch</h2>
          </div>
          <form
            className="flex flex-col mt-8 w-5/6 md:w-1/2 mx-auto"
            onSubmit={sendMail}
          >
            <div className="flex flex-row-reverse my-4">
              <input
                id="name"
                className={
                  errors?.name
                    ? `form-input placeholder-red-600 bg-red-100`
                    : "form-input"
                }
                type="text"
                name="name"
                ref={el => (input.current["name"] = el)}
                placeholder={errors?.name ? "Name Required" : ""}
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>

            <div className="flex flex-row-reverse my-4">
              <input
                id="email"
                className={
                  errors?.email
                    ? `form-input placeholder-red-600 bg-red-100`
                    : "form-input"
                }
                type="text"
                name="email"
                ref={el => (input.current["email"] = el)}
                placeholder={errors?.email ? "Email Required" : ""}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="flex flex-row-reverse  my-4">
              <textarea
                className={
                  errors?.feedback
                    ? `form-input resize-none placeholder-red-600 bg-red-100`
                    : "form-input resize-none"
                }
                name="feedback"
                id="feedback"
                cols={5}
                rows={5}
                ref={el => (input.current["feedback"] = el)}
                placeholder={errors?.feedback ? "Message Required" : ""}
              />
              <label htmlFor="feedback" className="form-label">
                Message
              </label>
            </div>
            <button
              className="flex justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
              type="submit"
            >
              {sending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Sending</span>
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </m.div>
    </>
  )
}

export default Contact
