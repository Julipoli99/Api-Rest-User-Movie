const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = Sequelize.Op;

module.exports = async function queryParams(req, res, next){
        let {name} = req.query;
        let {age} = req.query;
        let {peso} = req.query;


    if(name){
        try {
         const character = await db.Personaje.findAll({
            where: {
                Nombre: {[Op.like]: "%" + name + "%"}
            }
           })
           
            res.status(200).json(character)
               
           } catch (error) {
            return res.status(500).json({message: error.message})
           }
    }
    if(age){
        try {
       const character = await db.Personaje.findAll({
            where: {
                Edad: {[Op.like]: "%" + age + "%"}
            }
        })
        
            res.status(200).json(character)
               
           } catch (error) {
            return res.status(500).json({message: error.message})
           }
    }

    if(peso){
        try{
        const character = await db.Personaje.findAll({
            where: {
                Peso: {[Op.like]: "%" + peso + "%"}
            }
        })
        
            res.status(200).json(character)
               
           } catch (error) {
            return res.status(500).json({message: error.message})
           }
    }
    next()
}