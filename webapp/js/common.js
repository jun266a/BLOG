function strToJson(str){
    var json = new Function("return " + str)();
    return json;
}

function paramToJson(str){
    var newstr = str;
    while(newstr.indexOf("=")>0){
        newstr = newstr.replace("=",":\"");
    }
    while(newstr.indexOf("&")>0){
        newstr = newstr.replace("&","\",");
    }
    var stringObj= "{" +newstr + "\"}";
    return stringObj;
}
function AJAX(data,url,callback){
	$.ajax({
    	data:data,
    	type:"POST",
    	url:url,
    	async:false,
    	success:function(response){
    		var json = strToJson(response);
    		callback(json);
    	}
    });
}
