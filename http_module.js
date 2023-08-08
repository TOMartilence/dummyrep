const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to the home page");
    }

    else if(req.url==='/about'){
        res.end("This is the about page")
    }

    else{
        res.end(
            "<h1>OOPs!</h1>            <p>The page you are looking for is not found</p>"


        )
        }})

        server.listen(5000);

        console.log(`The server is running at 5000 host server`);


// http://localhost:5000/ - Displays "Welcome to the home page"
// http://localhost:5000/about - Displays "This is the about page"
// Any other URL - Displays "OOPs! The page you are looking for is not found"