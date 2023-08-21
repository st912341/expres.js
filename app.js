//const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});
app.use((req, res, next) => {
    console.log("In the another middleware");
    res.send('<h2>hello sourabh</h2>');
    //next();
});

app.listen(3000 , ()=>{
    console.log("server is lisnting");
})