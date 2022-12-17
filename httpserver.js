const { rmSync } = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is my server made by node js did you like this comment below.</h1><p>subscribe to this webpage for more such content!!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening ${port}`);
});

