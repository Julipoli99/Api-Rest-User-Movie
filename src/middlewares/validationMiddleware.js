const {check} = require("express-validator");
const {validateResult} = require("../helpers/validationHelper");

const validations = {

    character: [
    check("Nombre").exists().not().isEmpty(),
    check("Imagen").exists().not().isEmpty(),
    check("Edad").exists().not().isEmpty(),
    check("Peso").exists().not().isEmpty(),
    check("Historia").exists().not().isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
    ],

    movie: [
        check("Titulo").exists().not().isEmpty(),
        check("Imagen").exists().not().isEmpty(),
        check("FechaCreacion").exists().not().isEmpty().isDate(),
        check("Calificacion").exists().not().isEmpty(),
        check("id_genero").exists().not().isEmpty(),
        (req, res, next) => {
            validateResult(req, res, next);
        }
    ],

    user: [
        check("Nombre").exists().not().isEmpty(),
        check("Apellido").exists().not().isEmpty(),
        check("Email").exists().not().isEmpty().isEmail(),
        (req, res, next) => {
            validateResult(req, res, next);
        }
    ]

}

module.exports = validations;