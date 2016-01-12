// js hacks for libcal
// last edited 1-12-2015


$( document ).ready(function() {
  // Default form hacks
  $("input[name='lname']").attr("placeholder", "Last Initial");
  $("div.s-lc-name").find("label[for='name']").text("First Name, Last Initial *");
  
  // librarian library name add hacks
  $('.s-lc-app-sl[data-n="Lisa Spicola"]').addClass('hb-lib');
  $('.s-lc-app-sl[data-n="Kerry Caparco"]').addClass('hb-lib');
  $('.s-lc-app-sl[data-n="Fred Brown"]').addClass('hb-lib');
  $('.s-lc-app-sl[data-n="Joe Eshleman"]').addClass('dc-lib');
  $('.s-lc-app-sl[data-n="Kelly Faulkner"]').addClass('dc-lib');
  
});