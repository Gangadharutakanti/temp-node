const {readFile}=require('fs')

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
        })
    })
}

getText('5a.path/first.txt')
.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)})