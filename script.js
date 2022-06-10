function nonTo() {document.getElementById('tombo').style.display = "none";}
function nonTo2() {document.getElementById('tombo2').style.display = "none";}
 function showTo() {document.getElementById('tombo').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} 
  function showDiv() {document.getElementById('Content').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";document.getElementById('trm').style.display = "none";}
  function iloveu() {if(u==text2.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.opacity = "0";document.getElementById('ftAk').style.opacity = "1";var e1 = document.getElementById('ftAk');e1.classList.add("lopdeg");}
  
  var i=0,text;
  text = ""
  var u=0,text2;
  text2 = ""
  var o=0,text3;
  text3 = "...                                        "
  var a=0,text4;
  text4 = "I Love U "
  var b=0,text6;
  text = ""
  var c=0,text7;
  text = ""
  var d=0,text8;
  text = ""

  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,45);
    }
    if(i==text.length){
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,90);
    }
    if(u==text2.length){
    ketik6();
	 }
  }
  function ketik6() {
    if(b<text6.length){
      document.getElementById("text6").innerHTML += text6.charAt(b);
      b++;
      setTimeout(ketik6,150);
    }
    if(b==text6.length){
    ketik7();
    // duar();
   }
  }
  function ketik7() {
    if(c<text7.length){
      document.getElementById("text7").innerHTML += text7.charAt(c);
      c++;
      setTimeout(ketik7,150);
    }
    if(c==text7.length){
    ketik8();
    // duar();
   }
  }
  function ketik8() {
    if(d<text8.length){
      document.getElementById("text8").innerHTML += text8.charAt(d);
      d++;
      setTimeout(ketik8,4000);
    }
    if(d==text8.length){
    duar();
   }
  }
  function duar() {
    document.getElementById('content').style.backgroundImage = "linear-gradient(white, #C0D7FB,white)";
    document.getElementById('fire').style.opacity = "1";
    // fotoKt();
  }