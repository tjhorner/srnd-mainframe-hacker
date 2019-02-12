import React, { Component } from 'react'
import "./Profile.css"

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h1 className="green">{this.props.user.username}</h1>
        {this.props.user.aliases.length !== 0 &&
        <div>
          <h3>AKA:</h3>
          <ul>
            {this.props.user.aliases.map((alias, i) => <li key={i}>{alias}</li>)}
          </ul>
        </div>}
        {this.props.user.aliases.length === 0 &&
        <div>
          this user has out-hacked our system...
        </div>}
      </div>
    )
  }
}