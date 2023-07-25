const mongoose = require('mongoose');

const { configEnv } = require('./configEnv.js');
const { DB_URL } = configEnv();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


mongoose.connect(DB_URL, options)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));