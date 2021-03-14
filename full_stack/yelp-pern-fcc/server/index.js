const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const db = require('./db');
const restaurantController = require('./controllers/restaurantController');
const {PORT} = require('./config');

const app = express();

//Allow cross-origin requests
app.use(cors());

//This middleware reads data from request body (i.e. for POST/PUT requests) and saves it as a property req.body as a JavaScript object
app.use(express.json());

//This middleware logs data about request in our console
app.use(morgan('dev'))

restaurantController(app, db);

app.listen(PORT, () => console.log(`Express server started on ${PORT}`));
