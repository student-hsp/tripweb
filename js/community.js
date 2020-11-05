(function () {
	tool.rollIn();
	tool.showHide();
	tool.alterClass('.cmt_center ol li:nth-of-type(1)',"current");
	tool.alterClass('.cmt_center ol li:nth-of-type(2)',"current2");
// ----------img_box的动画---------------
	var timer;
	var num=0;
	function blurred() {
		$('.blur-this').blurr({
			height: 400, // Height, in pixels of this blurred div.
			sharpness: 80, // Sharpness, as a number between 0-100. 100 is very sharp, 0 is extremely blurry
			offsetX: -150, // The x (left - right) offset of the image
			offsetY: 0, // The y (top - bottom) offset of the image
			callback: null // Callback to be called after the blur has been rendered. Recieves the following arguments (href, offsetX, offsetY, sharpness)
		});
	}
	blurred()
	function move(){
		timer=setInterval(function(){
			var num2=num++;
			if(num>4){num=0;}
			$(".mask").remove();
			var src=$('.img img').eq(num).attr("src");
			$(".img_box").prepend("<div class=\"blur-this mask\" data-href=+src+></div>")
			$('.img_box').css('background','url('+src+')');
			$('.mask').attr('data-href',src);
			blurred()
			$('.img img').eq(num2).fadeOut();
			$('.img img').eq(num).fadeIn();
			$('.box_right p').eq(num2).fadeOut();
			$('.box_right p').eq(num).fadeIn();
			$('.box_center .imghead img').eq(num).fadeIn();
			$('.box_center .imghead img').eq(num).siblings().fadeOut();
			$('.box_right ul li').eq(num).css('border','2px solid white').addClass("box_right_befor");
			$('.box_right ul li').eq(num).siblings().css('border','2px solid rgba(0, 0, 0, 0)').removeClass("box_right_befor");
		},2000)
	}

	$('.box_right ul li').hover(function(){
		$(".mask").remove();
		$(this).eq(num).css('border','2px solid white');
		$(this).eq(num).siblings().css('border','2px solid rgba(0, 0, 0, 0)');
		num=$(this).index();
		$('.img img').eq(num).show();
		$('.img img').eq(num).siblings().hide();
		var index=$(this).index();
		var src=$('.box_right ul img').eq(index).attr("src");
		$(".img_box").prepend("<div class=\"blur-this mask\" data-href="+src+"></div>");
		blurred();
		$('.box_right p').eq($(this).index()).siblings("p").stop().fadeOut(500);
		$('.box_right p').eq($(this).index()).stop().fadeIn(500);
		$('.box_center .imghead img').eq($(this).index()).stop().fadeIn(500);
		$('.box_center .imghead img').eq($(this).index()).siblings().stop().fadeOut(500);
		$(this).css('border','2px solid white').addClass("box_right_befor");;
		$(this).siblings().css('border','2px solid rgba(0, 0, 0, 0)').removeClass("box_right_befor");
	});

	move();
	$('.box_center').hover(function(){
		clearInterval(timer);
	});
	$('.box_center').mouseleave(function(){
		move();
	});
	$('#nav li').click(function(){
		num=$(this).index();
		$(this).addClass('border');
		$(this).siblings().removeClass('border');
		$('.center_left>div').eq(num).show();
		$('.center_left>div').eq(num).siblings('div').hide();
		$('.center_left>div').eq(3).show();
	})
// tool.alterClass('.small div',)
	$('.small div').click(function(){
		$(this);
		var small=$(this).parent();
		small.remove();
	});
	tool.alterClass('.bottom','bottomchange');
	tool.alterClass('.right_top span','hover');


})();