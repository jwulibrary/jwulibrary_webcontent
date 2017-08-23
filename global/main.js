









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
    // var whyUse = ["Get answers!", "DO STUFF"]
    // randWhy = whyUse[Math.floor(Math.random() * whyUse.length)]
    // $('#faq-splash').append(randWhy)
    //     .hide().fadeIn(1000);

    topics = [
        ['29562', '#university-info-card-detail'],
        ['29560', '#library-info-card-detail'],
        ['29589', '#textbook-info-card-detail'],
        ['29592', '#studyroom-info-card-detail'],
        ['29585', '#researchbasics-info-card-detail'],
        ['29581', '#faculty-info-card-detail'],
        ['29583', '#researchguides-info-card-detail']



    ]

    topics.forEach(function(t) {
        $.ajax({
            url: "https://api2.libanswers.com/1.0/faqs?iid=4&topic_id=" + t[0] + "&sort=updated&sort_dir=desc",
            dataType: 'jsonp',
            success: function(rawJsonp) {
                faqList = shuffle(rawJsonp.data.faqs).slice(0, 7);
                faqList.forEach(function(entry) {
                    $(t[1] + " .topic-link-wrap").append('<li><a class="topic-faq-link pull-left" href="' + entry.url.public + '">' + entry.question + '</li>');
                });

            }
        })
    });



}




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



