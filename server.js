// const PORT = process.env.PORT
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./server/api')

// const request = require("request")
// const path = require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'dist')))

// const Transaction = require('./transactionSchema')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use("/", router)

// app.get('/Transactions', function (req, res) {
//     Transaction.find({}, function (err, X) {
//         res.send(x)
//     })
// })
// app.post('/transaction', function (req, res) {
//     const data = req.body
//     new Transaction(data).save()
//     res.end('saved')
// })



let port =  process.env.PORT || 3030  
let DBname = "Bank" 
mongoose.connect( process.env.MONGODB_URI || `mongodb://localhost/${DBname}`, { useNewUrlParser: true }).then(() => {
    app.listen(port, () => console.log(`Running server on port` + port))
})
