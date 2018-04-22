$(function(){
	$('#signup').on('click',function(){
        var Param = $('#signup-form').serialize();
       	console.log(Param);
        //param
        var Boolean = true;
        var jsonStr = paramToJson(Param);//吧键值对解析为json字符串
        var jsonObj = strToJson(jsonStr);//吧json字符串解析为json对象
        if(jsonObj.password=='' || jsonObj.email == ''){
			Boolean = false;
			return;
		}
        if(!jsonObj.confirm == jsonObj.password){
			return;
		}
		if (Boolean) {
			AJAX(Param,"/signupAction",function(json){
				if(json.desc === '1'){
	        		$(location).prop('href', '../../signin.html')
	        		console.log(json.desc === '1');
	        	}
			});
		}
	});
});

