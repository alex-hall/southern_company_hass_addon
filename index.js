const express = require("express")

const port = 8000;

const webservice = express()

console.log(`Starting listener on port ${port}.`)

webservice.listen(port, () => {})
