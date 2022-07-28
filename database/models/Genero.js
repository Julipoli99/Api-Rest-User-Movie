module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: dataTypes.STRING(50),
            notNull: true
        }
    }

    let config = {
        tableName: "genero",
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "id_genero"
        });
    }

    return Genero;

}