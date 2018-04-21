'use strict';
//1.引入mysql的模块
const mysql = require('mysql');


const iDB = {
	HOST : '127.0.0.1',
	USER : 'root',
	PASSWORD : '123',
	DATABASE_NAME : 'kali',
};

const TABLE = {
	NAME : 'BLOG',
	ID : 'UID',
	EMAIL : 'EMAIL',
	PASSWORD : 'PASSWORD',
};

//2.获取和数据库的链接
const connection = mysql.createConnection({
	host : iDB.HOST,
	user : iDB.USER,
	password : iDB.PASSWORD,
	database : iDB.DATABASE_NAME,
});
//3.启动链接
connection.connect(function(err){
	if (err) {
	    console.error('连接错误: ' + err.stack);
	    return;
  	}
  	console.log('连接ID ' + connection.threadId);
});


//4.执行增删查改
//single & multiple select
function select(values,callback){
	let selectSql = 'SELECT * FROM ' + TABLE.NAME +' WHERE ?';
	console.log(selectSql);
	console.log(values);
	
	connection.query(selectSql,values,function(err,results){
		if(err){
    		console.error('查询错误: ' + err.stack);
		    return;
	    }
		callback(results);
	});
};
//single insert
function insert(values){
	let insertSql = 'INSERT INTO ' + TABLE.NAME +' ('+TABLE.EMAIL+','+TABLE.PASSWORD+')'+'  VALUES (?,?) ';
	console.log(insertSql);
	connection.query(insertSql,values,function(err,results){
		if(err){
    		console.error('插入错误: ' + err.stack);
		    return;
	    }
		console.log(results);
	});
};


let test = function(){
//	let Json = {email:'1@66'};
//	select(Json);

//	let Json = ['1@66', '66'];
//	insert(Json);
	
}();

//connection.end(function(err) {
//	if(err){
//		console.error('关闭错误: ' + err.stack);
//	    return;
//  }
//});

module.exports = {
	insert,select,
}
