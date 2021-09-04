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
    // const readable = fs.createReadStream('test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk)
    // })
    // readable.on('end', () => {
    //     res.end()
    // })
    // readable.on('error', err => {
    //     console.log(err)
    //     res.statusCode = 500;
    //     res.end('File Not Found')
    // })

    // 3 solution streams
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res) // Essa solução evita o backpressure que é quando a leitura é mais rapida que o envio, o pipe controla o flow de dados.
    //readableSource.pipe(writeableDest)
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
})