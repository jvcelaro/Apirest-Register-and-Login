 const User = require("../model/users")
 const bcrypt = require("bcryptjs")
 const jwt = require("jsonwebtoken")

const usercontroller = {

    register: async function (req,res){
       

        const uniqueEmail = await User.findOne({email: req.body.email})
        if(uniqueEmail) { return res.status(400).send("Email already exist")}

        const uniqueLogin = await User.findOne({login: req.body.login})
        if(uniqueLogin) { return res.status(400).send("Login already exist")}


        const user = new User({
            login: req.body.login,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha),
        })

        try {

            const saveUser = await user.save()
            res.send(saveUser)
            
        } catch(err) { console.log(err) }
    },

    login: async function(req,res){
        
        const selectedUser = await User.findOne({email: req.body.email});
        if(!selectedUser) { return res.status(400).send("Email ou senha Incorretos")}

        const Senhaeloginmatch = bcrypt.compareSync(req.body.senha, selectedUser.senha);
        if(!Senhaeloginmatch) { return res.status(400).send("Email ou Senha Incorretos")}

        else { 

            const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET)

            res.header("authorization-token", token)
            res.send("LOGGED")
        }
    }

}

module.exports = usercontroller