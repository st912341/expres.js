const express = require('express');
const router = express.Router(); // Create a router instance

// Define the route handler
router.get('/', (req, res, next) => {
    console.log("In the another middleware");
    res.send('<h2>hello sourabh</h2>');
});

module.exports = router; // Export the router
