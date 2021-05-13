const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to my page 2021')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Opss</h1>
    <p>We can't se to find the page you are loging for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
