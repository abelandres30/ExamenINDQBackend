const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose } =  require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
// app.use('/public',express.static('${_dirname}/storage/imgs'));
//Routes
app.use('/user/login',require('./routes/login.routes'));
app.use('/event/menu',require('./routes/menu.routes'));
app.use('/imagen/imagenes',require('./routes/imagenes.routes'));
app.use('/evento/asistencia',require('./routes/eventAttend.routes'));


//starting the server
app.listen(app.get('port'),() => {
    console.log('server on port' , app.get('port'));
});