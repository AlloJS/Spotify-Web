

$( "#logo" ).effect( "slide",1000 );
    
$('#hamburger' ).click(function() {
    $( ".item" ).effect( "slide",1000 );
  });

  $('#hamburger' ).click(function(){


  window.addEventListener('scroll',function(e) { 

    screenTop;
 }) 


})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// Form
var email = document.getElementById('email');
var  password = document.getElementById('password');
var conf = document.getElementById('confirm');
var nickname = document.getElementById('nickname');
var inputForm = document.querySelectorAll('.input-form');

for( i = 0; i < inputForm.length; i ++){

    console.log(inputForm[i]);
    if ( email.value === '') {
          inputForm[i].classList.add('red-border');
    }
    
  }

  