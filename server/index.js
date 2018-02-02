const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');
const cors = require('cors')
const bcrypt = require ('bcrypt');
const saltRound = 12;
const port = process.env.PORT || 3333;
const app = express();

app.use( bodyParser.json() );

app.use( cors() );

app.use( express.static( `${__dirname}/../build` ) );

require('dotenv').config();

app.use( session({
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}) );



massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );