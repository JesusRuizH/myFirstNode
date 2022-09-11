const http = require('http')

const server = http.createServer((req, res) => {
//console.log(req)
if(req.url === '/'){
  res.end('Home Page')
}
else if(req.url === '/about'){
    res.end('Story Page')
}
else{
    res.end(`<h1>Hello dude ur lost</h1><br>
    <p>please return</p><br>
    <a href = "/">Click me</a>`);
}
})

server.listen(5000)