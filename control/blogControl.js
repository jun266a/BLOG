'use strict';

const blogDao = require('../dao/blogDao');
const cateDao = require('../dao/cateDao');
const cateView = require('../dao/cateView');

let iBlog = {
	addNew : function(fields,res){
		blogDao.insert(fields,function(results){
			if(results.length != 0){       
				res.redirect('/bloglist.html');
			}else{
				res.writeHead(200);                  
				res.end("{result:'fault',desc:'0'}");
			}
		});
	},
	getInfo : function(fields,res){
		blogDao.select(fields,function(results){
			
		});
	},
	delInfo : function(fields,res){
		blogDao.delete(fields,function(results){
			
		});	
	},
	getArticles : function(fields,res,callback){
		blogDao.select(fields,function(results){
			callback(results);
		});
	},
	getUIDCategory : function(fields,res,callback){
		cateView.select(fields,function(results){
			callback(results);
		});
	},
	getAllCategory : function(callback){
		cateDao.selectAll(function(results){
			callback(results);
		});
	}
};
module.exports = iBlog;	