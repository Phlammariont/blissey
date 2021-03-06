import React, {Component} from 'react'

export default class Input extends Component{
  constructor (props) {
    super (props)
    this.state = {
      value: props.value || ""
    }
  }

  render () {
    return <input
      onBlur={this.props.onBlur}
      type={this.props.type || "text"}
      className="np-input text-input"
      id={this.props.id}
      onChange={this.props.handleChange}
      onKeyUp={this.props.onKeyUp}
      placeholder={this.props.placeholder}
      value={this.props.value}/>
  }
}
