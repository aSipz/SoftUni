const http = require('http');
const fs = require('fs/promises');

const port = 3000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/') {
        const data = await readFile('./views/home.html');

        res.write(data);

    } else if (req.url == '/cats/add-cat') {
        const data = await readFile('./views/addCat.html');

        res.write(data);
    } else if (req.url == '/cats/add-breed') {
        const data = await readFile('./views/addBreed.html');

        res.write(data);
    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        const css = await readFile('./content/styles/site.css');

        res.write(css);
    }

    res.end()
});

function readFile(path) {
    return fs.readFile(path, 'utf-8');
}

server.listen(port);
console.log(`Server is listening on port ${port}...`);