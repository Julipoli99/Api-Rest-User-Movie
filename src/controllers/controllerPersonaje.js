const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = Sequelize.Op;


let controllerPersonaje = {
    characters: async (req, res) => {   
        
        try {
            let datos = await db.Personaje.findAll({
                attributes: ["id", "Nombre", "Imagen"]
            })
       
            res.json(datos);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
            
    },
    character: async (req, res) => {
       try {
        let datos = await db.Personaje.findByPk(req.params.id, {
            include: [{association: "peliculas"}],
            attributes: ["Nombre", "Imagen", "Edad", "Peso", "Historia"]
           })

           if(datos == null){
            res.status(404).json({Message: "Not found"});
           }
           else{
            res.status(200).json({data: datos});
           }
    
           
       } catch (error) {
        return res.status(500).json({message: error.message})
       }
       
    },
    newCharacter: async (req, res) => {
        const {Nombre, Imagen, Edad, Peso, Historia} = req.body;

        try {
            const nuevoPersonaje = {
                Nombre,
                Imagen,
                Edad,
                Peso,
                Historia
            }
    
            await db.Personaje.create(nuevoPersonaje)
            res.json(nuevoPersonaje);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
       
    },
    updateCharacter: async (req, res) => {
        try {
            const {id} = req.params;

        const characterUpdated = await db.Personaje.findOne({
            where: {id}
        })

        characterUpdated.set(req.body);

        await characterUpdated.save();

        return res.json(characterUpdated);

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
        
    },
    deleteCharacter: async (req, res) => {
        try {
            let {id} = req.params;

        await db.Personaje.destroy({
            where: {
                id: id
            }
        })

        res.json("Borrado");
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
        
    },
    
}

module.exports = controllerPersonaje;