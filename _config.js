require('dotenv').config();

var config = {};

config.mongoURI = {
    production: process.env.MONGO_URI_PRODUCTION,
    development: process.env.MONGO_URI_DEVELOPMENT,
    test: process.env.MONGO_URI_TEST,
};

config.port = process.env.PORT || 5000;

module.exports = config;