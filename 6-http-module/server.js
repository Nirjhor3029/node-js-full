const http = require('http')

const PORT = 3000;

const server = http.createServer((req, res) => {
    // console.log(`req: ${req}`);
    // console.log(`res: ${res}`);
    // console.log('req: \n');
    // console.log(req);
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.write("Hello World\n");
    res.write("This is new Line\n");
    // res.end("The end line");

    for (let index = 0; index < 10; index++) {
        res.write(`index: ${index}\n`);
    }

    res.end();


})
// console.log(server);

server.listen(PORT, () => {
    console.log(`Server is now Listening: 127.0.0.1:${PORT}`);

})