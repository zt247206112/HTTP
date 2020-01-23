const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
http.createServer(function (request, response) {
    console.log('request come', request.url)
    const html = fs.readFileSync('test.html');
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'gzip' // 压缩头部信息，参数是浏览器支持的压缩算法
    });
    response.end(zlib.gzipSync(html));
}).listen(8888)


console.log('server listening on 8888')