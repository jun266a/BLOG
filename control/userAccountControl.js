'use strict';

const userDao = require('../dao/userDao');

function userSignin(fields,res){
	//获取到了请求的参数
	let dataJson = {};
	dataJson.email = fields.email;
	userDao.select(dataJson,function(results){
		//做校验操作
		console.log(results[0].PASSWORD);
		if(results.length == 0){
			//用户名不存在                             
			res.writeHead(200);                  
			res.end("{result:'fault',desc:'0'}");
		}
		else {
			let result = results[0];
			if(fields.password == result.PASSWORD){
				//登录成功
				res.writeHead(200);
				res.end("{result:'success',desc:'1',UID:'"+result.UID+"'}");
			}else {
				//密码错误                               
				res.writeHead(200);                  
				res.end("{result:'fault',desc:'2'}");
			}
		}
	});
}

function userSignup(fields,res){
//	预期的数据格式
//	Array
//	[
//		emailVal,
//		pwdVal,
//		{	
//			emailKey:emailVal,
//		}
//	]
//获取到了请求的参数
//参数处理
	let dataJson = {};
	dataJson.email = fields.email;
	let data = [];
	
	data.push(fields.email);
	data.push(fields.password);
	data.push(dataJson);
	console.log('注册数据'+data);
	
	//做校验操作
	userDao.select(data[2],function(results){
		if(results.length == 0){
			//用户名不存在    
			data.password = fields.password;
			userDao.insert(data.splice(0,2),function(results){
				if(results.length != 0){
					//注册成功
					res.writeHead(200);
					res.end("{result:'success',desc:'1'}");
				}
			});
		}else{
			
		}
	});
}

module.exports = {
	userSignin,userSignup
};
