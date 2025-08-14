const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end('welcome to my profile')
    }
    if(req.url==='/about'){
        return res.end('i am gangadhar')
    }
    res.end(
        `<h1>oops!</h1>
        <p>we cant seem to find the page you are looking for></p>
        <a href="/">back home </a>
        `)
})

server.listen(5000)