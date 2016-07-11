/*
  Yazar: Mustafa Enes Ertarhanacý
  Lisans: Ücretsiz, her yerde kullanýlabilir
  Ýletiþim: enes.in
            twitter.com/scriptype
            be.net/scriptype
            scriptyper@gmail.com
  24.07.2013
*/

/* Ayar parametreleri HTML'den kaldýrýlýp buraya eklenebilir
var ayar = {
  otoGec: true, // false: otomatik geçmesin
  gosterSure: 4000, // 1000: 1 saniye, x000: x saniye
  gecSure: 600, // geçiþ efektinin süresi
  genislik: 960,
  yukseklik: 480,
  sagSolDugme: true, // slider'ýn kenarlarýnda saða-sola ilerletme amaçlý oklar çýkýp çýkmamasý.
  panel: false, // true: butonlarý resmin dýþýna al. 20px + buton yüksekliði kadar fazladan yer kaplar.
  dugme: true // false: düðmeleri kaldýr. bu durumda video izlenmeye baþlandýðýnda video panelinden çýkýþ yolu kalmayacaktýr.
}
*/

var tid, num, oto;
var nom=0;
var uz=false;
var $kayac=$("ul#kayac");
var hangisi = Math.max(ayar.genislik,ayar.yukseklik);

$(function() {

  $kayac=$("ul#kayac");
  
  if (ayar.dugme) {
    $kayac.append("<div id='palet'></div>");
    for(var i=0; i<$kayac.find('li').length;i++) {
      $kayac.find('div#palet').append('<span class="yuvar" id="y'+i+'"></span>');
    }
  }
  
  $kayac.append("<div id='bord'></div>")
  
  kay();
  otoGec();
  
  $kayac.find("li")
  .css({
    width: ayar.genislik,
    height: ayar.yukseklik
  });
  
  $kayac.find("img, iframe").css({
    maxWidth: ayar.genislik,
    maxHeight: ayar.yukseklik
  });
  
  $kayac.find("li h2").css({
    fontSize: ayar.genislik/16,
    bottom: hangisi/24,
    right: hangisi/16
  });
  
  if(ayar.sagSolDugme) {
    $kayac.append('<span class="sagsoldugme sold"></span><span class="sagsoldugme sagd"></span>');
    $("span.sagsoldugme").css('top',(ayar.yukseklik/2)-(32)+'px');
    $("span.sold").click(function(){
      nom-=2;
      clearInterval(oto);
      kay();
      otoGec();
    });
    $("span.sagd").click(function(){
      clearInterval(oto);
      kay();
      otoGec();
    });
  }
  
  if (!ayar.panel) {
    $kayac.css({
      width: ayar.genislik,
      height: ayar.yukseklik
    });
  }
  else {
    $kayac.css({
      width: ayar.genislik,
      height: ayar.yukseklik+20+(hangisi/64),
      borderBottomRightRadius: "7px",
      borderBottomLeftRadius: "7px"
    });
  }
  
  $kayac.find("div#palet").css({
    left: (ayar.genislik/2) - (((hangisi/64)+5)*($kayac.find("span.yuvar").length)/2)
  });
  
  $kayac.find("span.yuvar")
  .css({
    width: hangisi/64,
    height: hangisi/64,
    borderRadius: hangisi/64
  })
  .each(function(){
    $(this).click(function(){
      tid=$(this).attr("id");
      num=tid.split("y")[1];
      nom=num;
      clearInterval(oto);
      kay();
      otoGec();
    });
  });
  
  $kayac.find("iframe")
  .hover(function(){
    uz=true;
  },function(){
    uz=false;
  })
  .each(function(){
    var tsrc = $(this).attr('src');
    var sour = tsrc.split("?");
    if(sour[1]) $(this).attr('src',tsrc+'&wmode=transparent');
    else $(this).attr('src',tsrc+'?wmode=transparent');
  });
  
  $(window).on("blur", function(){
    if (uz) clearInterval(oto);
  });
  
});

function otoGec() {
  if ( ayar.otoGec ) {
    oto=setInterval("kay()",ayar.gosterSure);
  }
}

function kay() {
  $kayac.find("span.yuvar:eq("+nom+")").siblings('span').removeClass("yov");
  $kayac.find("span.yuvar:eq("+nom+")").addClass("yov");
  $kayac.find("li").stop().fadeOut(ayar.gecSure);
  $kayac.find("li:eq("+nom+")").stop().fadeIn(ayar.gecSure);
  if ( nom==$kayac.find('li').length-1 ) nom=0;
  else nom++;
}