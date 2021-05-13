const os = require('os')

// omfp abpit corrent user

const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds


console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    resease:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem(),
}
console.log(currentOS)