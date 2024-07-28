const express = require("express");
const { connection } = require("./db");

const {   ProductRouter } = require("./Routes/Products.route");
const cors=require("cors");

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())


app.use("/products", ProductRouter);

app.listen(process.env.PORT, async() => {
    try{
      await connection;
      console.log("Connected to the DB");
      console.log(`Running at ${process.env.PORT} port`);
    }catch(err){
        console.log(err);
    }
})