const http=require('http')

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        console.log(`home page`)
        return
    }
    if(req.url==='/about'){
        for(let i=1;i<=100;i++){
            for(let j=1;j<=100;j++ ){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
        return
    }
    res.end('error page')
})

server.listen(5000,()=>{
    console.log("the port is runnig in : 5000..")
})