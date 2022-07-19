const mongoose = require("../database/data");


const userSchema = mongoose.Schema({
    login: {type: String, unique:true, required: true},
    email: {type: String, unique:true, required: true},
    senha: {type: String, unique:true, required: true},
    admin: {type: Boolean, default: false},
    createAt: {type: Date, default: Date.now}

})

let users = mongoose.model("users", userSchema)

module.exports = users