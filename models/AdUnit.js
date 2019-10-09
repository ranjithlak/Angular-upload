const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  name: {type:String,required:true},
  image: {data:Buffer, contentType:String},
  description: {type:String,required:true},
  quantity: {type:Number,required:true},

},{
    collection: 'adunites'
});

module.exports = mongoose.model('AdUnit', AdUnit);
