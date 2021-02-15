const mongoose = require('mongoose');
const {Schema} = mongoose;

const Imagenes = new Schema({
     email: {type: String, required:true},
     password: {type: String,required:true},
     token: {type: String,required:false},
     
});

module.exports = mongoose.model('Imagenes',Imagenes);