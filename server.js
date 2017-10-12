const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.listen(app.get('port'), function() {
    console.log("Super server is running", app.get("port"));
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/greet/:name', function (req, res) {
    
    //DO stuff....

    var randomGreeting = ["Hello", "Hei", "Hei på deg"];

    var rand = randomGreeting[Math.floor(Math.random() * randomGreeting.length)];
        res.send(rand + " " + req.params.name);
})