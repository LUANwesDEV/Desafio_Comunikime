const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/testeProdutos1'); //conectando ao banco de bandos!!
mongoose.Promise = global.Promise;

module.exports = mongoose;