allFaqs = ["How can I get access to EasyBib EDU?", "Do you have any resources to teach me new software or coding languages? What is Lynda.com?", "What is my library barcode for?", "What is my library barcode for?",
    "What is searched in WorldCat Discovery?", "What is searched in WorldCat Discovery?", "How do I search a specific database through WorldCat?", "How do I find full-text, peer-reviewed articles using WorldCat?",
    "How do I search for ebooks in Worldcat?", "How do I search for journals in Worldcat?", "What is my professor's email address?", "What is my professor's email address?",
    "How do I use Pubmed to find full-text articles, or request an article through Inter-Library Loan (ILL)?", "How do I schedule library orientation for faculty/staff?", "How do I take the 2016 Library Satisfaction Survey?",
    "I have a chef's table coming up and need some wooden boards engraved. Where would I go for that?", "How do I nominate a JWU student for recognition as a good citizen of JWU Library?",
    "Do you have a policy for behavior in the library?", "How do I book an appointment with a Writing Coach at the JWU Writing Lab?",
    "Can you tell me where I can find the professional vocabulary in the JWU library web site? I think they are called the ESL word lists?", "Where do I find the link to the Threshold Achievement Test?",
    "May I make an appointment with a librarian to get research help?", "I need to use the SRDS Local Market Audience Analyst and it doesn't seem to be working.",
    "My professor wants me to read A Doll's House by Henrik Ibsen. Do you have that online?", "My instructor wants me to read a book that is on AccessMedicine. How do I get to that?", "How do I use databases for marketing research?",
    "Who do I contact to put items on reserve for my class?", "How long can I keep my items on reserve?", "How quickly can my reserve items be processed for circulation?",
    "What is the policy for requesting and borrowing library materials from Bryant University?", "How can I access Clinical Key?", "I need to view Ch. 8 questions for 9780077525262...do you have that?",
    "What is the policy for requesting and borrowing library materials from the University of Rhode Island (URI)?", "Does the Library have a service policy?", "Does the library have a technology plan?",
    "Can I get academic tutoring at JWU?", "How do I view library databases being trialed for future consideration?", "What is the Everything tab (OneSearch)?", "I have a history paper to do. What database should I use?",
    "I'm looking for info about the Master of Science in Physician Assistant Studies program and what resources are available for PA students and faculty.", "How do I write a business plan?",
    "Do you have historical information about Johnson & Wales University?", "I've completed my JWU dissertation and am preparing to publish it. What should I do now?", "How do I connect my game console to the JWU campus network?",
    "I need info about this year's Wildcat Wahoo!", "How can I search newspapers online? I'm looking for the Boston Globe, Providence Journal, and the Wall Street Journal.",
    "How do I find resources and databases to use for my project in HOSP3050: Hospitality Strategic Marketing?", "Where is the library tutorial that teaches me how to find an article in EBSCO and email myself the MLA citation?",
    "How do I find a specific source in Lexis Nexis? (including American Jurisprudence and the Rhode Island State Statutes)", "Why doesn't the library carry a copy of the textbook I need?",
    "Where can I find information about graduation ceremonies?", "I want to read the First Year Reads book.  Do you have it?", "How do I access the baking and pastry formulas online?",
    "Where do students log in to take the Project SAILS Information Literacy Assessment?", "How can I fix my library account issues when the Library is closed over Winter Break?",
    "Where did our mascot, Wildcat Willie, come from? What's the history of the JWU mascot?", "Do you recommend any citation makers for MLA or APA works cited and references pages?",
    "How do I reserve presentation or meeting space on campus?", "May I bring my class to the library even if we aren’t there for a library instruction session?", "Do we have access to the Chronicle of Higher Education?",
    "Does the library have graphic novels or comic books?", "I'm having trouble using the ESHA software. How do I save a recipe or an ingredient in The Food Processor?", "Who are the buildings at Johnson & Wales named for, and why?",
    "How do I find the yield or percentage yield for ingredients?", "How do I get to the Meat Buyer's Guide?", "How do I use Google Scholar to search for articles?", "Do you sell school supplies at the library?", "What is HELIN?",
    "What's the Wildcat Welcome? Where do I get info about moving into my residence hall, bus schedules, campus activities, etc.?", "How do I find industry ratios?", "How do I find company ratios?",
    "I need articles from the New York Times. How can I get them?", "I'm an online student. How do I find my library barcode?", "How do I find interviews?", "What is the library's mission?",
    "Does the library have Cornell Hospitality Quarterly or Cornell Hotel and Restaurant Administration Quarterly?", "How (and when) can I instant message the library?", "Can I borrow e-books from the JWU Library for use on my e-reader?",
    "How do I find information on private companies?", "Where can I find the Journal of the Academy of Nutrition and Dietetics (was Journal of the American Dietetics Association)?",
    "Does the JWU Library have a privacy policy in place for reference questions conducted over Instant Message (IM)?", "What is the Stillwell Prize?", "How can I register to vote in Rhode Island?",
    "What's the difference between a research article and a review article?", "What's an annotated bibliography?",
    "How much does it cost to park on the street Downcity? When are the hours for meters, and which dates are parking holidays?", "How do I find biographies?", "I need articles from the Wall Street Journal. How can I get them?",
    "How do I get to the Opposing Viewpoints database?", "I heard you have a Starbucks at the Downcity Library now! Is that true?", "Where can I find food culture information?", "How do I get to the JWU library web site?",
    "Is there a commuter lounge at JWU?", "Which databases does the Articles & Journals tab search?", "Where can I find information on green marketing, green consumerism, companies' sustainability policies, and related topics?",
    "How much money did people make in the past? What did goods and services cost?", "What's the value of the dollar against foreign currencies?",
    "Where can I find information on online social networking and its impacts, both positive and negative?", "What does this word mean? I need a definition of a concept.", "Where can I find information about sustainability?",
    "As an instructor, may I legally copy and distribute copyrighted material to my students?", "Where do I go to sign up for internships?", "How do I find biographies of corporate CEOs?",
    "How can I post a persistent link to an article in a library database?", "I need to use Women's Wear Daily. Do you have it at the library?", "How do I check out a book from the library?",
    "I need to use the Standard Rate & Data Service (SRDS). Do you have that?", "How do I find the full-text of an article? I can only see the abstract.", "How do I borrow library books as an online student?",
    "I'm a faculty member. How do I put things on reserve for my class?", "Is the library on Twitter? Can I ask questions on Twitter?",
    "Where can I find information on the Federal Reserve? I need current and historical discount rates, and the names of current and former Board Members.", "How can I get a parking pass to park my car on campus?",
    "Where can I find out the average GPA of Johnson & Wales students?", "Where can I find menu templates?", "Does the library have access to JSTOR?", "How do I set up the Gale AccessMyLibrary App on my iPhone or Android device?",
    "How do I write a resume or cover letter? Is there a way to get help with this?", "How do I use Turnitin.com?", "I lost something at the library. Do you have it?", "How do I find information on groups or associations?",
    "I am a staff member, and I want to use request a book from another library, but my barcode is not be recognized. How can I fix this?", "How do I find product market share information?", "What are the library's winter break hours?",
    "I need to watch a DVD called Shackleton’s Voyage of Endurance for my LEAD2001 class. Do you have it?", "Where can a graduate student get writing help and tutoring?", "How do I find empirical articles in the library databases?",
    "How do I find primary sources? What is a primary source?", "How many students are enrolled at JWU? What countries are they from? What ethnicities are represented?",
    "How can I find Harvard Business Case Studies? And the Harvard Business Review?", "Where can I find recipe templates?",
    "How do I find travel books or guidebooks for cities or countries? I need something like Fodor's or Lonely Planet.", "What's the maximum number of credits for which you can enroll per term?", "How do I add money to my laundry card?",
    "Where is the BI room? When is my BI? My class is scheduled to be in there.", "How do I get a library card?", "How can I find jwuLink?", "Can I eat in the library? Do you allow food or drinks?",
    "What are LibGuides? How do I get to them?", "How do I find information about the residence halls?", "How do I find a topic for my research paper?",
    "Does the library have headphones, a charger, graphing calculator, etc, that I can borrow?", "How can I contact a library staff member?", "Can I use my JWU student library card in the summer even if I am not taking classes?",
    "Which librarian should I contact if I'm a faculty member in a particular school or department?", "What's LexisNexis?", "Can I use the library if I am not a JWU student?",
    "Does the library have software available for check out or download?", "I need information about the Presidents of the United States.", "How do I find information on my research topic?",
    "How do I know if a web site is a reliable or credible source? What about using Wikipedia?", "What's a library database? Why is using it different or better than searching Google?",
    "I want to do research on a company. Do you have the databases Business Source Complete or Business & Company Resource Center?", "What is IBISWorld? Does the library have it?",
    "How do I login to the library databases from off campus?", "What are the gym hours?", "Why doesn't my JWU ID card give me access to the Yena Center (or the Friedman Center)?", "How do I print in the library?",
    "I'm trying to learn a foreign language. Do you have CDs or language learning software?", "I need tutoring in one of my classes. Are there tutors on campus?",
    "Do you have practice exams, test taking prep books, guides to tests like the GRE, GMAT, PRAXIS, MCAT, LSAT, etc.?", "How do I find information on graduate schools or programs?", "What newspapers do you subscribe to?",
    "Can I return my book at a JWU library if it's from another HELIN library? Can I return a book I got from Downcity at Harborside & vice versa?", "Where can I find recipes?", "I need help citing sources for my paper!",
    "How can I learn more about financial ratios?", "Where can I find industry profiles?", "How do I find company profiles?", "What's a SWOT analysis? How do I find one?", "How can I ask a librarian for help?",
    "How do I contact the Library?", "What is InterLibrary Loan (ILL)? Who can use it? How do I submit an ILL request? Does it cost anything?",
    "How do I schedule a library instruction session? I am a faculty member and would like to set up a library session for my class.", "What are CRIARL privileges?", "Can I reserve the conference room in the library?",
    "Where can I find the ScholarsArchive@JWU?", "I heard you have something called the Scholars Archive or Scholarly Archive. What is that?", "When is the doctor on campus? How do I contact Health Services?",
    "How do I register for classes?", "What's MRI+, how do I login, and how do I use it?", "I need to eat on campus! What's on the menu today?", "How do I get to the English 1020 libguides?",
    "How do I contact the bookstore? What are their hours?", "How much are overdue fines? What do I do about my library fines?", "How do I get to ulearn?", "Can I check out a magazine, journal, or newspaper?",
    "Can I check out a reference book? What books can't be checked out?", "Is there a book drop at the library?", "Does the library have DVDs?",
    "How long does a book request take to be delivered to the library? How do I know when my book request arrives?", "How do I find literary criticism?", "I need directions to the library.", "Can I ride RIPTA with my student ID?",
    "How do I find the Student Handbook & Planner?", "Where can I find course catalogs?", "Where's the academic calendar for this year?", "How do I format references or citations in APA style?", "What's the Text a Librarian number?",
    "Does the library have audiobooks that I can listen to or download?", "Can I play the TAP CD in the library computers?", "How do I know if the university is closed or classes are cancelled in bad weather?",
    "Can I go to the Brown Libraries? Or request a book from Brown?", "How many books may I take out?", "What kind of software is on the library computers?", "Is your menu collection online?", "Do you have movies I can watch online?",
    "How do I get to the public folders?", "How do I get Datamonitor (now called MarketLine) reports online from the library?", "How do I get access to Hoover's?", "Are there computers in the library?", "Does the library have copiers?",
    "How do I find company income statements or other financial data?", "Does the library have color printers?", "How do I find demographics?", "When does the add/drop period end?", "What are the deadlines for paying for classes?",
    "What is a trade magazine or trade journal?", "What is a scholarly journal (sometimes called peer reviewed or refereed)?", "Where is the Center for Academic Support?", "Where can I find the bus schedule for JWU buses?",
    "I am a professor trying to access the library's databases and I can't get in. Is there a problem with my library account?", "How can I find articles in the library databases?",
    "How do I login to library computers? I don't remember how to sign on or what my username and password are.", "How can I renew my Library Account? Or get an account if I don't have one?",
    "Where can I find job descriptions? Or career and salary information?", "Can non-affiliates use the JWU Library?", "What services are available for JWU alumni?", "I am not a JWU student.  Can I use a computer at the JWU Library?",
    "What's an e-book? What e-books do you have?", "Is there a limit on the number of books I can request?", "Can I borrow books from the other Johnson & Wales campuses?", "How do I access my library account?",
    "How do I see what books I’ve checked out?", "Do you have my textbook? Did my professor put my textbook or anything else on course reserve?", "Can I check out books from any other libraries?",
    "Can I borrow an ethernet cable from the library?", "Does the library have access to the wireless network?", "Can I print from my laptop to a printer in the library?", "Can I print my resume on resume paper at the Library?",
    "Can I borrow supplies from the library?", "I am getting a Forbidden 403 error message when I type in my barcode. What does that mean?", "What time do the computer labs open and close?", "Does the Library have a fax machine?",
    "Did the book I requested arrive yet?", "How do I renew my books?", "Where do I find price sheets?", "How do I find my book on the shelf?", "How long can I renew books for?", "How long can I check out books for?",
    "How do I request a book?", "How do I find dissertations?", "What is a NAICS code?", "Do you have any books I can read for fun -- fiction, novels, best sellers? Can I go to the local public library?", "How do I find books?",
    "How can I find information about doing business in and traveling in another country?", "What textbooks do I need for my classes?", "How do I access Richard K. Miller market industry reports?",
    "Does the library have group study rooms? How do I reserve one?", "Can you help me with MLA citations and creating a works cited page?", "Where are the Advertising Redbooks?",
    "What's my library barcode number and where do I find it?", "How can I get a job at the library?", "Does the library have a scanner?", "What are the library's hours?"
]



    //
    // definegrid = function() {
    //     var browserWidth = $(window).width();
    //     if (browserWidth >= 1001)
    //     {
    //         pageUnits = 'px';
    //         colUnits = 'px';
    //         pagewidth = 960;
    //         columns = 6;
    //         columnwidth = 140;
    //         gutterwidth = 24;
    //         pagetopmargin = 35;
    //         rowheight = 20;
    //         gridonload = 'off';
    //         makehugrid();
    //     }
    //     if (browserWidth <= 1000)
    //     {
    //         pageUnits = '%';
    //         colUnits = '%';
    //         pagewidth = 94;
    //         columns = 2;
    //         columnwidth = 48;
    //         gutterwidth = 4;
    //         pagetopmargin = 35;
    //         rowheight = 20;
    //         gridonload = 'off';
    //         makehugrid();
    //     }
    //     if (browserWidth <= 768)
    //     {
    //         pageUnits = '%';
    //         colUnits = '%';
    //         pagewidth = 96;
    //         columns = 2;
    //         columnwidth = 49;
    //         gutterwidth = 2;
    //         pagetopmargin = 35;
    //         rowheight = 20;
    //         gridonload = 'off';
    //         makehugrid();
    //     }
    // }
    // $(document).ready(function() {
    //     definegrid();
    //     setgridonload();
    // });
    //
    // $(window).resize(function() {
    //     definegrid();
    //     setgridonresize();
    // });



    $(document).ready(function() {
$("#s-la-public-header").hide();
$("#s-la-page-title-bar").hide();
$('#s-la-bc').hide();



})


