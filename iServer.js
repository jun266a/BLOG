'use strict';

//1、引入模块 
const http = require('http');
//引入路径模块path
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//引入自己的模块

const itools = require('./common/tools');
const iuser = require('./control/userAccountControl');
const iBlog = require('./control/blogControl');

//post参数注入
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//静态webapp文件夹，方便请求webapp的所有文件
app.use(express.static('webapp'));

app.get('/favicon.ico',function(req,res){
    let	pathname = path.join(__dirname,'/webapp/images/56.png');
    itools.loadFile(pathname,res);
});
app.post('/signinAction',function(req,res){
	if(!req.body){
		return res.sendStatus(400);
	}else{
    	iuser.userSignin(req.body,res);
	}
});
app.post('/signupAction',function(req,res){
	if(!req.body){
		return res.sendStatus(400);
	}else{
    	iuser.userSignup(req.body,res);
	}
});
app.post('/publishAction',function(req,res){
	if(!req.body){
		return res.sendStatus(400);
	}else{
    	iBlog.blogInsert(req.body,res);
	}
});
//监听端口
app.listen(80,function(err){
	if(err){
    	console.error('错误: ' + err.stack);
	}
    console.log("server is started!");
});
