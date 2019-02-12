const express = require('express')
const request = require('request')
const config = require('./config.json')

const app = express()

app.get("/api/user", (req, res) => {
  request("https://micro.srnd.org/find-dupes", {
    qs: {
      password: config.password,
      user: req.query.username
    }
  }).pipe(res)
})

app.listen(process.env.PORT || 8080)