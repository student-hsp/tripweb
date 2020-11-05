(function () {
	$('#nav li').click(function(){
		$(this).addClass('change');
		$(this).siblings().removeClass('change');
		var num=$(this).index();
		$('.loginbox>div').eq(num).show();
		$('.loginbox>div').eq(num).siblings('.loginbox>div').hide();
	})

	$('button').hover(function(){
		$(this).css('background','#4dc575');
	})
	$('button').mouseleave(function(){
		$(this).css('background','#3f9f5f');
	})

	$('#way1 li:nth-of-type(1)').hover(function(){
		$(this).css('background','#12b6f5');
	})
	$('#way1 li:nth-of-type(2)').hover(function(){
		$(this).css('background','#de5145');
	})
	$('#way1 li:nth-of-type(3)').hover(function(){
		$(this).css('background','#ff7a09');
	})
	$('#way1 li:nth-of-type(4)').hover(function(){
		$(this).css('background','#279f4f');
	})
	$('#way1 li').mouseleave(function(){
		$(this).css('background','#d7d7d7');
	})


	$('#way2 li:nth-of-type(1)').hover(function(){
		$(this).css('background','#12b6f5');
	})
	$('#way2 li:nth-of-type(2)').hover(function(){
		$(this).css('background','#de5145');
	})
	$('#way2 li:nth-of-type(3)').hover(function(){
		$(this).css('background','#ff7a09');
	})
	$('#way2 li:nth-of-type(4)').hover(function(){
		$(this).css('background','#279f4f');
	})
	$('#way2 li').mouseleave(function(){
		$(this).css('background','#d7d7d7');
	})
	console.log(canvas.numBase("canvas"));
	var setIn;
	$("#baseNum").click(function () {
		obj.num2=obj.mathRand();
		setTimeout(function () {
			$(".change2 input").eq(2).val(obj.num2).removeClass().addClass("input_active1");
		},5000)
		$(this).attr("disabled",true).css({"background":"#3f9f5f","opacity":"0.5"});
		var a=60;
		setIn=setInterval(()=>{
			a--;
			this.innerText=a+"秒";
			if(!a){
				$(this).attr("disabled",false);
				$(this).html("发送验证码").css("opacity","1");
				clearInterval(setIn);
			}
		},1000);
	})
	$(".change2 #btn").click(function () {
		var inpt=0;
		Array.prototype.slice.call($(".change2 input")).forEach((p)=>{
			if(!$(p).hasClass("input_active1")){
				$(p).removeClass().addClass("input_active2");
				inpt++;
			}
		})
		if(inpt!=0){
			alert("信息有误请检查后再提交哟")
		}else {
			alert("登陆成功");
			Array.prototype.slice.call($(".change2 input")).forEach((p)=>{
				$(p).removeClass().val("");
				clearInterval(setIn);
				$("#baseNum").html("发送验证码").css("opacity","1");
			})
		}
		console.log($(".change2 input"));
		console.log(inpt)
	})
	console.log($(".change2 input").eq(1).hasClass("input_active1"));


})();