const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as Rotas
const indexRoutes = require('../src/routes/index');
const productsRoutes = require('../src/routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/products', productsRoutes);


module.exports = app;