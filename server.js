const express = require('express');
const api = require('./api');
const port = process.env.PORT || 3000; //puerto de red cualquiera despuès de 1024
const app = express(); // se crea instancia
 
app.listen(port, function () { // escuchar peticiones http en "port" 
    console.log("Server is listening at port: " + port); //mensaje si conexion es correcta
});

app.get('/', function (req, res) { // si hay peticion http "get" en la raíz "/"
    res.send("hello world"); // respuesta a peticion
});
app.use('/api', api);

const bodyParser = require('body-parser');
app.use('/api/', api);