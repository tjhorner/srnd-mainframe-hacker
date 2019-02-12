import React, { Component } from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null, username: "", logins: null, loading: false }

    this.search = this.search.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
  }

  async search(ev) {
    ev.preventDefault()

    this.setState({
      user: null,
      logins: null,
      loading: true
    })

    const results = await fetch(`/api/user?username=${encodeURIComponent(this.state.username)}`, { credentials: "include" })
    const json = await results.json()

    this.setState({
      user: {
        username: this.state.username,
        aliases: json.probableMatches
      },
      logins: json.matches,
      loading: false
    })
  }

  updateUsername(ev) {
    this.setState({ username: ev.target.value })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.search}>
          <input type="text" placeholder="username_" value={this.state.username} onChange={this.updateUsername}/>
          <button>dox</button>
        </form>
        {(this.state.loading || this.state.user) &&
        <div className="App-hackytext">
          infiltrating SRND mainframe...<br/>
          downloading master database...<br/>
          {this.state.user && <span>
            retrieving user "{this.state.user.username}" data...<br/>
            matching bits and bobs...<br/>
            <strong className="green">HACK COMPLETE</strong><br/>
          </span>}
        </div>}
        {this.state.user && <Profile user={this.state.user}/>}<br/>
        {this.state.logins && this.state.logins.map((match, i) => <Login match={match} key={i}/>)}
        <div className="App-watermark">SRND ROOT MAINFRAME SYSTEM<br/>ACCESS GRANTED</div>
      </div>
    )
  }
}

export default App
