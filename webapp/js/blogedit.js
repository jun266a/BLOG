$(function(){
  	$('.summernote').summernote({
  		height : 300,
  		minHeight : null,
  		maxHeight : 500,
  		focus : true
  	});
  	CLICK('#save',1,function(){
  		
  	});
  	CLICK('#publish',2,function(){
  		
  	});
});
function CLICK(id,stat,callback){
	$(id).on('click',{stat:stat},function(){
  		var markup = $('.summernote').summernote('code');
  		AJAX(data,url,function(){
  			
  		});
  		callback();
  	});
}
