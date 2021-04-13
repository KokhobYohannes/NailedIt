const mongoose = require("mongoose");

//create user schema
const userSchema = new mongoose.Schema({
//data field
    email: {type:String, require:true}, // validation
    passwordHash: {type: String, require: true},
})


//create model
const User = mongoose.model("user", userSchema);


// export User
module.exports = User;



