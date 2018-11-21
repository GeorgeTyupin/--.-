function get(){var a=getComputedStyle(document.getElementById("button1"));
/*a= document.getElementById("button1").style.display*/
               if(a.display=="none"){document.getElementById("button1").style.display="block"} else{document.getElementById("button1").style.display="none"}
              } 

function get(name){var a=getComputedStyle(document.getElementById(name));
/*a= document.getElementById("button1").style.display*/
               if(a.display=="none"){document.getElementById(name).style.display="block"} else{document.getElementById(name).style.display="none"}
              } 
/*function get(){var g= document.getElementById("button2").style.display; if(g=="none"){document.getElementById("button2").style.display="block"} else{document.getElementById("button2").style.display="none"}
              } */
