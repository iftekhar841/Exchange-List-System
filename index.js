const express = require("express");
const app = express(); 
const router = require('./routes/route')
const PORT = process.env.port || 5000
const dotenv = require('dotenv');
const db = require("./db/database")
dotenv.config({ path: "./config.env" });




app.use('/api', router);


app.listen(PORT , (err)=>{
    if(err) throw err
    console.log(`Server is running on the port no: ${PORT}`);
});