require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000

mongoose = require('mongoose')

const produto = require('./src/api/models/produtoModel.js');

const bodyParser = require('body-parser');

mongoose.promise = global.promise;
mongoose.connect(
    process.env.DATABASE_URL
)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./src/api/routes/produtoRoutes.js');
routes(app)


app.listen(PORT,()=>{
    console.log('ESCUNTADO A PORTA'+PORT);
})