// $(".news_yjx li").each(function  (index , ele) {//each循环遍历。得到所有的li  index代表li的下表，ele元素
// 	$(this).click(function () {//$(this) 表示当前点击的元素
// 		$(this).addClass("click");
// 		$(this).siblings().removeClass("click");
// 		$(".yjx div:eq("+index+")").css({"display":"block"}); //eq  根据each循环得出index的所引值  取对应的div显示
// 		$(".yjx div:eq("+index+")").siblings().css({"display":"none"}); //对应的div隐藏
// 	});
// });
/*选项卡有点乱*/
$(".yjx li").each(function  (index , ele) {//each循环遍历。得到所有的li  index代表li的下表，ele元素
	$(this).click(function () {//$(this) 表示当前点击的元素
		$(this).addClass("click");
		$(this).siblings().removeClass("click");
		$(".boxyjx div:eq("+index+")").css({"display":"block"}); //eq  根据each循环得出index的所引值  取对应的div显示
		$(".boxyjx div:eq("+index+")").siblings().css({"display":"none"}); //对应的div隐藏
	});
	
});




$('.headDiv').find('.topSearchIco').click(function(){
	$('.searchLayerTel').fadeIn(500);
	$('.pageBg').fadeIn(500);
	$('.navLayer').animate({right: "-100%",width:0}, 500);
	$('.navIco').fadeIn(500);
	})
//导航栏
$('.pageBg').click(function(){
	$('.searchLayerTel').fadeOut(500);
	$('.pageBg').fadeOut(500);
	})
//--
$('.navIco').click(function(){
	$('.navLayer').animate({right: "0",width:"100%"}, 500);
	$('.pageBg').fadeIn(500);
	$('.searchLayerTel').fadeOut(500);
	})
$('.navLayer').find('.closeBtn').click(function(){
	$('.navLayer').animate({right: "-100%",width:0}, 500);
	$('.navLayer').find('a').removeClass('aNow');
	$('.navLayer').find('.list').hide();
	$('.pageBg').fadeOut(500);
	})
//--
$('.headDiv').find('.weixin').each(function(i){
	$(this).hover(
	  function(){
		  $('.headDiv').find('.weixin').eq(i).addClass('on');
		  },
	  function(){
		  $('.headDiv').find('.weixin').eq(i).removeClass('on');
		  }
	)
	})