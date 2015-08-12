var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': '很棒，期待更多新的课程',
	'cid': 348
});

var options = {
	hostname: 'www.imocc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	hearder: {
		 'Accept': 'application/json, text/javascript, */*; q=0.01',
   'Accept-Encoding': 'gzip, deflate',
   'Accept-Language': 'zh-Hans-CN, zh-Hans; q=0.8, en-US; q=0.5, en; q=0.3',
   'Cache-Control': 'no-cache',
   'Connection': 'Keep-Alive',
   'Content-Length': postData.length,
   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
   'Cookie': 'cvde=55cb3214a9aa1-25; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1439387848; imooc_uuid=cf658416-1df8-4817-af03-3846d9392a18; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1439019464,1439036138,1439205265,1439379987; loginstate=1; apsid=I3NzAzZTNjMjMyMTk2OTczMGRkODQ4NjM3YmUwNmEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjk5NzQzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5dWxvbmdjc0BxcS5jb20AAAAAAAAAAAAAAAAAAAAAADAxYmJjM2ViYzg0MTcyYjgzY2Y5ZGZhODBlNjg2MjAxmvQFVAAAAAA%3DMT; PHPSESSID=o7gdritfrahtnaa5vomf69vnm3',
   'Host': 'www.imooc.com',
   'Referer': 'http://www.imooc.com/comment/364',
   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
   'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(options, function (res) {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end', function() {
		console.log('Success');
	});
});


req.on('error', function(){
	console.log('Error');
});

req.write(postData);
req.end();