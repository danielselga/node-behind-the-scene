const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    
    // 1 Solutions
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) {
    //     console.log(err)
    //     } else {
    //         res.end(data)
    //     }    
    // })

    // 2 solution streams
    const readable = fs.createReadStream('test-file.txt')
    readable.on('data', chunk => {
        res.write(chunk)
    })
    readable.on('end', () => {
        res.end()
    })
    readable.on('error', err => {
        console.log(err)
        res.statusCode = 500;
        res.end('File Not Found')
    })
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
})