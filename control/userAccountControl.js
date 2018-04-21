'use strict';

const iMysql = require('../dao/iMysql');

function userSignin(fields,res){
	//获取到了请求的参数
	let data = {};
	data.email = fields.email;
	iMysql.select(data,function(results){
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

function userSignup(fields,req){
	let data = {};
	data.email = fields.email;
	
	//获取到了请求的参数
	let signupData = [];
	signupData[signupData.length] = fields.email;
	signupData[signupData.length] = fields.password;
	console.log(signupData);
	//做校验操作
	iMysql.select(data,function(results){
		if(results.length == 0){
			//用户名不存在    
			data.password = fields.password;
			iMysql.insert(signupData);
		}else{
			
		}
	});
}

module.exports = {
	userSignin,userSignup
};
