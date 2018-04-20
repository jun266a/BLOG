'use strict';

//1、引入模块  使用的http服务协议是RFC2616  nodejs的作者已经写好了，直接引入就行
const http = require('http');
//引入文件读写模块fs
const fs = require('fs');
//引入路径模块path
const path = require('path');
//引入模块querystring
const querystring = require('querystring');
//引入模块iMysql
const iMysql = require('./dao/iMysql');

//2、创建服务器    函数的参数req是发送给服务器的请求，res是服务器的相应
let httpObj = http.createServer(function(req,res){
    //编写url  其中index.html是要服务器读取的文件
    let url = req.url=='/'?'index.html':req.url;
    //开始文件读取，参数分别是完整的url 编码 和读取完毕执行的函数，注意前后台编码需要一致
    let ph = path.join(__dirname,'../webapp',url);
    
    if(url === "/signinAction" ){
    	if(req.method == 'POST'){
    		req.addListener('data',function(data){
    			let json = querystring.parse(data.toString());
//  			let user = json.user;
    			console.log(json);
    		});
    	}
    }else if(url === "/signupAction" ){
    	if(req.method == 'POST'){
    		req.addListener('data',function(data){
    			let json = querystring.parse(data.toString());
//  			let user = json.user;
    			console.log(json);
    		});
    	}
    }else{
	    fs.readFile(ph,function(err,data){
	        //res.write服务器的相应，当成功的时候，服务器会传输一个data数据，相应结束需要end
	        if(err){ 
	        	res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	            res.write('404,您访问的页面不存在');
	            res.end();    
	        }else{
	            res.write(data);
	            res.end();    
	        }
	    });
    }  
});
//监听端口
httpObj.listen(80,function(err){
	if(err) throw err;
    console.log("server is started!");
});
