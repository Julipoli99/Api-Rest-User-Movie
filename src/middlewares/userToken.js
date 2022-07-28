const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function verifyToken(req, res, next){
    //Authorization: Bearer <token>
    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;

        jwt.verify(req.token, process.env.TOKEN_SECRET, (error, user) => {
            if(error){
                res.status(403).json({Message: "Ruta invalida"})
            }
            req.user = user;
            next();
        })
    }
    else{
        res.status(403).json({Message: "Ruta prohibida, require token al loguearse"})
    }

    
}