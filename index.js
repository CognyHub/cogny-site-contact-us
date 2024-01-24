require('dotenv').config()
const express = require('express')
const app = express()
const port = parseInt(process.env.PORT ? process.env.PORT : 3000)

const InfisicalClient = require("infisical-node");
const client = new InfisicalClient({
    token: "your_infisical_token"
});

const secrets = await client.getAllSecrets({
    environment: "dev",
    path: "/foo/bar/",
    attachToProcessEnv: false,
});

const secureEnv = require('secure-env');
global.env = secureEnv({secret:'mySecretPassword'}) || {};

// console.log('process.env',  process.env)
// console.log('global.env',   global.env)
console.log('secrets',   secrets)

let vars = `<b>VARS: CRIPTOGRAFADA .env.enc</b>`;
for (const [key, value] of Object.entries({ /*...process.env,*/ ...global.env, })) {
    vars += `<p>${key}: ${value}</p>`
}

vars += `____________________________________`;
vars += `<br>`;
vars += `<br>`;

vars += `<b>VARS: LOCAL</b>`;
for (const [key, value] of Object.entries({ ...process.env, /*...global.env,*/ })) {
  vars += `<p>${key}: ${value}</p>`
}



app.get('/', (req, res) => {
  res.send(vars)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 