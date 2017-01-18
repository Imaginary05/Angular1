var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.get('/clients', function (req, res) {
  res.sendfile('clients.json');
});


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/views', express.static('views'));

app.listen(8080, function () {
  console.log('Listening on 8080');
});