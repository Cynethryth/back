var express = require("express");
var router=express.Router();
var aplicacion = express();

router.get('/', function(request, response) {
response.status(200).json({"mensaje":"Nuestra primera app con node.js utilizando express"});
});

aplicacion.use(router);

aplicacion.listen(5000, function() {
console.log("Servidor iniciado");
});

