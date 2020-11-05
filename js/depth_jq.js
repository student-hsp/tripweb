(function () {
	tool.showHide();
	tool.navSearch();
	/*-----------------------------nav-------------------------------*/

	var timer,num=0;
	function autogo(){
		timer&&clearInterval(timer);
		timer=setInterval(function(){
			if(num>2) num=0;
			$('.d_m_ul li').eq(num).fadeIn(1500);
			$('.d_m_ul li').eq(num).siblings('li').fadeOut(1500);
			num++;
		},2500)
	}
	autogo();
	/*-----------------------图片切换--------------------------------*/

	$('.d_t_con2>ul>li').hover(function(event) {
		$(this).children('.dt_c2_introduce').stop().slideToggle(500);
	});
	/*--------------------------------------------------------------*/
	var num1=0;
	$('.depth_left').click(function(event) {
		num1--;
		if(num1<0) num1=0;
		$(this).css('background', 'rgba(0,0,0,0.6)');
		$('.depth_right').css('background', 'rgba(0,0,0,0.6)');
		$('.dt3_ul>ul').animate({'left': -num1*367+'px'}, 500)
		if(num1==0) $(this).css('background', 'rgba(0,0,0,0.2)');
	});
	$('.depth_right').click(function(event) {
		num1++;
		if(num1>3) num1=3;
		$(this).css('background', 'rgba(0,0,0,0.6)');
		$('.depth_left').css('background', 'rgba(0,0,0,0.6)');
		$('.dt3_ul>ul').animate({'left': -num1*367+'px'}, 500)
		if(num1==3) $(this).css('background', 'rgba(0,0,0,0.2)');
	});
	/*--------------------------独家日游---------------------------*/

	var num2=0;
	$('.lleft').click(function(event) {
		num2--;
		if(num2<0) num2=0;
		$('.long_main').animate({'left': -num2*1000+'px'}, 500)
	});
	$('.lright').click(function(event) {
		num2++;
		if(num2>2) num2=2;
		$('.long_main').animate({'left': -num2*1000+'px'}, 500)
		$(this).css('background', 'rgba(0,0,0,1)');
	});
	tool.alterCss('.lleft',{"background":'rgba(0,0,0,1)'},{"background":'rgba(0,0,0,0.5)'});
	tool.alterCss('.lright',{"background":'rgba(0,0,0,1)'},{"background":'rgba(0,0,0,0.5)'});
	/*--------------------------长线------------------------*/
	tool.rollIn();
	/*-----------------------------fix滚轮显---------------------------------*/

	$('.d_sup_con1 input').focus(function(event) {
		$('.sup_search').fadeIn();
	});
	$('.d_sup_con1 input').blur(function(event) {
		$('.sup_search').fadeOut();
	});
	/*---------------------------搜索------------------*/
	$('.qhome_img').hover(function() {
		$(this).children('a').hide();
		$(this).children('.middle_price').stop().slideDown(300);
	}, function() {
		$(this).children('a').show();
		$(this).children('.middle_price').stop().slideUp(300);
	});
	$('.qhome_list li').hover(function() {
		var index=$(this).index();
		$(this).addClass('list_thelist');
		$(this).siblings('li').removeClass('list_thelist');
		$('.depth_qhome>img').eq(index).stop().fadeIn(600);
		$('.depth_qhome>img').eq(index).siblings('img').stop().fadeOut(600);
		$('.dep_qhome_main').eq(index).stop().fadeIn(600);
		$('.dep_qhome_main').eq(index).siblings('.dep_qhome_main').stop().fadeOut(600);
	});
})();