'use strict';

const blogDao = require('../dao/blogDao');
const cateView = require('../dao/cateView');

let iBlog = {
	addNew : function(fields,res){
		blogDao.insert(fields,function(results){
			
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
	getIndex : function(fields,res,callback){
		blogDao.select(fields,function(results){
			callback(results);
		});
	},
	getCateByUID : function(fields,res,callback){
		cateView.select(fields,function(results){
			callback(results);
		});
	}
};
module.exports = iBlog;	