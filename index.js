const express = require('express')
const app = express()
const port = parseInt(process.env.PORT ? process.env.PORT : 3000)

console.log('process.env', process.env.PORT)

const secureEnv = require('secure-env');
global.env = secureEnv({secret:'ENV_KEY'}) || {};
// console.log('TESTE',  process.env);

let vars = process.env;
for (const [key, value] of Object.entries(global.env)) {
  console.log(`${key}: ${value}`);
  vars = `${vars} | ${key}: ${value}`
}

app.get('/', (req, res) => {
  res.send(`O valor da variavel '' é : `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 