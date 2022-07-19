const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{ if(err){console.log(err)} 
    else {console.log("Bnaco rodando com Sucesso")}} 
    );
let db = mongoose.connection;

db.on("err", ()=>{console.log("Houve um erro")});
db.once("open", ()=>{console.log("Banco Carregado")});

module.exports = mongoose