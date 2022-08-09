const express = require("express");
const router = express.Router();

const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const op = Sequelize.Op;

const controllerPersonaje = require("../controllers/controllerPelicula");
const queryParamsMiddleware = require("../middlewares/queryParamsPelicula");
const validation = require("../middlewares/validationMiddleware");

router.get("/", queryParamsMiddleware, controllerPersonaje.movies);
router.get("/:id", controllerPersonaje.movie);

router.post("/new", validation.movie, controllerPersonaje.newMovie);
router.put("/:id/update", controllerPersonaje.updateMovie);
router.delete("/:id/remove", controllerPersonaje.remove);


module.exports = router;