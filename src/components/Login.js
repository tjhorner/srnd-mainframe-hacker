import React, { Component } from 'react'
import "./Login.css"

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2>ALIAS: <span className="green">{this.props.match.username}</span></h2>
        <div>
          <strong>CONFIDENCE:</strong> {this.props.match.score}<br/>
          <strong>IP:</strong> {this.props.match.ip}<br/>
          <strong>FINGERPRINT:</strong> {this.props.match.fingerprint}<br/>
          <strong>MATCH:</strong> {this.props.match.matches.join(", ")}
        </div>
      </div>
    )
  }
}