const mongoose = require('mongoose');
const db = require('../index');
const imageSchema = new mongoose.Schema({
imageUrl:{type:String} ,
likes:{type:Number},
comments:{type:String},
description:{type:String},
userId:{type:Number},
})
module.exports = mongoose.model("Image", imageSchema);
