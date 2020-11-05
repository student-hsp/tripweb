(function () {
	tool.showHide();
	tool.navSearch();
	/*-----------------------------nav-------------------------------*/
	$('.hot_ul li').click(function() {
		var index=$(this).index();
		$('.hot_table').eq(index).show();
		$('.hot_table').eq(index).siblings('.hot_table').hide();
		$(this).addClass('list_main')
		$(this).siblings('li').removeClass('list_main')
	});
	$('.theme_list li').hover(function() {
		$(this).addClass('list_main')
		$(this).siblings('li').removeClass('list_main')
		var index=$(this).index();
		$('.free_destination').eq(index).show();
		$('.free_destination').eq(index).siblings('.free_destination').hide();
	});
	$('.f_d_left').hover(function() {
		$(this).children('.a_txt').css({'top':'0px','margin-top':'0px','background':'rgba(0,0,0,0.5)'});
	}, function() {
		$(this).children('.a_txt').css({'top':'100%','margin-top':'-58px','background':'rgba(0,0,0,0)'});
	});
	$('.f_d_r_con').hover(function() {
		$(this).children('.a_txt').css({'top':'0px','margin-top':'0px','background':'rgba(0,0,0,0.5)'});
	}, function() {
		$(this).children('.a_txt').css({'top':'100%','margin-top':'-58px','background':'rgba(0,0,0,0)'});
	});
	$('.des_monthly li').hover(function() {
		$(this).children('span').addClass('monthly_main')
		$(this).siblings('li').children('span').removeClass('monthly_main')
	});
	$('.month_img_ul li').hover(function() {
		// $(this).children('div').animate({'top': '0px'},500)
		$(this).children('div').css({'background': 'rgba(0,0,0,0.5)', 'top': '0px'})
	}, function() {
		// $(this).children('div').animate({'top': '245px'},500)
		$(this).children('div').css({'background': 'rgba(0,0,0,0)', 'top': '245px'})
	});
	/*---------------------------鼠标移入效果--------------------------------*/
	tool.rollIn();
	/*-----------------------------fix滚轮显---------------------------------*/
})();