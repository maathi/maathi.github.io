import React, { Component, useState } from "react"
import "../style/contact.css"
import { FaPaperPlane } from "react-icons/fa"
import Form from "./common/form"
import Joi from "joi-browser"

class Contact extends Form {
  state = {
    data: { email: "", subject: "", message: "" },
    errors: { email: null, subject: null, message: null },
  }

  schema = {
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().min(24).required(),
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
            placeholder="Your message"
            value={this.state.data["message"]}
            onChange={this.handleChange}
            onBlur={this.validate}
          ></textarea>
          <button
            className={this.validateAll() ? "disabled" : "enabled"}
            onClick={this.handleSubmit}
            disabled={this.validateAll()}
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    )
  }
}

export default Contact
