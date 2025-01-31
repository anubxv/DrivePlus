const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
        minlength : [13, ' Username must be atleast 3 charecters long']
    },

    email: {
        type : String,
        required: true,
        trim: true,
        lowercase : true,
        unique : true,
        minlength : [13, ' Email must be atleast 3 charecters long']
    },

    password : {
        type: String,
        required : true,
        trim: true,
        minlength: [5, 'Password must be at least 5 charecters long']
    }

})

const user = mongoose.model('user',userSchema)

module.exports = user;