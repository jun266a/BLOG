'use strict';

const iMysql = require('../dao/iMysql');

function userSignin(fields,res){
	//获取到了请求的参数
	let data = {};
	data.email = fields.email;
	iMysql.select(data,function(results){
		//做校验操作
		console.log(results[0].PASSWORD);
		let result = results[0];
		if(fields.password == result.PASSWORD){
			//登录成功
            res.writeHead(200);
            res.end("{result:'success',desc:'1',UID:'"+result.UID+"'}");
		}
	});
}

function userSignup(form,req){
	form.parse(req,function (err,fields,files){
	    //获取到了请求的参数
	    let data = {};
	    //做校验操作

    });	
}

module.exports = {
	userSignin
};
