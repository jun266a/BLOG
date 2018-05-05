'use strict';

//1、引入模块 
//引入路径模块path
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//引入自己的模块

const itools = require('./common/tools');
const iUser = require('./control/userControl');
const iBlog = require('./control/blogControl');


//post参数注入
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine','ejs');
app.set('views','./webapp');
//静态webapp文件夹，方便请求webapp的所有文件
app.use(express.static('webapp'));

app.get('/favicon.ico',function(req,res){
    let	pathname = path.join(__dirname,'/webapp/images/56.png');
    itools.loadFile(pathname,res);
});

let datas = {};
let AllCategorys = [];
getAllCategory(function(results){
	AllCategorys = results;
});

app.get('/bloglist.html',function(req,res){
		iBlog.getUIDCategory({UID : 31},res,function(categorys){
			iBlog.getArticles({UID : 31},res,function(articles){
				datas = {categorys,articles,AllCategorys};
//				console.log(datas);
				res.render('bloglist.ejs',datas);
			});
		});
});
app.use('/saveAction',function(req,res){
	iBlog.addNew(req.body,res);
	console.log('req.body'+req.body);
});

function getAllCategory(callback){
	iBlog.getAllCategory(function(AllCategorys){
		callback(AllCategorys);
	});	
}


app.post('/signinAction',function(req,res){
	if(!req.body){
		return res.sendStatus(400);
	}else{
    	iUser.checkUser(req.body,res);
	}
});
app.post('/signupAction',function(req,res){
	console.log(req.body);
	if(!req.body){
		return res.sendStatus(400);
	}else{
		iUser.registUser(req.body,function(stat){
			if(stat){
				iUser.setPassword(req.body,res);
			}
		});
	}
});
app.post('/publishAction',function(req,res){
	if(!req.body){
		return res.sendStatus(400);
	}else{
    	iBlog.addNew(req.body,res);
	}
});
//监听端口
app.listen(80,function(err){
	if(err){
    	console.error('错误: ' + err.stack);
	}
    console.log("server is started!");
});
