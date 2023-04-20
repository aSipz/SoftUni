const mongoose = require('mongoose');

const config = require('../config/config');

async function initDB() {
  await mongoose.connect(config.DB_URI);

  console.log('Connected to database.');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = initDB;