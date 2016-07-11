/*
  Yazar: Mustafa Enes Ertarhanacı
  Lisans: Ücretsiz, her yerde kullanılabilir
  İletişim: enes.in
            twitter.com/scriptype
            be.net/scriptype
            scriptyper@gmail.com
  17.08.2013
*/

var

$ = function(x) {
  var sec = document.querySelectorAll(x);
  var arr = [];
  for (var i=0;i<sec.length;i++) { //Nodelist'i Array'a çevir
    arr.push(sec[i]);
  };
  return arr;
},

defs = function(x) {
  if (x=="B" || x=="BIG" || x=="I" || x=="SMALL" || x=="TT" || x=="ABBR" || x=="ACRONYM" || x=="CITE" || x=="CODE" || x=="DFN" || x=="EM" || x=="KBD" || x=="STRONG" || x=="SAMP" || x=="VAR" || x=="A" || x=="BDO" || x=="BR" || x=="IMG" || x=="MAP" || x=="OBJECT" || x=="Q" || x=="SCRIPT" || x=="SPAN" || x=="SUB" || x=="SUP" || x=="BUTTON" || x=="INPUT" || x=="LABEL" || x=="SELECT" || x=="TEXTAREA") {
    return "inline";
  }
  return "block";
};

Array.prototype.css = function(x) {
  var a = this;
    for (var i=0;i<a.length;i++) {
      a[i].style = {};
      var def = a[i].style.cssText;
      a[i].style.cssText = def+';'+x;
    }
    return a[0].style[x];
};

Array.prototype.fadeOut = function(x,y) {
  var a = this;
  for (var i=0;i<a.length;i++) { //geçişi css3 transition özelliği ile yap
    a[i].style.transition="opacity "+x/1000+"s";
    a[i].style.opacity="0";
  }
  var s=setTimeout(function(){
    for (var i=0;i<a.length;i++) {
      a[i].style.display="none";
    }
  },x);
  var t=setTimeout(y,x);
};

Array.prototype.fadeIn = function(x,y){
  var a = this;
  for (var i=0;i<a.length;i++) {
    var d = a[i].nodeName;
    a[i].style.opacity="0";
    a[i].style.transition="opacity "+x/1000+"s";
    a[i].style.display=defs(d);
  };
  var s=setTimeout(function(){
    for (var i=0;i<a.length;i++) {
      a[i].style.opacity="1";
    }
  } ,5); // 5ms gecikme süresi
  var t=setTimeout(y,x);
};

Array.prototype.fadeTo = function(x,y,z){ //x:opacity, y:süre, z:callback
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].style.transition="opacity "+y/1000+"s";
    a[i].style.opacity=x;
  };
  var s=setTimeout(z,y); // callback
};

Array.prototype.hide = function() {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].style.display="none";
  }
};

Array.prototype.show = function() {
  var a = this;
  for (var i=0;i<a.length;i++) {
    var d = a[i].nodeName;
    a[i].style.display=defs(d);
  }
};

Array.prototype.append = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].innerHTML+=x;
  }
};

Array.prototype.prepend = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].innerHTML=x+a[i].innerHTML;
  }
};

Array.prototype.html = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    if(x) a[i].innerHTML=x;
  }
  return a[0].innerHTML;
};

Array.prototype.text = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    if(x) {
      a[i].innerText = x;
      a[i].textContent = x;
    }
  }
  return a[0].innerText || a[0].textContent;
};

Array.prototype.hover = function(x,y) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].onmouseover=x;
    a[i].onmouseout=y;
  }
};

Array.prototype.click = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].onclick=x;
  }
};

Array.prototype.on = function(x,y) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].addEventListener(x,y,false);
  }
};

Array.prototype.addClass = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    a[i].className=a[i].className+' '+x;
  }
};

Array.prototype.removeClass = function(x) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    var s = a[i].className;
    s = s.split(' ');
    var index = s.indexOf(x);
    s.splice(index,1);
    var guncel ="";
    for (var j=0;j<s.length;j++) {
      guncel+=" "+s[j];
    }
    a[i].className=guncel;
  }
};

Array.prototype.attr = function(x,y) {
  var a = this;
  for (var i=0;i<a.length;i++) {
    if(y) a[i].setAttribute(x,y);
  }
  return a[0][x];
}