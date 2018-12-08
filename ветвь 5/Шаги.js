	function change_one()
                          {
                    
      document.getElementById("img1").src="2.jpg" ;
 document.getElementById("change").innerHTML = "Группировка первичной информации "  ;
	}
		function change_two(id){
       /* document.getElementsByClassName("active").classList.remove("active");
        document.getElementsByClassName(id).[0].classList.add("active");  */
        document.getElementById("img1").src="0.jpg" ;    
		document.getElementById("change").innerHTML = "Опрос родственников";
	}
		function change_three(){
  document.getElementById("img1").src="h1.jpeg" ;    
		document.getElementById("change").innerHTML = "Архивы, музеи, выставки";
	}
		function change_four(){
		document.getElementById("img1").src="b.png " ;    
		document.getElementById("change").innerHTML = "Интернет, WWW сайты";
	}
