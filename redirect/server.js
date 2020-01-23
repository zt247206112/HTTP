const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('request come', request.url)
    if (request.url === '/') {
        // 302 临时重定向（每次都要经过服务器内部进行重定向），301永久重定向（第二次以后，浏览器自己重定向，慎用，会被浏览器缓存）
        response.writeHead(301, {
            'Location': '/new'
        })
        response.end('');
    }
    if (request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end('<div>this is content</div>');
    }
}).listen(8888)


console.log('server listening on 8888')