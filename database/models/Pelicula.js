module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Titulo: {
            type: dataTypes.STRING(50),
            notNull: true
        },
        Imagen: {
            type: dataTypes.STRING(500),
            notNull: true
        },
        FechaCreacion: {
            type: dataTypes.DATE,
            notNull: true
        },
        Calificacion: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        id_genero: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "pelicula",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, cols, config);


    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "id_genero"
        })
    }

    Pelicula.associate = function(models){
        Pelicula.belongsToMany(models.Personaje, {
            as: "personajes",
            through: "personaje_pelicula",
            foreignKey: "id_pelicula",
            otherKey: "id_personaje",
            timestamps: false
        })
    }

    return Pelicula;
}