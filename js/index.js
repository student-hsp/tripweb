(function () {
	//鼠标移入切换内容
	function mouseIn(selector,disSelector,classNa){
		$(selector).hover(function() {
			var i=$(this).index();
			var $that=$(this);
			if(!$that.hasClass(classNa)){
				//除了当前元素以外的都移除class
				$that.siblings().removeClass(classNa);
				$that.addClass(classNa);
				$(disSelector).eq(i).show();
				$(disSelector).eq(i).siblings('ul').hide();
			}
		});
	}
// 鼠标经过头顶的导航栏事件
	$('.hander_nav_li').mouseenter(function() {
		$(this).css('border-top','3px solid #ffffff' );
		$(this).children('.hander_nav_li_ul_befor').show();
	}).mouseleave( function() {
		$(this).css('border-top','3px solid rgba(0, 0, 0, 0)' );
		$(this).children('.hander_nav_li_ul_befor').hide();
	});
// 商城切换
	mouseIn('.box_1_ctr span','.con_2_box1 ul','current');
// 热门游记与话题
	mouseIn('.box_3_ctr span','.con3_box1 ul','current2');
	tool.alterClass('.con_3 .box_3_mr a','current-shadow');
	tool.alterClass('.con_2 .box_1_mr a','current-shadow');
// con4
// 头像滑动
	var num1=0;
	setInterval(function(){
		if(num1++>8){
			num1=0;
			$('.right2 .right2_roll ul').css('left', -num1*60);
			num1=1;
		}
		$('.right2 .right2_roll ul').animate({'left':-num1*60})
	},2000)
// 右侧鼠标切换图片
	var mun=0;
	$('.wapper .title li').hover(function() {
		mun=$(this).index();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		$('.wapper .w_img li').eq(mun).fadeIn();
		$('.wapper .w_img li').eq(mun).siblings().fadeOut();

	});
// 右侧图片自动切换
	var timer1;
	function fade(){
		timer1=setInterval(function(){
			if(mun++>1){
				mun=0;
			}
			$('.wapper .w_img li').eq(mun).fadeIn();
			$('.wapper .w_img li').eq(mun).siblings().fadeOut();
			$('.wapper .title li').eq(mun).addClass('current');
			$('.wapper .title li').eq(mun).siblings().removeClass('current');
		},2000)
	}
	fade();
	//鼠标移入关掉定时器，移出去开启定时器
	$('.wapper').hover(function() {
		clearInterval(timer1);
	}, function() {
		fade();
	});
// footer鼠标移入加阴影
	tool.alterClass('.con_m_left .l_left','current-shadow');
//头顶图片切换
	var timer;
	var num=0;
	var arr=['智利','法国','日本','台湾','香港']
	function go(){
		timer=setInterval(function(){
			var w=$('.hander_img_ul li img').width();
			if(num++>3){
				num=0;
				$('.hander_img_ul').css('left', -num*w);
				num=1;
			}
			$('.hander_img_ul').animate({'left':-num*w});
			if(num==4){
				$('.txt').attr("placeholder",arr[0]);
				$('.text_paint').eq(0).fadeIn();
				$('.text_paint').eq(0).siblings('.text_paint').fadeOut(2000);
			}
			$('.txt').attr("placeholder",arr[num]);
			$('.text_paint').eq(num).fadeIn();
			$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
		},3000)
	}
	go();

	$('.hander_img').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});

// 点击左右切换图片
		$('.left').click(function() {
			var w=$('.hander_img_ul li img').width();
			num--;
			if(num<0){
				num=4;
				$('.hander_img_ul').css('left', -num*w);
				num=3;
			}
			if(num==4){
				$('.txt').attr("placeholder",arr[0]);
				$('.text_paint').eq(0).fadeIn();
				$('.text_paint').eq(0).siblings('.text_paint').fadeOut(1000);
			}
				$('.hander_img_ul').animate({'left':-num*w});
			$('.txt').attr("placeholder",arr[num]);
			$('.text_paint').eq(num).fadeIn();
			$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
		});

	$('.right').click(function(event) {
		var w=$('.hander_img_ul li img').width();
		num++;
		if(num>4){
			num=0;
			$('.hander_img_ul').css('left', -num*w);
			num=1;
		}
		if(num==4){
			$('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(1000);
		}
		$('.hander_img_ul').animate({'left':-num*w});
		$('.txt').attr("placeholder",arr[num]);
		$('.text_paint').eq(num).fadeIn();
		$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
	});
	tool.rollIn();
})();