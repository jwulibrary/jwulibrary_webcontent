// js hacks for libcal
// last edited 1-12-2015


$( document ).ready(function() {
  // Default form hacks
  $("input[name='lname']").attr("placeholder", "Last Initial");
  $("div.s-lc-name").find("span.s-lc-rm-lab").text("First Name, Last Initial *");

});