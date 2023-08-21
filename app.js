const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes); // Use the adminRoutes middleware for '/admin' routes
app.use(shopRoutes);   // Use the shopRoutes middleware for '/shop' routes


app.use((req,res,next)=>{
   res.status(404).send("<h1> <B> Page Not found </B> </h1>") 
})
app.listen(3000, () => {
  console.log('Server is listening');
});
