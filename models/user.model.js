const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: "marketer",
    },
    showPass: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', userSchema);