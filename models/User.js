const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 6,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        minlength: 6,
    },
    password: {
        type: String,
        require: true,
    },
    admin: {
        type: Boolean,
        default: false

    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)