var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const user = mongoose.model('Users', userSchema, 'Users')
module.exports = user