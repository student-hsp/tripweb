(function () {

	tool.showHide();
	tool.navSearch();
	/*-----------------------------nav-------------------------------*/
	$('.city_ul li').click(function(event) {
		$(this).addClass('city_current');
		$(this).siblings('li').removeClass('city_current');
		var index=$(this).index();
		$('.city_city').eq(index).show();
		$('.city_city').eq(index).siblings('.city_city').hide();
	});
	$('.air_start input,.air_arrive input').click(function(event) {
		// $('.air_start_city').show();
		$(this).parent().children('.air_start_city').show();
		return false;
	});
	$('.air_start_city').click(function(event) {
		return false;
	});
	$(document).click(function(event) {
		$('.air_start_city').hide();
	});
	$('.city_city li').click(function(event) {
		var a=$(this).html();
		$(this).parent('ul').parent('.air_start_city').parent().children('input').val(a);
		$(this).parent('ul').parent('.air_start_city').hide();
	});
	$('.air_middle').click(function(event) {
		var a=$('.air_start input').val();
		var b=$('.air_arrive input').val();
		$('.air_start input').val(b);
		$('.air_arrive input').val(a);
	});
	$(".air_date span").click(function () {
		$(".tit").fadeIn();
		setTimeout(function () {
			$(".tit").fadeOut();
		},2000);
	})
	var mydate=new Date();
	var the_date=mydate.getFullYear()+"-";
	the_date+=mydate.getMonth()+1+"-";
	the_date+=mydate.getDate();
	$('.air_date_inp').val(the_date);
	$("input[type=radio]").click(function () {
		$(this).index()===2?$(".single_return").hide():$(".single_return").show();
	})
})();