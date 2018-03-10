var express = require('express');
var router = express.Router();
var Models = require('../database/models');

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

router.get('/events', function (req, res) {
    var query = req.query.name ? { name: { $regex: '.*' + req.query.name + '.*', $options:'i' } } : {};
    Models.Events.aggregate([
        {
            $match: query
        },
        {
            $group: {
                _id: { name: "$name" },
                count: { $sum: 1 }
            }
        },
        {
            $sort: {
                count: -1
            }
        }
    ], function (err, result) {
        if (err) {
            console.error(err);

            res.json({
                message: 'Não foi possível recuperar os eventos, tente novamente mais tarde.',
                status: 500
            });

            return;
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

router.post('/events', function (req, res) {
    var body = req.body;
    console.log(body);

    Models.Events.create({ name: body.name, created_on: new Date(body.created_on) }, function (err, event) {
        if (err) {
            console.error(err);

            res.json({
                message: 'Não foi possível inserir o evento, tente novamente mais tarde.',
                status: 500
            });

            return;
        }

        console.log(event);

        res.json({
            message: 'Evento inserido com sucesso! =D',
            status: 200
        });
    });
});

router.delete('/events', function (req, res) {
    Models.Events.remove({}, function (err, result) {
        if (err) {
            console.error(err);

            res.json({
                message: 'Não foi possível remover os eventos, tente novamente mais tarde.',
                status: 500
            });

            return;
        }

        console.log(result);

        res.json({
            message: 'Eventos removidos com sucesso! =D',
            status: 200
        });
    });
});

module.exports = router;