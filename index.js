const express = require("express")
const fs = require('fs')

const port = 8000;

const webservice = express()

console.log(`Starting listener on port ${port}.`)
webservice.listen(port, () => {
	console.log(`Ring Bridge is running on port ${port}.`);
})
