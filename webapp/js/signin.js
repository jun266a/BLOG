$(function(){
	$('#signin').on('click',function(){
		//获取表单数据
//      var datasArray = $('#signin-form').serializeArray();
        //datasArray instanceof Array true
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
					$(location).prop('href', '../../index.html')
					console.log(json.desc === '1');
				}
			});
		}
        
	});
});

