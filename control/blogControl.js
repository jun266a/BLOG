'use strict';

const blogDao = require('../dao/blogDao');

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
	}
};
