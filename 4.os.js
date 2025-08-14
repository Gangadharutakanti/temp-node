const os=require('os')
//userInfo
console.log(os.userInfo())
//system uptime
console.log(`the system uptime ${os.uptime()} seconds`)
const currentOs={
    name:os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem(),
}
console.log(currentOs)