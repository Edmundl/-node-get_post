const urllib=require('url');

var obj=urllib.parse("http://www.zhinengshe.com/index?a=12&b=5",true);
console.log(obj.pathname,obj.query);