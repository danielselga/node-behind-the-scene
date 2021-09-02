const fs = require('fs') //Modules require
const crypto = require('crypto')

const start = Date.now()

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => { //Will execute frist because is outside a callback
    console.log('Timer 1 finished'), 0
})

setImmediate(() => { //Will execute frist because is outside a callback
    console.log('Imediate 1 finished')
})

fs.readFile('test-file.txt', () => {
    console.log('I/0 Finished') // Frist of event-loop
    
    setImmediate(() => { // Second in the chain
        console.log('Imediate 2 finished')
    })
    
    setTimeout(() => { // Last one, and the order is based on timer.
        console.log('Timer 2 finished')
    }, 3000)


    process.nextTick(() => console.log('process.nextick')) //Frist callback wich will be executed 

    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "password encrypted")
    })
    
})

console.log('Hello from top-level code!') //Frist of all because is a top-level-code