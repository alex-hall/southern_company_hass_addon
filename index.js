const express = require("express")

const port = 8000;

const app = express()

console.log(`Starting listener on port ${port}.`)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {})
