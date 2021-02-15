const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyecto-crud';
mongoose.connect(URI)
.then(db => console.log('db esta conectado'))
.catch(err => console.log(err));
module.exports = mongoose;
