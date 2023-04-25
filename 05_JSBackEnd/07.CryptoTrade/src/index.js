const express = require('express');
const cookieParser = require('cookie-parser');

const config = require('./config');
const { setupViewEngine } = require('./config/setupViewEngine');
const { connectDB } = require('./database/dbConnect');

const routes = require('./routes');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();
setupViewEngine(app);

app.use(express.static('./src/static'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(authentication);
app.use(routes);

connectDB()
    .then(() => {
        app.listen(config.PORT, () =>
            console.log(`Server is listening on port ${config.PORT}...`));
    })
    .catch(err => console.log(err));