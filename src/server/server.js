// server.js
const express = require('express')
const expressGraphql = require('express-graphql')
const fs = require('fs')
const path = require('path')
const app = express()

const schema = require('./schema')
app.use('/graphql', expressGraphql({
  schema,
  graphiql: true
}))

// app.get('/', (req, res) => res.end('index'))

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../../dist')))

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8')
  res.send(html)
})

app.listen(8081, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log('*** server started ***')
})
