const express = require('express');
const router = express.Router(); // Create a router instance




// Define the route handlers
router.get('/add-product', (req, res, next) => {
  console.log("In the middleware");
  res.send('<form action="/product" method="POST">Name: <input type="text" name="title"> <button type="submit">Add product</button></form>');
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; // Export the router
