var express = require('express');
var router = express.Router();

// Página inicial
router.use(function (req, res, next) {
    console.log('Iniciando API.');
    next();
});

//Default router (/api)
router.get('/', function (req, res) {
    res.json({
        message: 'API Funcionando Normalmente',
        status: 200
    });
});

module.exports = router;