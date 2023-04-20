const config = {
    development: {
        PORT: 3000,
    },
    production: {
        PORT: 1234,
    }
}

module.exports = config[process.env.NODE_ENV || 'development'];