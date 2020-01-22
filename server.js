const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('request come', response.url)
    const html = fs.readFileSync('test.html', 'utf8');
    response.writeHead(200, {
        'Content-Type': 'text/html',  // 解析为html，node默认加了
        // 'Content-Type': 'text/plain', // 解析为字符串
    });
    response.end(html);
}).listen(8888)


console.log('server listening on 8888')