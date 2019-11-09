// const request = require("request")
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const Transaction = require('./transactionSchema')

router.get('/Transactions', (req, res) => {
    Transaction.find({}, function (err, x) {
        res.send(x)
    })
})

router.post('/Transaction', (req, res) => {
    const data = req.body
    // console.log(data)
    let a = new Transaction(data)
    a.save()
    res.end('saved')
})


module.exports = router