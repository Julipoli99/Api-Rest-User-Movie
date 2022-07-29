const express = require("express");
const app = express();

const db = require("../database/models");
const {sequelize, Sequelize} = require("../database/models");
const op = Sequelize.Op;
const authToken = require("./middlewares/userToken");

//Settings
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(("Server running on port " + app.get("port")));
})

app.use(express.json());

//Routes
app.use("/", (req, res) => res.json({
    Message: "Bienvenido a la API REST ALKEMY CHALLENGE",
    RutaPersonajes: "/v1/api/characters",
    RutaPeliculas: "/v1/api/movies",
    OtherMessage: "Se deberá usar Postman o algun otro servicio de Rest Client para hacer los metodos post y put al igual que con el usuario para hacer el registro y el login para generar el token que permitira acceder a las rutas de personajes y peliculas"
}))
app.use("/v1/api/characters", authToken, require("./routes/routePersonaje"));
app.use("/v1/api/movies", authToken, require("./routes/routePelicula"));
app.use("/v1/api/user", require("./routes/routeUsuario"));