const  mongoose=require("mongoose");
const Users = new mongoose.Schema({
    email: {type:String, Unique: true},
    password: String,
    phone: String,
},{Collection:"UserInfo"} );

mongoose.model("UserInfo", Users); 