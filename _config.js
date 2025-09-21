var config = {};

config.mongoURI = {
    production: process.env.MONGO_URI_PRODUCTION || 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: process.env.MONGO_URI_DEVELOPMENT || 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: process.env.MONGO_URI_TEST || 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom-test?retryWrites=true&w=majority',
};

config.port = process.env.PORT || 5000;

module.exports = config;