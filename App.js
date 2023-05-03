const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routes/UsuariosRouter');
const App= express.Router();

App.use(cors());
App.use(bodyParser.json());

//Usuarios
App.use("/Usuarios", UsuariosRouter);

//Demas Modelos

const PORT = process.env.PORT || 5000;
App.listen(PORT);