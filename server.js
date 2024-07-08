const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const DB = mongoose.connection;

DB.on('open', () => {
    console.log("Database connected successfully");
})

app.use(express.json());

const routerUser = require('./routes/users');
app.use('/users', routerUser);



app.listen(3000, () => {
    console.log("Server running on post no. : 3000");
});