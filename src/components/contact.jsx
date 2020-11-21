import React, { useState } from "react"
import "../style/contact.css"

function Contact() {
  let [email, setEmail] = useState("")
  let [subject, setSubject] = useState("")
  let [body, setBody] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, subject, body)
  }

  return (
    <div>
      <h2>📞 Contact me</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <h4>📱 Phone </h4>
        <h4>✉ mail</h4>
        <input
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
        ></input>
        <input
          placeholder="Subject"
          value={subject}
          type="text"
          onChange={(e) => {
            setSubject(e.target.value)
          }}
        ></input>
        <textarea
          placeholder="Your message..."
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        ></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  )
}

export default Contact
