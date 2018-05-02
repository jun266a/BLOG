'use strict';

const db = require('./iMysql');

let blogDao = {
	insert : function(values,callback){
		let insertSql = 'INSERT INTO ' + db.TABLES.ARTICLE.NAME +' SET ? ';
		db.query(insertSql,values,function(results){
			callback(results);
		});
	},
	delete : function(values,callback){
		let deleteSql = 'DELETE * FROM ' + db.TABLES.ARTICLE.NAME +' WHERE ?';
		db.query(deleteSql,values,function(results){
			callback(results);
		});
	},
	select : function(values,callback){
		let selectSql = 'SELECT * FROM ' + db.TABLES.ARTICLE.NAME +' WHERE ?';
		db.query(selectSql,values,function(results){
			callback(results);
		});
	},
	replace : function(values,callback){
		let replaceSql = 'REPLACE INTO ' + db.TABLES.ARTICLE.NAME +' SET ? ';
		db.query(replaceSql,values,function(results){
			callback(results);
		});
	},
	update : function(values,callback){
		let updateSql = 'UPDATE INTO ' + db.TABLES.ARTICLE.NAME +' SET ? ';
		db.query(updateSql,values,function(results){
			callback(results);
		});
	}
};
module.exports = blogDao;
