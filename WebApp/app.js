var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

 app.set('views', './views');
 app.set('view engine', 'jade');
 app.listen(port);

console.log('node web app started on port ' + port);

//index page
app.get('/', function(req, res) {
	res.render('index', {
		 title: 'Node web app - home'
	});
});

// detail page
app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'Node web app - detail'
	});
});

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'Node web app - list'
	});
});

// list page
app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'Node web app - list'
	});
});