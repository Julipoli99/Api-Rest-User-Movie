module.exports = (sequelize, dataTypes) => {
    let alias = "Personaje";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: dataTypes.STRING(50),
            notNull: true
        },
        Imagen: {
            type: dataTypes.STRING(500),
            notNull: true
        },
        Edad: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        Peso: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        Historia: {
            type: dataTypes.STRING(500),
            notNull: true
        }
    }

    let config = {
        tableName: "personaje",
        timestamps: false
    }

    const Personaje = sequelize.define(alias, cols, config);


    Personaje.associate = function(models){
        Personaje.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "personaje_pelicula",
            foreignKey: "id_personaje",
            otherKey: "id_pelicula",
            timestamps: false
        })
    }

    return Personaje;
}