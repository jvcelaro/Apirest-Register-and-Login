const jwt = require("jsonwebtoken")
const express = require("express")


 module.exports = function (req,res, next){
    const token = req.header("authorization-token");
    if(!token){ res.status(401).send("Acesso Negado")}

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified;
        next();
    } catch (error) {
        res.status(401).send("Acesso Negado")
    }
    
}
