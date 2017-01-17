var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NameSchema = new mongoose.Schema({
    name: { type: String, required: true }
});
mongoose.model('Name', NameSchema);
