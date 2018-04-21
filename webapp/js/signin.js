$(function(){
	$('#submit').on('click',function(){
		//获取表单数据
//      var datasArray = $('#signin-form').serializeArray();
        //datasArray instanceof Array true
        var datasParam = $('#signin-form').serialize();
        //param
        
        console.log(datasParam);
        
//      var jsonstr = paramToJson(datas);//吧键值对解析为json字符串
//      console.log('jsonstr'+jsonstr);
//      var json = strToJson(jsonstr);//吧json字符串解析为json对象
//      console.log('json'+json);

		//这里不用对参数进行转化，
//		不论是对象数组或是对象JSON或者不转化，通过ajax 方式传递数据，，在后台接收的是参数化的
        
        $.ajax({
        	data:datasParam,
        	type:"POST",
        	url:"/signinAction",
        	async:false,
        	success:function(response){
        		var json = strToJson(response);
        		if(json.desc === '1'){
        			console.log(json.desc === '1');
        		}
        	}
        });
        
	});
});

