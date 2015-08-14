var express = require('express');
var path = require('path')
var port = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');

app.set('views', './views/pages');
app.set('view engine', 'jade');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port);

console.log('node web app started on port ' + port);

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'demo1 首页1',
		movies:[{
			title:'钢铁侠',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'钢铁侠',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'钢铁侠',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'钢铁侠',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'钢铁侠',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'钢铁侠',
			_id:6,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	});
});

//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'demo1 详情页',
		movie:{
			doctor:'javan',
			country:'china',
			title:'钢铁侠',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'chinese',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
		}
	});
});

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'demo1 列表页',
		movies:[{
			_id:1,
			doctor:'javan',
			country:'china',
			title:'钢铁侠',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'chinese',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
		},{
			_id:2,
			doctor:'javan',
			country:'china',
			title:'钢铁侠',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'chinese',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
		}]
	});
});

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'demo1 后台录入页',
		movie:{
			doctor:'',
			country:'',
			title:'',
			year:'',
			poster:'',
			language:'',
			flash:'',
			summary:''
		}
	});
});
