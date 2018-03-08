const express = require('express'),
    models = require('./database/models'),
    db = require('./database/db'),
    routes = require('./routes/routes'),
    cors = require('cors');

// Define o ambiente
let env = process.env.NODE_ENV;
if (!env) {
    env = 'dev'
}

// Inicializa o express
let app = express();

app.use(cors());

// Inicializa o Banco de Dados
let config = require(`./env/config.${env}.json`);
let dbURL = `mongodb://${config.dbConfig.host}:27017/${config.dbConfig.database}`;
db(dbURL);

// Configura os endpoints da API
app.use('/api', routes);

// Configura a porta
let port = process.env.PORT || 3000;

// Inicializa a API
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web API started at http://%s:%s', host, port);
});