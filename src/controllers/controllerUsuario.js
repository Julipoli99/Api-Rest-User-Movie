require("dotenv").config();
const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = Sequelize.Op;

const jwt = require("jsonwebtoken");


function generateToken(user, res){
    jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn: "10m"}, (err, token) => {
        if(err){
            console.log(err);
        }
        else{
            res.json({
                token
            })
        }
    })
}

/*function deleteToken(user, res){
    jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn: "1s"}, (err, token) => {
        token = "";
        if(err){
            console.log(err);
        }
        else{
            res.json({
                token
            })
        }
    })
}*/


let controllerUsuario = {
    users: async (req, res) => {
        try {
            const users = await db.Usuario.findAll();

            if(users.length > 0){
                res.status(200).json(users);
            }
            else{
                res.status(404).json({Message: "Not found"})
            }
            
        } catch (error) {
            return res.status(500).json({Message: error.message});
        }
    },
    register: async (req, res) => {
        try {
            const {Nombre, Apellido, Email} = req.body;

            const newUser = {
                Nombre,
                Apellido,
                Email
            }

            const user = await db.Usuario.create(newUser); 
            res.status(201).json(user);

        } catch (error) {
            return res.status(500).json({Message: error.message});
        }


    },
    login: async (req, res) => {
        try {
            let users = await db.Usuario.findAll();

            let {Email} = req.body;

            let usuarioBuscado = null;
            let i = 0;

            while(i < users.length && usuarioBuscado == null){
                if(Email == users[i].Email){
                    usuarioBuscado = users[i];
                }
                else{
                    i++;
                }
            }

            if(usuarioBuscado != null){
               generateToken(usuarioBuscado, res);
            }
            else{
                res.status(404).json({Message: "Not found"})
            }

        } catch (error) {
            return res.status(500).json({Message: error.message});
        }

    },
    delete: async (req, res) => {
        try {
            const {id} = req.params;

           const user = await db.Usuario.findOne({
                where: {id}
            })

            if(user){
                await db.Usuario.destroy({
                    where: {id}
                });
                res.status(200).json({Message: "User deleted"})
            }
            else{
                res.status(404).json({Message: "Not found"});
            }

        } catch (error) {
            return res.status(500).json({Message: error.message});        
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params;

            const userUpdated = await db.Usuario.findOne({
                where: {id}
            })

            if(userUpdated == null){
                res.status(404).json({Message: "Not found to id: " + id})
            }
            else{
                userUpdated.set(req.body);

            await userUpdated.save();

            return res.status(200).json(userUpdated);
            }

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    /*logout: async (req, res) => {
        try {
            const {id} = req.params;

            const userDeleted = await db.Usuario.findOne({
                where: {id}
            })

            if(userDeleted == null){
                res.status(404).json({Message: "Not found to id: " + id})
            }
            else{
                deleteToken(userDeleted, res);
            }
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }*/
}




module.exports = controllerUsuario;