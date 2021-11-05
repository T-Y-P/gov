// JavaScript Document
//移动端导航
$(document).ready(function() {
	$(".m_nav").accordion({
		accordion:false,
		speed: 300,
		closedSign: '▼',
		openedSign: '▲'
	});
});

$('.wap_nav').click(function(){
	$('.m_nav').toggleClass('top0');
	$('body').toggleClass('cut');
	$(this).children('span').eq(0).toggleClass('x45');
	$(this).children('span').eq(1).toggleClass('z-45');
});

//回到顶部
$('.gotop').click(function(){
	$('html,body').animate({  
		scrollTop: 0  
	}, 800); 
});
 
