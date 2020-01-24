const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds)
    })
}
http.createServer(function (request, response) {
    console.log('request come', request.headers.host)
    const html = fs.readFileSync('test.html', 'utf8');
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(html);
    }
    if (request.url === '/data') {
        response.writeHead(200, {
            'Cache-Control': 's-maxage=200',
            'Vary': 'X-Test-Cache'   // 只有当Vary设置的头信息完全一样（key和value），才会启用nginx的缓存
        });
        wait(2000).then(() => response.end('success'))
    }
}).listen(8888)


console.log('server listening on 8888')