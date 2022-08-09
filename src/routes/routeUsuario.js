const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllers/controllerUsuario");
const verifyToken = require("../middlewares/userToken");
const validation = require("../middlewares/validationMiddleware");


router.get("/", controllerUsuario.users);

router.post("/register", validation.user, controllerUsuario.register);
router.post("/login", controllerUsuario.login);   //GENERA EL TOKEN
//router.get("/verify", verifyToken, controllerUsuario.verify);
router.delete("/:id/delete", verifyToken, controllerUsuario.delete);
router.put("/:id/update", verifyToken, controllerUsuario.update);
//router.delete("/:id/logout", verifyToken, controllerUsuario.logout); // FALTA DESTRUIR TOKEN AL DESLOGUEARSE.. POR EL MOMENTO SOLAMENTE TIENE LA FUNCION DE VENCIMIENTO, DURA 10 MINUTOS.




module.exports = router;