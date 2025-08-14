const fs=require('fs')
console.log('started a first task')
fs.readFile('5a.path/first.txt','utf-8',(err,result)=>{
    if(err){
        console.err(err)
        return
    }
    console.log(result)
    console.log("task completed")
})

console.log('starting next task')