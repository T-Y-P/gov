// JavaScript Document
$(document).ready(function(){
	$("body").show();
	var P=$(window).height();
	var W = $(window).width();
	console.log(P);
	console.log(W);
	
			var p2=$(".nav").innerHeight()
			$(".store li").css({height:P-p2})
	$(".footer .bottom .link span").click(function(e) {
        $("body,html").animate({scrollTop:0},800)
    });
	$(".scroll").click(function(e) {
	    $("body,html").animate({scrollTop:P},800)
	});
	//菜单按钮点击效果
    $(".nbox").click(function(){
		console.log(".nbox")
      if($(".navBtn").hasClass("nav_btn_active")){
			$(".navBtn").removeClass("nav_btn_active");
			$(".nbox").fadeIn(500)
		}else{
			$(".navBtn").addClass("nav_btn_active");
			$(".nbox").fadeOut(500)
		}
	});
//	$(function(){  
//         $('body').bind('contextmenu', function() {
//          return false;
//              });
//禁止右键

// 	function stop() {
// 	    return false;
// 	}
// 	document.oncontextmenu = stop;
 	$(".vx .vx_mask").hide();
			$(".vx").mouseenter(function(){
				$(".vx .vx_mask").fadeIn(500);
			});
			$(".vx").mouseleave(function(){
				$(".vx .vx_mask").fadeOut(500);
			});
			var bodyV;
			
			function bodyFunction(){
				bodyV = setTimeout(function(){
					$("body").css({overflow:"visible"});
				},3000)
			};
			bodyFunction();
			
			
			var topHeight = 0;
			var centerHeight = 0;
				topHeight =  $(".nav").outerHeight();
				centerHeight = $(window).height()-topHeight;
			$(".center").height(centerHeight);
			
			var navsHeight = 0;
				navsHeight = $(".nav").outerHeight();
				if(W < 767){
					$(".nav2").height($(".nav_top").height());
				}else{
					$(".nav2").height(navsHeight-0);
				}
			
			var swipersHeight = 0
				swipersHeight =centerHeight;
			$("#swipers").height(swipersHeight-0);
			$("#firstmask").height($(window).height());
			$("#firstmask").width($(window).outerWidth());
			$("#firstmask").show ().delay (2500).slideUp();



	// 导航下拉
	$(".banner ul li").mouseenter(function(){
		$(".banner ul li .s_menu").slideUp(300)
		$(this).find(".s_menu").slideDown(500)
	});
	$(".banner ul li").mouseleave(function(){
		$(".banner ul li .s_menu").slideUp(300)
	});

	$(document).scroll(
		function(){		
		/*header*/
			var Q=$(document).scrollTop();
			if(Q>10){
				$("header").addClass("active")
				}
			if(Q<100){
				$("header").removeClass("active")
				}
		});
if( W < 767){
	$(".nav_down").height(P-$(".nav_top").height());
	$(".nav_img2").hide();
	$(".nav_down").slideUp(300);
	$(".nav2").outerHeight($(".nav_top").outerHeight());
	$(".nav_img1").click(function(){
		$(".nav_img2").show();
		$(this).hide();
		$(".nav_down").slideDown(300);
		$("body").css({overflow:"hidden"});
	})
	$(".nav_img2").click(function(){
		$(".nav_img1").show();
		$(this).hide();
		$(".nav_down").slideUp(300);
		$("body").css({overflow:"visible"});
	});
	$(".store li").css({height:(P-p2)*3});
	$(".mapall .map_mask").height($(".mapall .map_mask").width());
	
          
}


});
