// Shufffle Function I grabbed from the web
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// Gets info from UNIVERSITY TOPIC from the API


function scrollToAnchor(aid) {
    var aTag = $("div[name='" + aid + "']");


    $('html,body').animate({
        scrollTop: aTag.offset().top
    }, 'slow');
};



$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
    $("#browse-button").click(function() {
        scrollToAnchor("topic-jump");
    });
});




    $(document).ready(function() {
$("#s-la-public-header").hide();
$("#s-la-page-title-bar").hide();
$('#s-la-bc').hide();



})
