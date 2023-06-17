// set up ============================================================================================================
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

// configuration ============================================================================================================
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => { //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname}); //server responds by sending the index.html file to the client's browser
});

// routes ============================================================================================================
require("./routes/book.routes.js")(app);


// listen (start app with node server.js) ============================================================================
app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});

module.exports = app;