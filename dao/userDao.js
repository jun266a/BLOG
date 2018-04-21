'use strict';

const db = require('./iMysql');


//4.执行增删查改
//single & multiple select
function select(values,callback){
	let selectSql = 'SELECT * FROM ' + db.TABLE.NAME +' WHERE ?';
	db.query(selectSql,values,function(results){
		callback(results);
	});
};
//single insert
function insert(values,callback){
	let insertSql = 'INSERT INTO ' + db.TABLE.NAME +' ('+db.TABLE.EMAIL+','+db.TABLE.PASSWORD+')'+'  VALUES (?,?) ';
	console.log(insertSql);
	db.query(insertSql,values,function(results){
		callback(results);
	});
};

module.exports = {select,insert};
