var express = require('express');
var app = express();
var routes = require('./backend/config/routes');

app.use('/', express.static(__dirname + '/public'));
app.set('views', __dirname + '/backend/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

routes.forEach(function(route) {
	var path = route.handler.split('.');
	var ctrl = require('./backend/controllers/' + path[0]);

	app[route.method](route.path, function (req, res) {
		ctrl[path[1]](req, res);
	});
});

app.listen(3000);

console.log('server is running');