$(function(){
  	$('.summernote').summernote({
  		height : 300,
  		minHeight : null,
  		maxHeight : 500,
  		focus : true
  	});
  	$('ul.dropdown-menu li').on('click',function(event){
  		var cateID = $(this).find('a').data('cate');
  		var cateStr = $(this).find('a').text();
  		$('#category').data("cate",cateID).text(cateStr);
  	});
  	
  	CLICK('#save',1,'/saveAction',function(json){
  		if(json.desc == '0'){//失败处理
  			
  		}
  	});
  	CLICK('#publish',2,'/publishAction',function(json){
  		
  	});
});
function CLICK(id,statu,url,callback){
	$(id).on('click',{statu:statu},function(){
		var data = {
			title : getTitle(),
			cate_id : getCate(),
			date : new Date(),
			content : getContent(),
			UID : getUID(),
			statu : statu
		}
		console.log(data);
		AJAX(data,url,function(json){
			callback(json);
		});
  	});
}

function getContent(){
	return $('.summernote').summernote('code');
}
function getCate(){
	return $('#category').data("cate");
}
function getTitle(){
	return $('#title').val();
}
function getUID(){
	return localStorage['UID'];
}
