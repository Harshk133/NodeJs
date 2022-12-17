
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());        
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is my server made by node js did you like this comment below.</h1><p>Hii, this is my about page.</p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1>This is my server made by node js did you like this comment below.</h1><p>subscribe to this webpage for more such content!!</p>');
    }
    else{
        // res.harssh();
        res.statusCode = 404;
        res.end('<h1>Page is Not Found!!</h1><p>This page not found on server :(</p>');
    }    
})

server.listen(port, ()=>{
    console.log(`Server is listening ${port}`);
});

