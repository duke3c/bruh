const mongoose= require("mongoose")

const USchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    user: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('User', USchema);