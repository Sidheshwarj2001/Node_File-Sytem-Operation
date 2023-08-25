const http = require("http");
// console.log(http);

const server = http.createServer( (req, res) =>
{
    console.log("Server is started");
    
    if(req.url == "/about")
    {
        res.end("<h1>This is about page</h1>")
    }
    if(req.url == "/home")
    {
        res.end("<h1>This is Home page </h1>")
    }
    else
    {
        res.end("<h1>PAge not found </h1>")
    }
})

server.listen(5100,() =>
{
    console.log("Server is listen at port no 5100");

    
})