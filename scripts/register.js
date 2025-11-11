      // When the login nav is clicked, this happens
      function fadeOut(){
       let elem = document.getElementById("transition-effect-1");
       let elem_2 = document.getElementById("transition-effect-2");
       let elem_3 = document.getElementById("transition-effect-3");
       let elem_4 = document.getElementById("transition-effect-4");

       elem.style.height = 0;
       elem_2.style.height = 0;
       elem_3.style.height = 0;
       elem_4.style.height = "70px";
       
       document.getElementById('formhead').innerHTML = 'login';
      }
      
      //when the register nav  is clicked, this happens
      function fadeIn(){
       let elem = document.getElementById("transition-effect-1");
       let elem_2 = document.getElementById("transition-effect-2");
       let elem_3 = document.getElementById("transition-effect-3");
       let elem_4 = document.getElementById("transition-effect-4");

       
       elem.style.height = '70px';
       elem_2.style.height = '70px';
       elem_3.style.height = '70px';
       elem_4.style.height = 0;
       
       document.getElementById('formhead').innerHTML = 'Register'
      }