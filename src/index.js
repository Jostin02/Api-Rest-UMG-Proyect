const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT ||  3000);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies.js'));

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // entiende formatos que se importan desde formularios
app.use(express.json()); //recibe datos en formato json


//Start server
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});

