const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('request come', request.url)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-Policy': 'default-src http: https:'
            // 'Content-Security-Policy': 'default-src \'self\'', // 只能加载本域下的资源，像外链的jquery库就会报错
            // 'Content-Security-Policy': 'default-src \'self\';form-action \'self\'',  // 这样表单跳转也会被拦截
            // 'Content-Security-Policy': 'script-src \'self\';form-action \'self\'', // 之前的default会限制全部
            // 'Content-Security-Policy': 'script-src \'self\';form-action \'self\'; report-uri /report', 
        });
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascript'
        });
        response.end('console.log("loaded script")')
    }
}).listen(8888)


console.log('server listening on 8888')