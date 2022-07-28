const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = Sequelize.Op;

let controllerPelicula = {
    movies: async (req, res) => {

        try {
            let movies = await db.Pelicula.findAll({
                attributes: ["id", "Titulo", "Imagen", "FechaCreacion"]
            })
    
            res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

       
    },
    movie: async (req, res) => {
        try {
        const {id} = req.params;

        const movie = await db.Pelicula.findOne({
            where: {id},
            include: [{association: "personajes"}]
        })

        if(movie == null){
            res.status(404).json({Message: "Not found"})
        }
        else{
            res.status(200).json(movie);
        }
        
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
        
    },
    newMovie: async (req, res) => {
        try {
            const {Titulo, Imagen, FechaCreacion, Calificacion, id_genero} = req.body;

            const newMovie = {
                Titulo,
                Imagen,
                FechaCreacion,
                Calificacion,
                id_genero
            }

            if(!Titulo || !Imagen || !FechaCreacion || !Calificacion || !id_genero){
                res.status(400).json({Message: "Bad request, you must complete all the fields"})
            }
            else{
                await db.Pelicula.create(newMovie);
                res.status(201).json(newMovie);
            }

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },
    updateMovie: async (req, res) => {
        try {
            const {id} = req.params;

            const movieUpdated = await db.Pelicula.findOne({
                where: {id}
            })

            if(movieUpdated == null){
                res.status(404).json({Message: "Not found to id: " + id})
            }
            else{
             movieUpdated.set(req.body);

            await movieUpdated.save();

            return res.status(200).json(movieUpdated);
            }

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    remove: async (req, res) => {
        try {
            const {id} = req.params;

            await db.Pelicula.destroy({
                where: {id}
            })

            res.status(200).json("Movie deleted")
            
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}


module.exports = controllerPelicula;