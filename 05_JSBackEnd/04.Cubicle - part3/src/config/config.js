const config = {
    development: {
        PORT: 3000,
        DB_URI: 'mongodb://127.0.0.1:27017/Cubical',
        SECRET: 'ultraSecretDevSecret'
    },
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://127.0.0.1:27017/Cubical',
        SECRET: 'ultraSecretProdSecret'
    }
}

module.exports = config[process.env.NODE_ENV || 'development'];