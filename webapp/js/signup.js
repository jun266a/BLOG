$(function(){
	$('#signup').on('click',function(){
        var Param = $('#signup-form').serialize();
        //param
        var Boolean = true;
        var jsonStr = paramToJson(Param);//吧键值对解析为json字符串
        var jsonObj = strToJson(jsonStr);//吧json字符串解析为json对象
        if(jsonObj.password=='' || jsonObj.name == ''){
			Boolean = false;
			return;
		}
        if(!(jsonObj.confirm == jsonObj.password)){
			Boolean = false;
			return;
		}
        console.log(jsonObj);
		if (Boolean) {
			AJAX({name:jsonObj.name,password:jsonObj.password},"/signupAction",function(json){
				if(json.desc === '1'){
//					$.get('signin.html');
	        		$(location).prop('href', '../../signin.html')
	        		console.log(json.desc === '1');
	        	}
			});
		}
	});
});

