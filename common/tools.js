'use strict';

//引入文件读写模块fs
const fs = require('fs');

function loadFile(pathname,res){
	fs.readFile(pathname,function(err,data){
	    //res.write服务器的相应，当成功的时候，服务器会传输一个data数据，相应结束需要end
	    if(err){ 
    		console.error('错误: ' + err.stack);
	      	res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	        res.end('404,您访问的页面不存在');    
	    }else{
	        res.write(data);    
	        res.end();
	    }
	});
}

module.exports = {loadFile};
