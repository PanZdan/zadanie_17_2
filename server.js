var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('Otrzymałem żadanie GET do strony głównej')
  res.send('Hello GET!');
});

app.get('/test:id', function(req, res) {
  console.log('Otrzymałem żadanie GET do strony głównej')
  res.send('Identyfikator, który został dopisany to ' + req.params.id);
});

app.delete('/del_user', function(req, res) {
  console.log('Otrzymałem żadanie DELETE do strony /del_user');
  res.send('Hello DELETE!');
});

app.get('/list_user', function(req, res){
  console.log('Otrzymalem żadanie GET od strony /list_user');
  res.send('Strona z lista użytkowników!');
});

app.get('/ab*cd', function(req, res) {
  console.log('Otrzymałem żadanie GET od strony /ab*cd');
  res.send('Wzór pasuje!');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.listen(3000);