const express = require('express');

const router = require('./routes');
const initDB = require('./database/db');

const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const app = express();
setupViewEngine(app);

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

initDB()
    .then(() => {
        app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));
    })
    .catch(err => console.log(err));