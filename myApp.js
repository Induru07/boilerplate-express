let express = require('express');
let app = express();


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
    res.json({"message": "Hello json"});// Send a JSON response
});























 module.exports = app;
