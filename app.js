//const http = require("http");
const express = require("express");
const app = express();
const bodyPraser=require('body-parser');
app.use(bodyPraser.urlencoded());

app.use('/add-product',(req, res, next) => {
    console.log("In the middleware");
    //res.send('<h2>Add product page </h2>');
    res.send('<form action="/product" method="POST">Name : <input type="text" name ="title"> <button type="submit"> Add product </> </form>')
    //next();
});
app.use("/product",(req,res,next)=>{
 console.log(req.body);
 res.redirect('/add-product');
})
app.use('/',(req, res, next) => {
    console.log("In the another middleware");
    res.send('<h2>hello sourabh</h2>');
    //next();
});

app.listen(3000 , ()=>{
    console.log("server is lisnting");
})