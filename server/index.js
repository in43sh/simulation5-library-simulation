const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');
const bcrypt = require ('bcrypt');
const saltRound = 12;
const port = process.env.PORT || 3333;
const app = express(); // competency 74C

app.use( bodyParser.json() );

// competency 74E
app.use( express.static( `${__dirname}/../build` ) );

require('dotenv').config();

const users_controller = require('./controllers/users_controller');

app.use( session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}) );

massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

// Users management
app.post('/register', users_controller.register);
app.post('/login', users_controller.login);
app.delete('/destroy-user/:id', users_controller.destroyUser); // competency 74D-4



app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );