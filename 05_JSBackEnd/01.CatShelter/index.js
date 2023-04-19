const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');

const server = express();
const port = 3000;

server.engine('handlebars', handlebars.engine());
server.set('view engine', 'handlebars');

server.use(express.static('public'));

server.get('/', (req, res) => {
    fs.readFile('./data/cats.json', 'utf8', (err, data) => {
        res.render('home', { cats: JSON.parse(data) });
    });
});

server.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});

server.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
});

server.get('/cats/edit/:catId', (req, res) => {

    renderCat(req, res, 'editCat');
});

server.get('/cats/new-home/:catId', (req, res) => {
    renderCat(req, res, 'catShelter');
});

function renderCat(req, res, template) {
    const catId = req.params.catId;
    fs.readFile('./data/cats.json', 'utf8', (err, data) => {

        const cat = JSON.parse(data).find(c => c.id == catId);
        res.render(template, cat);
    });
}

server.listen(port, () => console.log(`Server is listening on port ${port}...`));