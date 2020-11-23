import React, { Component } from "react"
import Joi from "joi-browser"

class Form extends Component {
  state = { data: {}, errors: {} }

  validate = (e) => {
    const name = e.target.name
    let errors = { ...this.state.errors }
    const { error } = Joi.validate(
      { [name]: this.state.data[name] },
      { [name]: this.schema[name] }
    )
    errors[name] = error ? error.details[0].message : null
    this.setState({ errors: errors })
  }

  validateAll = () => {
    const { error } = Joi.validate(this.state.data, this.schema)

    return error
  }

  handleChange = (e) => {
    const name = e.target.name
    let data = { ...this.state.data }
    data[name] = e.target.value
    this.setState({ data })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.validateAll()
  }
}

export default Form
