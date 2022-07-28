module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
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
        Apellido: {
            type: dataTypes.STRING(50),
            notNull: true
        },
        Email: {
            type: dataTypes.STRING(200),
            notNull: true
        }
    }

    let config = {
        tableName: "usuario",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}