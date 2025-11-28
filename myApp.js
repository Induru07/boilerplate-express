let express = require('express');
let app = express();

// Middleware function to log requests
function simpleLogger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);// Log the HTTP method, path, and IP address
  next();
}


app.use(simpleLogger);// Middleware function to log requests


require('dotenv').config();// Load environment variables from .env file

console.log('Hello World');



// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });




app.get('/',(req,res)=>{
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});


app.use('/public', express.static(__dirname + '/public'));// Serve static assets

app.get('/json', (req, res) => {// Serve a JSON response
    //res.json({"message": "Hello json"});// Send a JSON response
    var message = "Hello json";
    //check environment variable === "uppercase" at .env file
    if(process.env.MESSAGE_STYLE === "uppercase"){// Check environment variable
        message = message.toUpperCase();// Convert message to uppercase
    }
    res.json({"message": message});// Send a JSON response
});

app.get('/now', (req, res, next) => {// Chain middleware to add current time to request

 req.time = new Date().toString();// Add current time to request object
 next();// Call next middleware
}, (req, res) => {
 res.json({time: req.time});// Send JSON response with current time
});























 module.exports = app;
