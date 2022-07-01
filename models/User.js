const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        requied: true
    },
    displayName:{
        type: String,
        requied: true
    },
    firstName:{
        type: String,
        requied: true
    },
    lastName:{
        type: String,
        requied: true
    },
    image:{
        type: String      
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('User', UserSchema)