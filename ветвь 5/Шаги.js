	function change_one()
                          {
                    
      document.getElementById("img1").src="2.jpg" ;
 document.getElementById("change").innerHTML = "Группировка первичной информации "  ;
 document.getElementById("change 2").innerHTML = "3аписать то что ты на данном этапе о своих родственниках";                              
	}
		function change_two(id){
       /* document.getElementsByClassName("active").classList.remove("active");
        document.getElementsByClassName(id).[0].classList.add("active");  */
        document.getElementById("img1").src="0.jpg" ;    
		document.getElementById("change").innerHTML = "Опрос родственников ";
        document.getElementById("change 2").innerHTML = "Опрос родственников 2";
	}
		function change_three(){
  document.getElementById("img1").src="h1.jpeg" ;    
		document.getElementById("change").innerHTML = "Архивы, музеи, выставки";
        document.getElementById("change 2").innerHTML = "Опрос родственников 3";
            
	}
		function change_four(){
		document.getElementById("img1").src="b.png " ;    
		document.getElementById("change 2").innerHTML = "Интернет, WWW сайты";
        document.getElementById("change 2").innerHTML = "Опрос родственников 4";    
	}
