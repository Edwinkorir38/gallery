var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
