var mongoose = require('mongoose'),
    schemas = require('./schemas');

var models = {};

models.Events = mongoose.model('Events', schemas.Events);

module.exports = models;