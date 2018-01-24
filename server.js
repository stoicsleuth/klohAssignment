const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 


app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.use(function (req, res, next) {
    res.status(404);
    res.render('notFound');
});

app.set('port', 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});