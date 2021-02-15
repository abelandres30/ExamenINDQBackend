const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventAttend = new Schema({
     EventID: {type: String,required:true},
     UserID: {type: String,required:true},
     willYouAttend: {type: Boolean,required:true}
});

module.exports = mongoose.model('EventAttend',EventAttend);