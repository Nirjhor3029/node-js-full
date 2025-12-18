const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {

    // console.log(req.url);
    const URL = req.url;
    res.writeHead(404, {
        "content-type": "text/plain"
    });
    switch (URL) {
        case '/':
            res.write("Hello from Home Page\n");
            break;
        case '/about':
            res.write("Hello from About Page\n");
            break;
        default:
            res.write("404 Page Not Found\n");
            break;
    }
    res.end();
})

server.listen(PORT, () => {
    console.log(`Server is now Listening: 127.0.0.1:${PORT}`);
})