// MUSTACHE templates
function loadHeader() {
  var template = $('#header-content').html();
  var header= {
            headercontent: " <nav class=\"navbar navbar-default\"> <div class=\"container-fluid\"> <div class=\"row visible-xs  mobile-header-wrap\"> <a href=\"#\"><img class=\"header-logo img-responsive\" src=\"https://cdn.rawgit.com/jwulibrary/libanswers/development/library-identifier-whiteandorange.svg\"></a> </div> <!-- Brand and toggle get grouped for better mobile display --> <div class=\"row header-menu1\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".to-collapse\" aria-expanded=\"false\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class=\"\"> <ul class=\"nav navbar-nav\"> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle nav-page-title\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\"How Do I?\" (LibAnswers)<span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a href=\"http://pvd.library.jwu.edu/homepage\" target=\"_blank\">Library Home (LibGuides)</a></li> <li><a href=\"http://jwu-ri.libcal.com/\" target=\"_blank\">Reservations and Hours (LibCal)</a></li> <li><a href=\"http://jwu-ri.libanswers.com/\" target=\"_blank\">\"How Do I?\" (LibAnswers)</a></li> <!--  <li role=\"separator\" class=\"divider\"></li> <li><a href=\"#\">Separated link</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a href=\"#\">One more separated link</a></li>  --> </ul> </li> <li id=\"hours-nav-alt\"><a href=\"http://jwu-ri.libcal.com/hours/\" target=\"_blank\"><span class=\"glyphicon glyphicon-time\"></span> <b>Today's Hours </b></a>&nbsp;&nbsp;&nbsp;</li> </ul> <ul class=\"nav navbar-nav navbar-right collapse navbar-collapse to-collapse\"> <li class=\"dropdown \"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-education\"></span>  Databases <span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a href=\"http://pvd.library.jwu.edu/az.php\" target=\"_blank\">All Databases</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=19278\" target=\"_blank\">Business</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=79408\" target=\"_blank\">Criminal Justice</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=79132\" target=\"_blank\">General</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=19279\" target=\"_blank\">Education</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=19276\" target=\"_blank\">Hospitality</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=19295\" target=\"_blank\">Marketing</a></li> <li><a href=\"http://pvd.library.jwu.edu/az.php?s=75458\" target=\"_blank\">Psychology</a></li> </ul> </li> <li> <!-- Place this script as near to the end of your BODY as possible. --> <a href=\"https://us.libraryh3lp.com/chat/jwu_prov_vr_1@chat.libraryh3lp.com?skin=27008\" target=\"_blank\"><span class=\"glyphicon glyphicon-comment\"></span> Chat</a></li> </ul> </div> <!-- /.navbar-collapse --> </div> <div class=\"row  collapse navbar-collapse header-menu2 to-collapse\"> <div class=\"header2-wrap\"> <div class=\"navbar-header col-xs-12 col-sm-12 col-md-2 col-lg-2\"> <a class=\"navbar-brand hidden-xs \" href=\"http://pvd.library.jwu.edu/homepage\" target=\"_blank\"><img class=\"header-logo\" src=\"https://cdn.rawgit.com/jwulibrary/libanswers/development/library-identifier-whiteandorange.svg\"></a> </div> <div id=\"primary-nav\" class=\"col-xs-12 col-sm-12 col-md-10 col-lg-8 \"> <ul class=\"nav navbar-nav navbar-right\"> <!--TODO: KELLY LINKS to edit if you feel like it :- ) --> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-search\"></span> Find<span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'articles') ;\" href=\"https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=31h&db=b5h&db=pdh&db=ehh&db=bth&db=i3h&db=eoah&db=eric&db=ffh&db=funk&db=8gh&db=khh&db=hjh&db=lxh&db=ulh&db=f5h&db=cmedm&db=mih&db=mth&db=prh&db=bwh&db=s3h&db=tth&db=fsr&db=cja&db=nlebk&db=e000xna&db=hev&db=lfh&db=pzh&db=trh&db=cms&db=mzh&db=ufh\" target=\"_blank\">Articles</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'books') ;\" href=\"https://jwupvd.on.worldcat.org/advancedsearch\" target=\"_blank\">Books and Media</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'journals ') ;\" href=\"https://jwupvd.on.worldcat.org/atoztitles/#journal\" target=\"_blank\">Journal Titles</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'databases') ;\" href=\"http://pvd.library.jwu.edu/az.php\" target=\"_blank\">Databases</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'reserves') ;\" href=\"http://pvd.library.jwu.edu/reserves\" target=\"_blank\">Course Reserves</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'sa') ;\" href=\"http://scholarsarchive.jwu.edu/\" target=\"blank\">ScholarsArchive</a></li> </ul> </li> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <span class=\"glyphicon glyphicon-user\"></span> Get Help <span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'chat') ;\" href=\"https://us.libraryh3lp.com/chat/jwu_prov_vr_1@chat.libraryh3lp.com?skin=21252\" target=\"_blank\">Chat</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'appointment') ;\" href=\"http://jwu-ri.libcal.com/appointments/\" target=\"_blank\">Research Appointment</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'writing_lab') ;\" href=\"http://pvd.library.jwu.edu/writinglab\" target=\"_blank\">Writing Lab</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'guides') ;\" href=\"http://pvd.library.jwu.edu/libguides\" target=\"_blank\">Research Guides</a></li> <li> <a onclick=\"ga('send', 'event', 'header', 'click', 'faq') ;\" href=\"http://jwu-ri.libanswers.com/\">\"How Do I?\" (LibAnswers)</a> </li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'online') ;\" href=\"http://pvd.library.jwu.edu/online/welcome\">Online Learners</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'tutorials') ;\" href=\"http://pvd.library.jwu.edu/tutorials/libraryvideos\" target=\"_blank\">Tutorials</a></li> </ul> </li> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-pencil\"></span> Services <span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'account') ;\" href=\"https://jwupvd.on.worldcat.org/myaccount\" target=\"_blank\">My Account</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'reserves ') ;\" href=\"http://pvd.library.jwu.edu/reserves\" target=\"_blank\">Course Reserve</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'ill') ;\" href=\"https://jwu-ri.libanswers.com/faq/141890\" target=\"_blank\">Interlibrary Loan</a></li> <!-- <li><a href=\"#\">Suggest a Purchase</a></li> <li><a href=\"#\">Technology Lending</a></li> --> <li role=\"separator\" class=\"divider\"></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'study_rooms') ;\" href=\"http://jwu-ri.libcal.com/booking/downcity\" target=\"_blank\">Study Rooms</a></li> </ul> </li> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About<span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'contact') ;\" href=\"https://jwu-ri.libanswers.com/faq/141891\" target=\"_blank\">Contact Us</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'directions') ;\" href=\"https://jwu-ri.libanswers.com/faq/141870?m=p\">Directions</a></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'staff') ;\" href=\"https://jwu-ri.libanswers.com/faq/141919\" target=\"_blank\">Staff Directory</a></li> <li> <a onclick=\"ga('send', 'event', 'header', 'click', 'studentjobs') ;\" href=\"http://jwu-ri.libanswers.com/faq/141800\">Student Employment</a> </li> <li role=\"separator\" class=\"divider\"></li> <li><a onclick=\"ga('send', 'event', 'header', 'click', 'hours') ;\" href=\"http://jwu-ri.libcal.com/hours/\" target=\"_blank\">Hours</a></li> <!--  <li><a href=\"#\">Directories</a></li> --> </ul> </li> </ul> </div> </div> </div> <!-- /.container-fluid --> </div> </nav> "

};


  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, header);
  $('#header').html(rendered);


  $.ajax({
      url: "https://api3.libcal.com/api_hours_today.php?iid=1433&lid=0&format=json&jsoncallback=?%22",
      dataType: 'jsonp',
      success: function(rawJsonp) {
          calData = rawJsonp;

          dcTime = calData.locations[0];
          hbTime = calData.locations[1];


          $("#hours-nav").append("<li class='text-center'>Downcity: " + dcTime.rendered + "</li>").append("<li class='text-center'>Harborside: " + hbTime.rendered + "</li>");
          $("#hours-nav-alt").append("<span class='text-center'>Downcity: " + dcTime.rendered + "</span>").append("<span class='text-center'> | Harborside: " + hbTime.rendered + "</span>");
      }



  });
}
