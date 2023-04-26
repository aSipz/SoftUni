config = {
    development: {
        PORT: 3000,
        SECRET: 'verySecretSecret',
        DB_URI: 'mongodb://127.0.0.1:27017/books'
    },
    production: {
        PORT: 3000,
        SECRET: 'evenMoreSecretSecret',
        DB_URI: 'mongodb://127.0.0.1:27017/books'
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];