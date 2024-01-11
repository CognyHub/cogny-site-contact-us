const express = require('express')
const app = express()
const port = parseInt(process.env.PORT ? process.env.PORT : 3000)

app.get('/', (req, res) => {
  res.send('Hello World 17:00!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
