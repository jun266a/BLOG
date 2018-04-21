'use strict';

//1、引入模块 
const http = require('http');
//引入路径模块path
const path = require('path');
//引入模块querystring
const querystring = require('querystring');
const formidable = require('formidable');


//引入自己的模块

const itools = require('./common/tools')
const iuser = require('./control/userAccountControl')

//2、创建服务器    函数的参数req是发送给服务器的请求，res是服务器的相应
let httpObj = http.createServer(function(req,res){
    //编写url  其中index.html是要服务器读取的文件
    let url = req.url=='/'?'index.html':req.url;
    //开始文件读取，参数分别是完整的url 编码 和读取完毕执行的函数，注意前后台编码需要一致
    let pathname = path.join(__dirname,'/webapp',url);
    
    if(url === "/favicon.ico" ){
    	pathname = path.join(__dirname,'/webapp/images/56.png');
    }else if(url === "/signinAction" ){
    	if(req.method == 'POST'){
    		let form = new formidable.IncomingForm();
    		form.parse(req,function (err,fields,files){
    			iuser.userSignin(fields,res);
		    });
        }
    }else if(url === "/signupAction" ){
    	if(req.method == 'POST'){
    		let form = new formidable.IncomingForm();
    		form.parse(req,function (err,fields,files){
    			iuser.userSignup(fields,res);
    		});
    	}
    }else{
    	itools.loadFile(pathname,res);
    }  
});
//监听端口
httpObj.listen(80,function(err){
	if(err){
    	console.error('错误: ' + err.stack);
	}
    console.log("server is started!");
});
