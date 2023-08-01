//Evironment Variables
const { configEnv } = require('./configEnv.js');
const bodyParser = require('body-parser');
const { PORT } = configEnv();
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Routes
const indexRoutes = require('./routes/index.routes.js');

//Express Server
const express = require('express');
const app = express();

//DataBase
require('./configDB.js');

app.use(cookieParser());
app.use(session({
  secret: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', 
  resave: false,
  saveUninitialized: true,
}));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('aplicación iniciada!');
});

app.use('/api', indexRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
