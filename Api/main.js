const express = require("express");
require("dotenv").config();
const router = require("./routas/routes")
const Admrouter = require("./routas/admRouter")


 let exp = express();

exp.use("/", express.json(), router)

exp.use("/", express.json(), Admrouter)

 exp.listen(process.env.PORT, ()=>{
    console.log("Server Running Perfect")
 })