const mongoose = require('mongoose')
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const TransactionSchema = new Schema({
    Amount: Number,
    Vendor: String,
    Category: String,
})


const Transaction = mongoose.model("TransactionSchema", TransactionSchema)

module.exports = Transaction
