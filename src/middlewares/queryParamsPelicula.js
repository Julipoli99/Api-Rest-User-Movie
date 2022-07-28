const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = Sequelize.Op;

module.exports = async function queryParams(req, res, next){
        let {name} = req.query;
        let {genre} = req.query;
        let {order} = req.query;


    if(name){
        try {
         const character = await db.Pelicula.findAll({
            where: {
                Titulo: {[Op.like]: "%" + name + "%"}
            }
           })
           
            res.status(200).json(character)
               
           } catch (error) {
            return res.status(500).json({message: error.message})
           }
    }
    if(genre){
        try {
           const movies = await db.Pelicula.findAll({
                where: {
                    id_genero: genre
                }
            })

            if(movies.length == 0){
                res.status(404).json({Message: "Not found"})
            }
            else{
                res.status(200).json(movies);
            }
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    
    if(order){
        try{
        const movies = await db.Pelicula.findAll({
            order: [
                ["FechaCreacion", `${order}`]
            ]
        })
            res.status(200).json(movies)
        
           } catch (error) {
            if(order != "asc" || order != "desc"){
                return res.status(400).json({Message: "Bad request"})
            }
            else{
                return res.status(500).json({message: error.message})
            }
            
           }
    }
    next()
}