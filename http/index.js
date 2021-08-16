const http = require('http')
const server = http.createServer(handler)

function handler(req, res) {
    console.log(req.url)

    res.writeHead(200, {
        // browser 也會自己預設一些 header -> text/html
        'Content-Type': 'text/plaintext'
    })
    if (req.url === '/hello') {
        res.write('hello world!')
    } else if (req.url === '/bye') {
        res.write('bye!')
    } else {
        res.write('invalid url')
    }
    res.end()
}

// listen port
server.listen(5001)

// go to http://localhost:5001/