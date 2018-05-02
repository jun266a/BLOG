$(function(){
	$('#signin').on('click',function(){
		//获取表单数据
        var Param = $('#signin-form').serialize();
        //param
        var Boolean = true;
        var jsonStr = paramToJson(Param);//吧键值对解析为json字符串
        var jsonObj = strToJson(jsonStr);//吧json字符串解析为json对象
		if(jsonObj.password=='' || jsonObj.email == ''){
			Boolean = false;
			return;
		}
		if(Boolean){
			AJAX(Param,"/signinAction",function(json){
				if(json.desc === '1'){
//					$.post('./index.html');
	        		$(location).prop('href', '../../index.html')
				}
			});
		}
        
	});
});

