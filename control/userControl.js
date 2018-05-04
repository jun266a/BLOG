'use strict';

const userDao = require('../dao/userDao');

let iUser = {
	checkUser : function (fields,res){
		console.log(fields.name);
		userDao.select({name:fields.name},function(results){
			if(results.length == 0){//用户名不存在                             
				res.writeHead(200);                  
				res.end("{result:'fault',desc:'0'}");
			}else {
				let result = results[0];
				if(fields.password == result.PASSWORD){//登录成功
					res.writeHead(200);
					res.end("{result:'success',desc:'1',UID:'"+result.UID+"'}");
				}else {	//密码错误                               
					res.writeHead(200);                  
					res.end("{result:'fault',desc:'2'}");
				}
			}
		});
	},
	registUser : function (fields,callback){
		//做校验操作
		userDao.select({name:fields.name},function(results){
			if(results.length == 0){//用户名不存在    
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	setPassword : function (fields,res){
		userDao.insert(fields,function(results){
			if(results.length != 0){//注册成功
				res.writeHead(200);
				res.end("{result:'success',desc:'1'}");
			}
		});
	}
};
module.exports = iUser;