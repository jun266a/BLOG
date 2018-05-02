'use strict';
//1.引入mysql的模块
const mysql = require('mysql');

let db = {
	CONFIG :  {
		HOST : '127.0.0.1',
		USER : 'root',
		PASSWORD : '123',
		DATABASE_NAME : 'KALI',
	},
	VIEWS : {
		CATE : {
			NAME : 'CATE'
		}
	},
	TABLES : {
		USER : {
			NAME : 'BLOG_USER'
		},
		ARTICLE : {
			NAME : 'BLOG_ARTICLE'
		},
		CATEGORY : {
			NAME : 'CATEGORY'
		}
	},
	query : function sqlback(querySql,values,callback){
		//2.获取和数据库的链接
		const connection = mysql.createConnection({
			host : this.CONFIG.HOST,
			user : this.CONFIG.USER,
			password : this.CONFIG.PASSWORD,
			database : this.CONFIG.DATABASE_NAME,
		});
		//3.启动链接
		connection.connect(function(err){
			if (err) {
			    console.error('连接错误: ' + err.stack);
			    return;
		  	}
		  	console.log('连接ID ' + connection.threadId);
		});
		if(!querySql) return ;
		connection.query(querySql,values,function(err,results,fields){
			if(err){
	    		console.error('查询错误: ' + err.stack);
			    return;
		    }
			callback(results);
		});
		connection.end(function(err) {
			if(err){
				console.error('关闭错误: ' + err.stack);
			    return;
		    }else{
		    	console.log('连接关闭');
		    }
		});
	},
};



(function test (){
//	select test 
//	let testJson = {};
//	testJson.email = '11@11';
//	select(testJson,function(results){
//		console.log(results);
//	});
//  insert test
	let testArray = [];
	testArray.push("00@00");
	testArray.push("00");
	insert(testArray,function(results){
		console.log(results);
	});
});


module.exports = db;
