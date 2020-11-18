const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
videoUrl:{type:String},
description: {type:String},
userId:{type:Number},
likes:{type:Number},
comments:{type:String},
musicUrl: {type:String},
})
module.exports = mongoose.model("Video", videoSchema);
