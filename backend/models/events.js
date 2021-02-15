const mongoose = require('mongoose');
const {Schema} = mongoose;

const Events = new Schema({
     title: {type: String,required:true},
     description: {type: String,required:true},
     date: {type: Date,required:true},
     imagen: {type: String,required:true},
     attendances: {type: Number,required:false },
     willYouAttend: {type: Boolean,required:false},
     location: {type:String, required:true},
});

module.exports = mongoose.model('Events',Events);