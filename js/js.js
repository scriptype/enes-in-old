  var bhsc = Math.max($("body").scrollTop(), $("html").scrollTop());
  var toScroll = $("div#htmlintruder").height() - $(window).height();
  
$(function() {
  
  $(window).on("scroll", function(){
    bhsc=Math.max($("body").scrollTop(), $("html").scrollTop());
  });
  
  $(".altac").click(function(){
    if ( bhsc+4 <= toScroll ) {
      $("body, html").animate({
        scrollTop: $("div#footer").offset().top
      }, 200);
    }
    else {
      $("body, html").animate({
        scrollTop: 0
      }, 200);
    }
    $(window).keydown(function(){
      $("body, html").stop(); // çirkinleşmeyelim
    });
  });
  
  $("div.m_kucuk > a").each(function(){
    $(this).css('backgroundImage','url(img/m_'+$(this).attr("rel")+'.jpg)');
  });
  
  $("div#m_fot").css('background','url(img/m_'+$("div#m_fot").attr("rel")+'.jpg) no-repeat center center');

  $(window).on("resize", ekran);
  ekran();
  sticker();
	s=setTimeout("yazilistesi()",100);
});

function ekran(){
  s=setTimeout("yazilistesi()",100);
  bhsc = Math.max($("body").scrollTop(), $("html").scrollTop());
  toScroll = $("div#htmlintruder").height() - $(window).height();
  
  sticker();
}

function yazilistesi() {
  $("ul#m_yazilistesi li")
  .each(function(){
    var padX = parseInt($(this).css('paddingLeft')) + parseInt($(this).css('paddingRight'));
    var padY = parseInt($(this).css('paddingTop')) + parseInt($(this).css('paddingBottom'));
    var tw = $(this).width()+padX;
    var th = $(this).height()+padY;
    $(this).css({
      backgroundSize: tw+"px "+th+"px, auto auto"
    });
  });
}

function sticker() {
  var cH = document.body.clientHeight,
      wH = $(window).height();
  
  if( cH < wH ) { //Sticker
    $("div#footer").css({
      position: "absolute",
      bottom: 0
    });
  }
  else {
    $("div#footer").css({
      position: "static"
    });
  }
  if( cH + $("div#footer").height() >= wH ) {
    $("div#footer").css({
      position: "static"
    });
  }
  
}