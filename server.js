const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config.env'})
const db_connection = require(`./config/db_connection`);
const PORT = process.env.PORT || 6000

app.use(cors());
app.use(express.json());
db_connection();

const server = app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}...`);
})

app.use('/api/v1/review', require('./routers/review.router'));