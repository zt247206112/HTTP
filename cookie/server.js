const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    const host = request.headers.host;
    console.log('request come', request.url)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        if (host === 'a.test.com') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['id=123;max-age=2', 'abc=456;domain=test.com']
            });
        }
        response.end(html);
    }
}).listen(8888)


console.log('server listening on 8888')