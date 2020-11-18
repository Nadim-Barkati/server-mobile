const mongoose = require('mongoose');
const db = require('../index');

const userSchema = new mongoose.Schema({
    firstName:{type:String ,required:true} ,
    lastName: {type:String ,required:true },
    userName:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    dataOfBirth:{type:String ,required:true},
    phone:{type:Number },
    gender:{type:String ,required:true},
    description:{type:String ,required:true},
    qrCode:{type:String ,required:true},
    imageUrl:{type:String ,required:true},
    country:{type:String},
    city:{type:String ,required:true},
    zipCode:{type:Number},
    followers:{type:[Number] },
    videoId:{type:[Number]},
    imageId:{type:[Number]},
    commentId:{type:[Number] },
    likeId:{type:[Number] },
    followedId:{type:[Number]}, 
})
module.exports = mongoose.model("User", userSchema);