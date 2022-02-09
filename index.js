require('dotenv').config()

const express = require("express")
const {SouthernCompanyAPI} = require("southern-company-api")
const port = 8000;


const app = express()

console.log(`Starting listener on port ${port}.`)

const config = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    account: process.env.ACCOUNT
}

const api = new SouthernCompanyAPI(config)

api.on('connected', async () => {
    const response = await api.getAccounts()
    console.log("Hello from get accounts: " + response)
});

app.get('/', async (req, res) => {
    res.send("HELLO WORLD")

})

app.listen(port, () => {
})
