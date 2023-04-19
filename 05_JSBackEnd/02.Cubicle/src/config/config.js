const config = {
    development: {
        PORT: 3000
    },
    production: {
        PORT:5000
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];