var Mongoose = require('mongoose');

exports.PixelSchema = new Mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  color : { type : String, required : true },
});
