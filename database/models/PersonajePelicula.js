module.exports = (sequelize, dataTypes) => {
    let alias = "PersonajePelicula";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_personaje: {
            type: dataTypes.INTEGER
        },
        id_pelicula: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "personaje_pelicula",
        timestamps: false
    }

    const PersonajePelicula = sequelize.define(alias, cols, config);

    PersonajePelicula.associate = function(models){
        PersonajePelicula.belongsTo(models.Personaje, {
            as: "personaje",
            foreignKey: "id_personaje"
        })
    }

    PersonajePelicula.associate = function(models){
        PersonajePelicula.belongsTo(models.Pelicula, {
            as: "pelicula",
            foreignKey: "id_pelicula"
        })
    }

    return PersonajePelicula;

}