const fs=require('fs')
fs.readFile('5a.path/first.txt','utf-8',(err,result)=>{
    if(err){
        return
    }
    const first=result
    fs.readFile('5a.path/second.txt','utf-8',(err,result)=>{
        if(err){
            return
        }
        const second= result
        fs.writeFile('5a.path/ganga.txt',`the result is :${first} and ${second}`,(err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('these is successful')
        })
    })
    
})