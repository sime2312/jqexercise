$(document).ready(function() {

    $('#submit').click(function() {
  
      var name = $('#name');
      var email = $('#email');
      var number = $('#phone');
      var message = $('#message-area');
      var required = [name, email, number];
  
      for (var i = 0; i < required.length; i++){
        if(required[i].val() === ""){
          $('#message').html("Please Fill Out Required Fields");
          $('#message').addClass("warning");
          required[i].prev().addClass("warning");
          
        }else{
          $('#message').removeClass("warning");
          required[i].prev().removeClass("warning");
        
        }
  
      }
  if (!$('label').hasClass('warning')){
  $('#form').remove();
  $('h2').html("Thanks for your feedback!");
  }
    });
  
  });