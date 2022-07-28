const express = require("express");
const router = express.Router();

const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const op = Sequelize.Op;

const controllerPersonaje = require("../controllers/controllerPersonaje");
const queryParamsMiddleware = require("../middlewares/queryParams");



router.get("/", queryParamsMiddleware, controllerPersonaje.characters);  /*MUESTRA TODOS LOS PERSONAJES => localhost:PORT/v1/api/characters
                                                    FILTRA POR NOMBRE => localhost:PORT/v1/api/characters?name=Thor
                                                    FILTRA POR EDAD => localhost:PORT/v1/api/characters?age=20
                                                    FILTRA POR PESO => localhost:PORT/v1/api/characters?peso=85
                                                    FALTA EL DE idMovie
                                                    */


router.get("/:id", controllerPersonaje.character);


router.post("/add", controllerPersonaje.newCharacter);
router.put("/:id/update", controllerPersonaje.updateCharacter);
router.delete("/:id/delete", controllerPersonaje.deleteCharacter);

module.exports = router;
