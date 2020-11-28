import "../style/contact.css"
import { FaPaperPlane } from "react-icons/fa"
import { GiSandsOfTime } from "react-icons/gi"
import Form from "./common/form"
import Joi from "joi-browser"

class Contact extends Form {
  state = {
    data: { email: "", subject: "", message: "" },
    errors: { email: null, subject: null, message: null },
    sending: false,
    status: null,
  }

  schema = {
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().min(24).required(),
  }

  componentDidMount() {
    this.visit()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.validateAll()) return
    this.send()
  }

  async visit() {
    const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace")
    const text = await res.text()
    await fetch("https://facteur.herokuapp.com/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
  }

  async send() {
    this.setState({ sending: true, status: null })
    const response = await fetch("https://facteur.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.data), // body data type must match "Content-Type" header
    })
    this.setState({ sending: false, status: response.status })
  }

  render() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <form>
          <input
            className={this.state.errors["email"] ? "error" : ""}
            name="email"
            placeholder="Your email"
            value={this.state.data["email"]}
            onChange={this.handleChange}
            onBlur={this.validate}
          ></input>
          <input
            className={this.state.errors["subject"] ? "error" : ""}
            name="subject"
            placeholder="subject"
            value={this.state.data["subject"]}
            onChange={this.handleChange}
            onBlur={this.validate}
          ></input>
          <textarea
            className={this.state.errors["message"] ? "error" : ""}
            name="message"
            placeholder="What's on your mind ?"
            value={this.state.data["message"]}
            onChange={this.handleChange}
            onBlur={this.validate}
          ></textarea>
          <button
            className={
              this.state.sending || this.validateAll() ? "disabled" : "enabled"
            }
            onClick={this.handleSubmit}
            disabled={this.validateAll()}
          >
            {this.state.sending ? <GiSandsOfTime /> : <FaPaperPlane />}
          </button>
        </form>

        <div className="message">
          <p className={this.state.status === 200 ? "sent" : "hidden"}>
            message sent successfully!
          </p>

          <p
            className={
              this.state.status && this.state.status !== 200
                ? "not-sent"
                : "hidden"
            }
          >
            couldn't send message!
          </p>
        </div>
      </div>
    )
  }
}

export default Contact
