var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

// Create a schema
var EventsSchema = new mongoose.Schema({
  id: ObjectId,
  name: String,
  created_on: Date
});

module.exports = {
    Events: EventsSchema
}