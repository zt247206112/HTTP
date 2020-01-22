const http = require('http')
http.createServer(function (request, response) {
    console.log('request come', request.url)
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*', // 用于解决跨域问题的一种方法
        'Access-Control-Allow-Headers': 'X-Test-Cors', // 允许自定义头部信息访问，设置后客户端的请求头部有X-Test-Cors字段时允许跨域请求
        'Access-Control-Allow-Methods': 'POST, PUT, Delete', // 允许自定义请求方法
        'Access-Control-Max-Age': '1000', // 100s，最长时间，在1000s内上述设置的东西，浏览器不需要发送预请求
    });
    response.end('456');
}).listen(8887)


console.log('server listening on 8887')