config = {
    development: {
        PORT: 3000,
        SECRET: 'verySecretSecret',
        DB_URI: 'mongodb://127.0.0.1:27017/animals'
    }
};

module.exports = config.development;