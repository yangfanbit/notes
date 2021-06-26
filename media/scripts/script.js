
function feedme_show(){
	if($("#feedme-content").css("display")=='none'){
		 $("#feedme-content").slideDown();
	}else{
		 $("#feedme-content").slideUp();
	 }
}
//相册



jQuery(document).ready(function($){
    $(".song img").each(function(){

            var _b = $("<a data-fancybox='group'></a>").attr("href",this.src);
            $(this).wrap(_b);
 
        
    })

});


// 获取图片alt信息
$(".song p img").each(function(){ 
$("<figcaption class='image_title'></figcaption>").insertAfter(this); 
var thisImage = $(this).parents('.song p').find('img'); 
var title = thisImage.attr('alt'); 
$(this).siblings('.image_title').html(title); 
});
// 获取相册alt信息

    $("#comments").find( 'textarea#textarea').focus(function(){
    $(this).parent().siblings('div.comment-tool').addClass("d-block");
      $(this).parent().siblings('div.kuang').addClass("d-block");
      
    });



