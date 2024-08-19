var mongoose = require('mongoose');
var config = require('../constants/constants');
mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI.replace('::1', '127.0.0.1'), { });



// var mongoose = require('mongoose');
// var config = require('../constants/constants');
// mongoose.Promise = global.Promise;
// mongoose.connect(config.MONGO_URI);

// module.exports = {mongoose};
