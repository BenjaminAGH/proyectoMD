//Evironment Variables
const { configEnv } = require('./configEnv.js');
const { PORT } = configEnv();

//Routes
const indexRoutes = require('./routes/index.routes.js');

//Express Server
const express = require('express');
const app = express();

//DataBase
require('./configDB.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('aplicación iniciada!');
});

app.use('/api', indexRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

