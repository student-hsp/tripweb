window.tool=(function () {
  var tool={};
  tool.smallShowHide=function(selector,disSelector){
    $(selector) .hover(function() {
      $(disSelector).show();
    }, function() {
      $(disSelector).hide();
    });
  };
  tool.alterClass=function (selector,classNa){
    $(selector).hover(function() {
      $(this).addClass(classNa)
    }, function() {
      $(this).removeClass(classNa)
    });
  };
//nav导航
  tool.rollIn=function () {
    tool.smallShowHide('.tour_fixed ul li:nth-of-type(2)','.tour_app');
    $(window).scrollTop()>=800?$('.tour_fixed').css('display', 'block'):$('.tour_fixed').css('display', 'none');
    $(window).scroll(function(event) {
      if($(window).scrollTop()>=800){
        $('.tour_fixed').css('display', 'block');
      }else{
        $('.tour_fixed').css('display', 'none');
      }
    });
    $('.tour_fixed ul li:nth-of-type(1)').click(function(event) {
      $('html,body').animate({'scrollTop':'0'}, 500)
    });
    $('.tour_fixed li').hover(function() {
      $(this).css({'background': '#07AE72','color':'#fff'});
      $(this).children('i').addClass('tour_shake');
    }, function() {
      $(this).css({'background': '#fff','color':'#b2b2b2'});
      $(this).children('i').removeClass('tour_shake');
    });
  }
  tool.showHide=function () {
    $('.nav>li span').mouseenter(function(event) {
      $(this).parent().parent().children('div').show();
      $(this).parent().parent().siblings().children('div').hide();
    });
    $('.nav>li').mouseleave(function(event) {
      $(this).children('div').hide();
    });
  };
    tool.navSearch=function(){
      var inp=0;
      $('.nav_search').hover(function(event) {
        inp=0;
        $('.nav_search input').stop().animate({'width': '150px'}, 200)
      },function(event){
        if(inp==0){
          $('.nav_search input').stop().animate({'width': '0px'}, 200)
        }else{
          $('.nav_search input').css('width','150px');
        }
      });
      $('.nav_search input').click(function(event) {
        inp=1;
        return false;
      });
      $(document).click(function(event) {
        inp=0;
        $('.nav_search input').stop().animate({'width': '0px'}, 200)
      });
  };
    tool.alterCss=function (selector,obj,obj2) {
      $(selector).hover(function() {
        $(selector).css(obj);
      }, function() {
        $(selector).css(obj2);
      });
    }
  return tool;
})();


