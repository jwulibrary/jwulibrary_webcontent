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

function libanswerScrape() {

    $.ajax({
        url: "https://api2.libanswers.com/1.0/faqs?iid=4&sort=totalhits&sort_dir=desc&limit=40",
        dataType: 'jsonp',
        success: function(rawJsonp) {
            topFaqs = rawJsonp.data.faqs;
            randFaq = topFaqs[Math.floor(Math.random() * topFaqs.length)]
            $('#faq-splash').append('<a href="' + randFaq.url.public + '" + target="_blank"> <i style="color:#FFF; font-size:.8em;"class="fa fa-quote-left"></i>  ' + randFaq.question +
                    '  <i style="color:#FFF; font-size:.8em;"class="fa fa-quote-right">')
                .hide().fadeIn(1000);

        }
    });

    topics = [
        ['29562', '#university-info-card-detail'],
        ['29560', '#library-info-card-detail'],
        ['29589', '#textbook-info-card-detail'],
        ['29592', '#studyroom-info-card-detail'],
        ['29585', '#researchbasics-info-card-detail']
    ]

    topics.forEach(function(t) {
        $.ajax({
            url: "https://api2.libanswers.com/1.0/faqs?iid=4&topic_id=" + t[0] + "&sort=updated&sort_dir=desc",
            dataType: 'jsonp',
            success: function(rawJsonp) {
                faqList = shuffle(rawJsonp.data.faqs).slice(0, 7);
                faqList.forEach(function(entry) {
                    $(t[1] + " .topic-link-wrap").prepend('<li><a class="topic-faq-link pull-left" href="' + entry.url.public + '">' + entry.question + '</li>');
                });

            }
        })
    });



}


$(document).ready(function() {
    $('.bxslider').bxSlider({
        easing: 'easeOutElastic',
        speed: 1000,

        auto: true,
        pause: 15000,
        autoHover: true
    });

});


function scrollToAnchor(aid) {
    var aTag = $("div[name='" + aid + "']");


    $('html,body').animate({
        scrollTop: aTag.offset().top
    }, 'slow');
};
