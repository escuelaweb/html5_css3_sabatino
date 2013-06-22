
$(function() {
  $("#open-menu-v").click(function() {
   $(".menu-v").toggleClass("show"); 
   $(".menu:not(.menu-v)").removeClass("show"); 
  }); 
  $("#open-menu").click(function() {
   $(".menu:not(.menu-v)").toggleClass("show");
   $(".menu-v").removeClass("show");  
  });  
});

// $(document).ready(function {

// });