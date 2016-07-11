$(function(){
  ekran();
  baslik();
  $(window).on("resize", ekran);
  $(window).on("resize", uyar);
  $(window).on("load", uyar);
});

function ekran(e){
	var taraW = $(window).width();
	var eW = screen.width;
  if(taraW < 768){
    $("link#csslink").attr('href','../css/sayfamob.css');
  }
  else {
    $("link#csslink").attr('href','../css/sayfatam.css');
  }
  $("div.resim img").each(function(){
    var $t=$(this);
    if(taraW <= 768){
      $t.attr('src','../img/i_'+$t.attr("alt")+'768.jpg');
    }
    if(taraW <= 480){
      $t.attr('src','../img/i_'+$t.attr("alt")+'480.jpg');
    }
    if(taraW > 768){
      $t.attr('src','../img/i_'+$t.attr("alt")+'f.jpg');
    }
    
    $("div#icerik h1").css('width',taraW);
  });
}

function uyar() {
  
  $("div.resim span.caption").each(function(){
    $(this).css('width',$(this).siblings('img').width());
  });
  
  $("div.resim").each(function(){
    if ( $("div#icerik").width() - $(this).children('img').width() > 400 ) {
      $(this).css('float','left');
      $(this+"+ p").css('float','left');
    }
  });
  
  var s=setTimeout("uyar()",100);
  baslik();
}

function baslik() {
  var pad = parseInt($("div#icerik h1").css('paddingTop')) + parseInt($("div#icerik h1").css('paddingBottom'));
  var h = $("div#icerik h1").height();
  
  $("div#baslik").css('height',pad+h+2);
}