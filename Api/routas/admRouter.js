const express = require("express");
const router = express.Router();
const auth = require("../controles/authController")

router.get("/admin", auth, (req,res)=>{

    if(req.user.admin){

    res.send("Area de Administração")
    }
    else{
        res.status(401).send("Não ADM: Acesso Negado")
    }
    
})

router.get("/free", auth, (req,res)=>{
    res.send("Essa dado é livre para quem esta logado")
})

module.exports = router