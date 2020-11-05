(function () {
// nav栏鼠标经过
	tool.showHide();
	$(function() {
		$('.txt_wapper ul li').removeClass('move');
	})
	var num=0;
	var timer;
	function go(){
		timer=setInterval(function(){
			if(num++>4){
				num=0;
				$('.img_wapper ul').css('left', -num*229);
				num=1;
			}
			if(num==5){
				$('.txt_wapper ul li').eq(0).animate({'left':0,'opacity':1 });
				$('.txt_wapper ul li').eq(0).siblings('li').css({'left':100,'opacity':0 });

				$('.choose>span').eq(0).css('background', '#07AE72');
				$('.choose>span').eq(0).siblings().css('background', 'rgba(61,61,61,15)');
			}
			$('.img_wapper ul').animate({'left':-num*229});

			$('.txt_wapper ul li').eq(num).animate({'left':0,'opacity':1 });
			$('.txt_wapper ul li').eq(num).siblings('li').css({'left':100,'opacity':0 });

			$('.choose>span').eq(num).css('background', '#07AE72');
			$('.choose>span').eq(num).siblings().css('background', 'rgba(61,61,61,15)');
			console.log(num);

		},2000)
	}
	go();
	$('.choose span').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});
// 点击切换图片
	$('.choose span').click(function(event) {
		num=$(this).index();
		$(this).css('background', '#07AE72');
		$(this).siblings().css('background', 'rgba(61,61,61,15)');
		$('.img_wapper ul').animate({'left':-num*229});
		$('.txt_wapper ul li').eq(num).animate({'left':0,'opacity':1 });
		$('.txt_wapper ul li').eq(num).siblings('li').css({'left':100,'opacity':0 });
	});
	function hove(btn){
		$(btn).hover(function() {
			$(this).animate({'bottom':'-10px'}, 300);
		}, function() {
			$(this).animate({'bottom':0}, 300);
		});
	}
	hove(".btn1");
	hove(".btn2");
	$('.btn3').hover(function() {
		$('.scan').css({'transform':'scale('+1+')'});
		$('.scan').hover(function(){
			$('.scan').css('display', 'block');
		},function(){
			$('.scan').css({'transform':'scale('+0+')'});
		})
	});
})();