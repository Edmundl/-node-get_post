const http=require('http');
// const querystring=require('querystring');
const urllib=require('url');

http.createServer(function(req,res){
// var GET={};
// if(req.url.indexOf('?')!=-1){
// 		var arr=req.url.split('?');
// 		var url=arr[0];
// 		GET=querystring.parse(arr[1]);
// 	}else{
// 		var url=req.rul;
// 	}

	var obj=urllib.parse(req.url,true);
	
	var url=obj.pathname;
	var GET=obj.query;
	
	console.log(url,GET);
	//使用url解析最为简单，用url解析！
	
	//req获取前台请求数据
	res.write('aaa');
	res.end();
}).listen(8080);