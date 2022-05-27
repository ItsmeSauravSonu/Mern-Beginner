const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age:{
        type: Number,
        required: true

    },
    description:{
        type: String,
        required: false,
    }
})

const FriendModel = mongoose.model('Friends',FriendSchema)

module.exports = FriendModel