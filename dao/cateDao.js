'use strict';

const db = require('./iMysql');

let cateDao = {
	insert : function(values,callback){
		let insertSql = 'INSERT INTO ' + db.TABLES.CATEGORY.NAME +' SET ? ';
		db.query(insertSql,values,function(results){
			callback(results);
		});
	},
	delete : function(values,callback){
		let deleteSql = 'DELETE * FROM ' + db.TABLES.CATEGORY.NAME +' WHERE ?';
		db.query(deleteSql,values,function(results){
			callback(results);
		});
	},
	select : function(values,callback){
		let selectSql = 'SELECT * FROM ' + db.TABLES.CATEGORY.NAME +' WHERE ?';
		db.query(selectSql,values,function(results){
			callback(results);
		});
	},
	replace : function(values,callback){
		let replaceSql = 'REPLACE INTO ' + db.TABLES.CATEGORY.NAME +' SET ? ';
		db.query(replaceSql,values,function(results){
			callback(results);
		});
	},
	update : function(values,callback){
		let updateSql = 'UPDATE INTO ' + db.TABLES.CATEGORY.NAME +' SET ? ';
		db.query(updateSql,values,function(results){
			callback(results);
		});
	}
	
};
module.exports = cateDao;