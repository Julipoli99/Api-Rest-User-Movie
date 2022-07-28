const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllers/controllerUsuario");
const verifyToken = require("../middlewares/userToken");


router.get("/", controllerUsuario.users);

router.post("/register", controllerUsuario.register);
router.post("/login", controllerUsuario.login);   //GENERA EL TOKEN
//router.get("/verify", verifyToken, controllerUsuario.verify);
router.delete("/:id/delete", verifyToken, controllerUsuario.delete);
router.put("/:id/update", verifyToken, controllerUsuario.update);
//router.delete("/:id/logout", verifyToken, controllerUsuario.logout); // FALTA DESTRUIR TOKEN AL DESLOGUEARSE.. POR EL MOMENTO SOLAMENTE TIENE LA FUNCION DE VENCIMIENTO, DURA 1 MINUTO.




module.exports = router;