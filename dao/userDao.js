'use strict';

const db = require('./iMysql');

let userDao = {
//执行增删查改
	insert : function (values,callback){
		let insertSql = 'INSERT INTO ' + db.TABLES.USER.NAME +' SET ? ';
		console.log(insertSql);
		db.query(insertSql,values,function(results){
			callback(results);
		});
	},
	delete : function (values,callback){
		let deleteSql = 'DELETE * FROM ' + db.TABLES.USER.NAME +' WHERE ?';
		db.query(deleteSql,values,function(results){
			callback(results);
		});
	},
	select : function (values,callback){
		let selectSql = 'SELECT * FROM ' + db.TABLES.USER.NAME +' WHERE ?';
		db.query(selectSql,values,function(results){
			callback(results);
		});
	},
//UPDATE和REPLACE基本类似，但是它们之间有两点不同。
//1. UPDATE在没有匹配记录时什么都不做，而REPLACE在有重复记录时更新，在没有重复记录时插入。
//2. UPDATE可以选择性地更新记录的一部分字段。
//而REPLACE在发现有重复记录时就将这条记录彻底删除，再插入新的记录,将所有的字段都更新了。
	replace : function (values,callback){
		//REPLACE将考虑每一个唯一索引，并对每一 个索引对应的重复记录都删除，然后插入这条新记录
		let replaceSql = 'REPLACE INTO ' + db.TABLES.USER.NAME +' SET ? ';
		console.log(replaceSql);
		db.query(replaceSql,values,function(results){
			callback(results);
		});
	},
	update : function (values,callback){
	//UPDATE语句通过WHERE指定一个条件，否则，UPDATE将更新表中的所有记录的值。
		let updateSql = 'UPDATE INTO ' + db.TABLES.USER.NAME +' SET ? ';
		console.log(updateSql);
		db.query(updateSql,values,function(results){
			callback(results);
		});
	}
};

module.exports = userDao;
