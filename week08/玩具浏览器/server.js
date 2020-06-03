const http = required('http');

const server = http.createServer((req, res) => {
    console.log('request received:' + new Date());

    console.log('req: ', req.headers);

    res.setHeader('Content-Type', 'text/html');

    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hi zhaokonglei 1');
});


server.listen(8080)