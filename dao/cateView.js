'use strict';

const db = require('./iMysql');

let cateView = {
	select : function(values,callback){
		let selectSql = 'SELECT * FROM ' + db.VIEWS.CATE.NAME +' WHERE ?';
		db.query(selectSql,values,function(results){
			callback(results);
		});
	}
};
module.exports = cateView;
