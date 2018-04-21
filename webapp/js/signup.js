$(function(){
	$('#signup').on('click',function(){
        var datasParam = $('#signup-form').serialize();
        console.log(datasParam);
		//这里不用对参数进行转化，
//		不论是对象数组或是对象JSON或者不转化，通过ajax 方式传递数据，，在后台接收的是参数化的
		AJAX(datasParam,"/signupAction",function(json){
			if(json.desc === '1'){
        		$(location).prop('href', '../../signin.html')
        		console.log(json.desc === '1');
        	}
		});
        
	});
});

