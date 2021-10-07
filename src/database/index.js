const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/noderest'); //conectando ao banco de bandos!!
mongoose.Promise = global.Promise;

module.exports = mongoose;