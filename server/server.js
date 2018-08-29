const express = require("express")
const app = express()
const PORT =8081
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT,function () {
  console.log("the server has started");
})
