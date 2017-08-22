// Logic
// For all search results with class '.s-srch-result-guide', move to top of ".s-srch-results" if value if input#s-lg-srch-input-q = "apa"


$( document ).ready(function() {
if ($('#s-lg-srch-input-q').val().toLowerCase() == "apa") {
  if ($("li[data-source='1558']").hasClass("active")) {
      $(".s-srch-results").prepend($(".s-srch-result-guide:contains('APA Style Guide')").closest(".s-srch-result"))
  }
}
})
