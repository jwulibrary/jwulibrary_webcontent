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



});





// MUSTACHE templates
function loadHeader() {
	var template = $('#header-content').html();
	var header = {
		headercontent: `
		<nav class="navbar navbar-default container-fluid">

				<div class="row visible-xs  mobile-header-wrap"> <a href="#"><img class="header-logo img-responsive" src="https://cdn.rawgit.com/jwulibrary/libanswers/development/library-identifier-whiteandorange.svg"></a> </div>
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="row header-menu1">
					<div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".to-collapse" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>				</div>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="">
						<ul class="nav navbar-nav">
							<li class="dropdown"> <a href="#" class="dropdown-toggle nav-page-title" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">"How Do I?" (LibAnswers)<span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="http://pvd.library.jwu.edu/homepage" target="_blank">Library Home (LibGuides)</a></li>
									<li><a href="http://jwu-ri.libcal.com/" target="_blank">Reservations and Hours (LibCal)</a></li>
									<li><a href="http://jwu-ri.libanswers.com/" target="_blank">"How Do I?" (LibAnswers)</a></li>
									<!--  <li role="separator" class="divider"></li> <li><a href="#">Separated link</a></li> <li role="separator" class="divider"></li> <li><a href="#">One more separated link</a></li>  -->
								</ul>
							</li>
							<li id="hours-nav-alt"><a href="http://jwu-ri.libcal.com/hours/" target="_blank"><span class="glyphicon glyphicon-time"></span> <b>Today's Hours </b></a>&nbsp;&nbsp;&nbsp;</li>
						</ul>
						<ul class="nav navbar-nav navbar-right collapse navbar-collapse to-collapse">
							<li class="dropdown "> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-education"></span>  Databases <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="http://pvd.library.jwu.edu/az.php" target="_blank">All Databases</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=19278" target="_blank">Business</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=79408" target="_blank">Criminal Justice</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=79132" target="_blank">General</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=19279" target="_blank">Education</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=19276" target="_blank">Hospitality</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=19295" target="_blank">Marketing</a></li>
									<li><a href="http://pvd.library.jwu.edu/az.php?s=75458" target="_blank">Psychology</a></li>
								</ul>
							</li>
							<li>
								<!-- Place this script as near to the end of your BODY as possible. --><a href="https://us.libraryh3lp.com/chat/jwu_prov_vr_1@chat.libraryh3lp.com?skin=27008" target="_blank"><span class="glyphicon glyphicon-comment"></span> Chat</a></li>
						</ul>
					</div>
					<!-- /.navbar-collapse -->
				</div>
				<div class="row  collapse navbar-collapse header-menu2 to-collapse">
					<div class="header2-wrap">
						<div class="navbar-header col-xs-12 col-sm-12 col-md-2 col-lg-2"> <a class="navbar-brand hidden-xs " href="http://pvd.library.jwu.edu/homepage" target="_blank"><img class="header-logo" src="https://cdn.rawgit.com/jwulibrary/libanswers/development/library-identifier-whiteandorange.svg"></a> </div>
						<div
						 id="primary-nav" class="col-xs-12 col-sm-12 col-md-10 col-lg-8 ">
							<ul class="nav navbar-nav navbar-right">
								<!--TODO: KELLY LINKS to edit if you feel like it :- ) -->
								<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-search"></span> Find<span class="caret"></span></a>
									<ul class="dropdown-menu">
										<li><a onclick="ga('send', 'event', 'header', 'click', 'articles') ;" href="https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=31h&db=b5h&db=pdh&db=ehh&db=bth&db=i3h&db=eoah&db=eric&db=ffh&db=funk&db=8gh&db=khh&db=hjh&db=lxh&db=ulh&db=f5h&db=cmedm&db=mih&db=mth&db=prh&db=bwh&db=s3h&db=tth&db=fsr&db=cja&db=nlebk&db=e000xna&db=hev&db=lfh&db=pzh&db=trh&db=cms&db=mzh&db=ufh" target="_blank">Articles</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'books') ;" href="https://jwupvd.on.worldcat.org/advancedsearch" target="_blank">Books and Media</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'journals ') ;" href="https://jwupvd.on.worldcat.org/atoztitles/#journal" target="_blank">Journal Titles</a></li>
										<li role="separator" class="divider"></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'databases') ;" href="http://pvd.library.jwu.edu/az.php" target="_blank">Databases</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'reserves') ;" href="http://pvd.library.jwu.edu/reserves" target="_blank">Course Reserves</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'sa') ;" href="http://scholarsarchive.jwu.edu/" target="blank">ScholarsArchive</a></li>
									</ul>
								</li>
								<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-user"></span> Get Help <span class="caret"></span></a>
									<ul class="dropdown-menu">
										<li><a onclick="ga('send', 'event', 'header', 'click', 'chat') ;" href="https://us.libraryh3lp.com/chat/jwu_prov_vr_1@chat.libraryh3lp.com?skin=21252" target="_blank">Chat</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'appointment') ;" href="http://jwu-ri.libcal.com/appointments/" target="_blank">Research Appointment</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'writing_lab') ;" href="http://pvd.library.jwu.edu/writinglab" target="_blank">Writing Lab</a></li>
										<li role="separator" class="divider"></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'guides') ;" href="http://pvd.library.jwu.edu/libguides" target="_blank">Research Guides</a></li>
										<li> <a onclick="ga('send', 'event', 'header', 'click', 'faq') ;" href="http://jwu-ri.libanswers.com/">"How Do I?" (LibAnswers)</a> </li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'online') ;" href="http://pvd.library.jwu.edu/online/welcome">Online Learners</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'tutorials') ;" href="http://pvd.library.jwu.edu/tutorials/libraryvideos" target="_blank">Tutorials</a></li>
									</ul>
								</li>
								<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-pencil"></span> Services <span class="caret"></span></a>
									<ul class="dropdown-menu">
										<li><a onclick="ga('send', 'event', 'header', 'click', 'account') ;" href="https://jwupvd.on.worldcat.org/myaccount" target="_blank">My Account</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'reserves ') ;" href="http://pvd.library.jwu.edu/reserves" target="_blank">Course Reserve</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'ill') ;" href="https://jwu-ri.libanswers.com/faq/141890" target="_blank">Interlibrary Loan</a></li>
										<!-- <li><a href="#">Suggest a Purchase</a></li> <li><a href="#">Technology Lending</a></li> -->
										<li><a onclick="ga('send', 'event', 'header', 'click', 'study_rooms') ;" href="http://jwu-ri.libcal.com/booking/downcity" target="_blank">Study Rooms</a></li>
										<li role="separator" class="divider"></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'instruction_request') ;" href="http://pvd.library.jwu.edu/il/request" target="_blank">Schedule Instruction (for Faculty)</a></li>
									</ul>
								</li>
								<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About<span class="caret"></span></a>
									<ul class="dropdown-menu">
										<li><a onclick="ga('send', 'event', 'header', 'click', 'contact') ;" href="https://jwu-ri.libanswers.com/faq/141891" target="_blank">Contact Us</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'directions') ;" href="https://jwu-ri.libanswers.com/faq/141870?m=p">Directions</a></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'staff') ;" href="https://jwu-ri.libanswers.com/faq/141919" target="_blank">Staff Directory</a></li>
										<li> <a onclick="ga('send', 'event', 'header', 'click', 'studentjobs') ;" href="http://jwu-ri.libanswers.com/faq/141800">Student Employment</a> </li>
										<li role="separator" class="divider"></li>
										<li><a onclick="ga('send', 'event', 'header', 'click', 'hours') ;" href="http://jwu-ri.libcal.com/hours/" target="_blank">Hours</a></li>
										<!--  <li><a href="#">Directories</a></li> -->
									</ul>
								</li>
							</ul>
					</div>
				</div>
			</div>

		</nav>

		`

	};


	Mustache.parse(template); // optional, speeds up future uses
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
};



function loadFooter() {
	var template = $('#footer-content').html();
	var footer = {
		footercontent: "<div id=\"footer\" class=\"container-fluid\"> <div class=\"footer-top row\"> <div class=\"footer-info col-sm-4\"> <a class=\"footer-logo\" href=\"https://www.jwu.edu/\"> <!-- <img src=\"https://cdn.rawgit.com/jwulibrary/libanswers/development/JWULogo-White.svg\" alt=\"JWU Logo\" /> --> <img src=\"https://cdn.rawgit.com/jwulibrary/libanswers/2b3639e1/JWULogo-White.svg\" alt=\"JWU Logo\" /> </a> <div class=\"footer-contact\"> <div class=\"footer-contact-group\"> <p>Downcity Library:</p> <p>111 Dorrance Street Providence, Rhode Island 02903</p> <p>401-598-1121</p> </div> <div class=\"footer-contact-group\"> <p>Harborside Library:</p> <p>321 Harborside Boulevard Providence, RI 02905</p> <p>401-598-1466</p> </div> </div> </div> <div class=\"footer-links col-xs-12 col-sm-8\"> <div class=\"row\"> <ul class=\"footer-nav col-md-3 col-sm-5 col-xs-6\"> <li> <a href=\"http://jwu-ri.libanswers.com/a.php?qid=3690\">Location and Directions</a> </li> <li> <a href=\"https://jwu-ri.libanswers.com/faq/141908\">Off-Campus Access</a> </li> <li> <a href=\"http://jwu-ri.libanswers.com/a.php?qid=17269\">Staff Directory</a></li> <li> <a href=\"http://jwu-ri.libcal.com/hours/\">Hours</a> </li> <li> <a href=\"http://jwu-ri.libanswers.com/faq/141800\">Student Employment</a> </li> <li> <a href=\"https://jwulibpvd.afford.com/\">Pay Bills and Fines</a> </li> </ul> <ul class=\"footer-nav col-md-3 col-sm-5 col-xs-6\"> <li> <a href=\"http://jwu-ri.libanswers.com/\">FAQ</a></li> <li> <a href=\"http://pvd.library.jwu.edu/homepage#\">Chat with a Librarian</a></li> <li><a href=\"http://pvd.library.jwu.edu/tutorials/libraryvideos\">Tutorials</a></li> <li> <a href=\"http://pvd.library.jwu.edu/reserves\">Course Reserves</a> </li> <li> <a href=\"http://jwu-ri.libanswers.com/a.php?qid=7831\">Interlibrary Loan (ILL)</a> </li> <li> <a href=\"http://pvd.library.jwu.edu/writinglab\">Writing Lab</a></li> </ul> <ul class=\"footer-nav col-md-3 col-sm-5 col-xs-6\"> <li> <a href=\"http://pvd.library.jwu.edu/az.php\">Databases</a> </li> <li> <a href=\"https://jwupvd.on.worldcat.org/advancedsearch\">Catalog</a> </li> <li> <a href=\"https://jwupvd.on.worldcat.org/atoztitles/#journal\">Journals</a> </li> <li> <a href=\"https://jwupvd.on.worldcat.org/myaccount\">My Account</a></li> <li> <a href=\"http://jwu-ri.libcal.com/booking/downcity\">Study Rooms</a></li> <li> <a href=\"http://jwu-ri.libcal.com/appointments/\">Research Appointment</a></li> </ul> <ul class=\"footer-nav  col-md-3 col-sm-5 col-xs-6\"> <h4>Locations</h4> <li> <a href=\"http://culinary.org/\">Culinary Museum</a> </li> <li> <a href=\"http://clt.library.jwu.edu/\">Charlotte</a> </li> <li> <a href=\"http://den.library.jwu.edu/\">Denver</a> </li> <li> <a href=\"http://nmi.library.jwu.edu/\">North Miami</a></li> <li> <a href=\"http://pvd.library.jwu.edu/\">Providence</a> </li> </ul> </div> </div> </div> <div class=\"footer-bottom row\"> <div class=\"col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xs-offset-1 col-sm-offset-4  col-md-offset-4  col-lg-offset-8    \"> <div class=\"row\"> <div class=\"col-xs-3 col-md-2\"> <a aria-label=\"Facebook\" class=\"footer-social-link\" href=\"https://www.facebook.com/JWULibrary\" target=\"_blank\"> <button> <svg class='svg-social-footer' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0\" fill-rule=\"nonzero\"/></svg> </button>                                        </a> </div> <div class=\"col-xs-3 col-md-2\"> <a aria-label=\"Twitter\" class=\"footer-social-link\" href=\"https://twitter.com/jwulibrary\" target=\"_blank\"> <button> <svg class='svg-social-footer' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z\" fill-rule=\"nonzero\"/></svg> </button>                                    </a> </div> <div class=\"col-xs-3 col-md-2\"> <a aria-label=\"Instagram\" class=\"footer-social-link\" href=\"https://www.instagram.com/jwupvdlibrary\" target=\"_blank\"> <button> <svg class='svg-social-footer' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z\"/></svg> </button>                                    </a> </div> <div class=\"col-xs-3 col-md-2\"> <a aria-label=\"YouTube\" class=\"footer-social-link\" href=\"https://www.youtube.com/jwulibrarypvd\" target=\"_blank\"> <button> <svg class='svg-social-footer' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z\"/></svg> </button> </a> </div> </div> </div> </div> </div>"
	};


	Mustache.parse(template); // optional, speeds up future uses
	var rendered = Mustache.render(template, footer);
	$('#footer').html(rendered);

}







function loadSearchbox() {
	var template = $('#searchbox-content').html();
	var searchbox = {
		searchboxcontent: `

		 <div id="jwuul-searchbox">
<!--headers-->
		  <ul id="search-tabs" class="nav nav-tabs nav-justified">
		  <li class="active"><a href="#everything-tab" data-toggle="tab"><i class="fa fa-search"></i> <span>Everything</span></a></li>
		   <li><a href="#articles-tab" data-toggle="tab"><i class="fa fa-newspaper-o"></i> <span>Articles</span></a></li>
		   <li><a href="#books-tab" data-toggle="tab"><!-- <span class=Bookshicon glyphicon-book"></span> --><i class="fa fa-book"></i> <span>Books</span></a></li>
		   <li><a href="#videos-tab" data-toggle="tab"><!-- <span class=Bookshicon glyphicon-book"></span> --><i class="fa fa-film"></i> <span>Videos</span></a></li>
		    </ul>
			<!--Tab Content-->
		    <div class="tab-content">
			 <!-- TAB 1 -->
			 <div id="everything-tab" class="searchbox-tab-pane tab-pane active"> <h4 class="search-name">Books, Articles, Ebooks, Journals, Videos</h4> <div class="row"> <form action="https://jwupvd.on.worldcat.org/search" id="worldcat-search-form" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage',  'everything-search', val); "> <div class="search input-group hidden-xs"> <label for="library-search-box" class="sr-only"> Find books, Articles, Media, and More </label> <input type="hidden" name="format" value="all" /> <input type="text" id="library-search-box" class="form-control input " name="queryString" placeholder="Type Search Words Here" /> <span class="input-group-btn"> <button type="submit" class=" btn    search-submit"> <i class="fa fa-search fa-lg " aria-hidden="true"></i> Search </button> </span> </div> </form> <form action="https://jwupvd.on.worldcat.org/search" id="worldcat-search-form" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage',  'everything-search', val); "> <div class="search input-group visible-xs"> <label for="library-search-box" class="sr-only"> Books, Articles, Ebooks, Journals, Videos </label> <input type="hidden" name="format" value="all" /> <input type="text" id="library-search-box" class="form-control input " name="queryString" placeholder="Enter title, author, keyword, ISBN, etc. of the article, journal, book, movie, etc." /> <span class="input-group-btn"> <button type="submit" class=" btn    search-submit"> <i class="fa fa-search fa-lg " aria-hidden="true"></i> Search </button> </span> </div> </div> </form> <div class="row"> <div class="pull-right advanced-search"><a href="https://jwupvd.on.worldcat.org/advancedsearch" class="for-un-blanking" target="_blank">Advanced Search</a></div> </div> </div> <!-- TAB 2 --> <!-- <div id="articles-tab" class=" searchbox-tab-pane tab-pane "> <h4 class="search-name">Find articles <small style="margin-left:1em; padding:.1em;" class = "bg-info text-muted"><a href="https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=bth">Or search EBSCO articles only</a></small></h4> <div class="row"> <form action="https://jwupvd.on.worldcat.org/search" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage', 'article-search', val); "> <div class="search input-group hidden-xs"> <label for="library-search-box" class="sr-only"> Find articles </label> <input type="hidden" name="format" value="Artchap" /> <input type="text" id="library-search-box" class="form-control input " name="queryString" placeholder="Enter the article title, journal name, author, subject terms, or keywords" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-newspaper-o fa-lg"></i> Search </button> </span> </div> <div class="form-check pull-right  hidden-xs"> <label class="form-check-label"> <input name="subformat" id="ebook-checkbox" type="checkbox" class="searchbox-checkbox"  value="Jrnl::jrnl_digital">Journal Titles Only </label> </div> </form> <form action="https://jwupvd.on.worldcat.org/search" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'mobile-homepage', 'article-search', val); "> <div class="search input-group visible-xs"> <label for="library-search-box" class="sr-only"> Find Articles </label> <input type="hidden" name="format" value="Artchap" /> <input type="text" id="library-search-box" class="form-control input " name="queryString" placeholder="Enter the article title, journal name, author, subject terms, or keywords" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-newspaper-o fa-lg"></i> Search </button> </span> </div> </form> </div> <div class="row"> <div class="pull-right advanced-search"><a href="https://jwupvd.on.worldcat.org/advancedsearch" target="_blank">Advanced Search</a></div> </div> </div> --> <script src="https://support.ebscohost.com/eit/scripts/ebscohostsearch.js" type="text/javascript"></script> <div id="articles-tab" class=" searchbox-tab-pane tab-pane "> <h4 class="search-name">Find articles using EBSCO <small style="margin-left:1em; font-size:.6em;" class = " text-muted"><a id="search-switcher" href="#articles-tab">try the article search in WorldCat (BETA)</a></small> </h4> <div id='ebsco-row' class="row"> <form onsubmit="return ebscoHostSearchGo(this); var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage', 'article-search', val);" class="for-un-blanking" target="_blank" method="post"> <input id="ebscohostwindow" name="ebscohostwindow" type="hidden" value="0" /> <input id="ebscohosturl" name="ebscohosturl" type="hidden" value="https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=31h&db=b5h&db=pdh&db=ehh&db=bth&db=i3h&db=eoah&db=eric&db=ffh&db=funk&db=8gh&db=khh&db=hjh&db=lxh&db=ulh&db=f5h&db=cmedm&db=mih&db=mth&db=prh&db=bwh&db=s3h&db=tth&db=fsr&db=cja&db=nlebk&db=e000xna&db=hev&db=lfh&db=pzh&db=trh&db=cms&db=mzh&db=ufh" /> <input id="ebscohostsearchsrc" name="ebscohostsearchsrc" type="hidden" value="url" /> <input id="ebscohostsearchmode" name="ebscohostsearchmode" type="hidden" value="+" /> <input id="ebscohostkeywords" name="ebscohostkeywords" type="hidden" value="" /> <div class="search input-group hidden-xs"> <label for="library-search-box" class="sr-only"> Find articles </label> <input type="text" id="ebscohostsearchtext" class="form-control input " name="ebscohostkeywords" placeholder="Enter the article title, journal name, author, subject terms, or keywords" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-newspaper-o fa-lg"></i> Search </button> </span> </div> <div class="form-check pull-right  hidden-xs"> <!-- <label class="form-check-label"> <input name="subformat" id="ebook-checkbox" type="checkbox" class="searchbox-checkbox"  value="Jrnl::jrnl_digital">Journal Titles Only </label> --> </div> </form> <form onsubmit="return ebscoHostSearchGo(this);" target="_blank" class="for-un-blanking" method="post"> <input id="ebscohostwindow" name="ebscohostwindow" type="hidden" value="0" /> <input id="ebscohosturl" name="ebscohosturl" type="hidden" value="https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=31h&db=b5h&db=pdh&db=ehh&db=bth&db=i3h&db=eoah&db=eric&db=ffh&db=funk&db=8gh&db=khh&db=hjh&db=lxh&db=ulh&db=f5h&db=cmedm&db=mih&db=mth&db=prh&db=bwh&db=s3h&db=tth&db=fsr&db=cja&db=nlebk&db=e000xna&db=hev&db=lfh&db=pzh&db=trh&db=cms&db=mzh&db=ufh" /> <input id="ebscohostsearchsrc" name="ebscohostsearchsrc" type="hidden" value="url" /> <input id="ebscohostsearchmode" name="ebscohostsearchmode" type="hidden" value="+" /> <input id="ebscohostkeywords" name="ebscohostkeywords" type="hidden" value="" /> <div class="search input-group visible-xs"> <label for="library-search-box" class="sr-only"> Find Articles </label> <input type="text" id="ebscohostsearchtext" class="form-control input " name="ebscohostkeywords" placeholder="Enter the article title, journal name, author, subject terms, or keywords" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-newspaper-o fa-lg"></i> Search </button> </span> </div> </form> </div> <div class="row"> <div class="pull-right advanced-search"><a href="https://jwupvdz.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&db=31h&db=b5h&db=pdh&db=ehh&db=bth&db=i3h&db=eoah&db=eric&db=ffh&db=funk&db=8gh&db=khh&db=hjh&db=lxh&db=ulh&db=f5h&db=cmedm&db=mih&db=mth&db=prh&db=bwh&db=s3h&db=tth&db=fsr&db=cja&db=nlebk&db=e000xna&db=hev&db=lfh&db=pzh&db=trh&db=cms&db=mzh&db=ufh" class="for-un-blanking" target="_blank">Advanced Search</a></div> </div> </div> <div id="books-tab" class=" searchbox-tab-pane tab-pane "> <h4 class="search-name">Find books</h4> <div class="row"> <form action="https://jwupvd.on.worldcat.org/search" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage', 'book-search', val); "> <div class="search input-group hidden-xs"> <label for="library-search-box" class="sr-only"> Find Book </label> <input type="hidden" name="format" value="Book"> <input type="text" id="library-search-box" class="form-control input   " name="queryString" placeholder="Search by title, author, subject, keyword, ISBN, or publisher	" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-book fa-lg"></i> Search </button> </span> </div> <div class="form-check pull-right hidden-xs "> <label class="form-check-label"> <input name="subformat" id="ebook-checkbox" type="checkbox" class="searchbox-checkbox"  value="Book::book_digital">Ebooks Only </label> </div> </form> <form action="https://jwupvd.on.worldcat.org/search" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'mobile-homepage', 'book-search', val); "> <div class="search input-group visible-xs"> <label for="library-search-box" class="sr-only"> Find Book </label> <input type="hidden" name="format" value="Book"> <input type="text" id="library-search-box" class="form-control input   " name="queryString" placeholder="Search by title, author, subject, keyword, ISBN, or publisher	" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-book fa-lg"></i> Search </button> </span> </div> </form> </div> <div class="row"> <div class="pull-right advanced-search"><a href="https://jwupvd.on.worldcat.org/advancedsearch" class="for-un-blanking" target="_blank">Advanced Search</a></div> </div> </div> <div id="videos-tab" class=" searchbox-tab-pane tab-pane "> <h4 class="search-name">Find videos</h4> <div class="row"> <form action="https://jwupvd.on.worldcat.org/search" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'homepage', 'Video-search', val); "> <div class="search input-group hidden-xs"> <label for="library-search-box" class="sr-only"> Find Video </label> <input type="hidden" name="format" value="Video"> <input type="text" id="library-search-box" class="form-control input   " name="queryString" placeholder="Search by title, topic, director, or performer" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-film fa-lg"></i> Search </button> </span> </div> <div class="form-check pull-right hidden-xs "> <label class="form-check-label"> <input name="subformat" id="evideo-checkbox" type="checkbox" class="searchbox-checkbox" value="Video::video_digital">Streaming Only </label> </div> </form> <form action="https://jwupvd.on.worldcat.org/search" class="for-un-blanking" target="_blank" method="get" onsubmit="var val = document.getElementById('library-search-box').value; ga('send', 'event', 'mobile-homepage', 'Video-search', val); "> <div class="search input-group visible-xs"> <label for="library-search-box" class="sr-only"> Find Video </label> <input type="hidden" name="format" value="Video"> <input type="text" id="library-search-box" class="form-control input   " name="queryString" placeholder="Search by title, author, subject, keyword, ISBN, or publisher	" /> <span class="input-group-btn"> <button type="submit" class="btn     search-submit"> <i class="fa fa-film fa-lg"></i> Search </button> </span> </div> </form> </div> <div class="row"> <div class="pull-right advanced-search"><a class="for-un-blanking" href="https://jwupvd.on.worldcat.org/advancedsearch" target="_blank">Advanced Search</a></div> </div> </div>
			 </div>
		  </div>

`
	};

	Mustache.parse(template); // optional, speeds up future uses
	var rendered = Mustache.render(template, searchbox);
	$('#searchbox').html(rendered);


};



function loadRoomBooking() {
	var template = $('#roombooking-content').html();
	var roombooking = {
		roombookingcontent: `
			<div class="librarybox">
				<div class="container-fluid"  id="study-room-links">


						<h3 class='text-center'>Book a Study Room</h3>

						<div class='row'>
						<a class='study-room-link blue-background' href="http://jwu-ri.libcal.com/booking/downcity" onClick="ga('send', 'event', 'schedule', 'click', 'dcstudyroom') ;">Downcity</a>
						</div>

						<div class='row'>
						<a class='study-room-link green-background' href="http://jwu-ri.libcal.com/booking/harborside" onClick="ga('send', 'event', 'schedule', 'click', 'hbstudyroom') ;">Harborside</a>
						</div>

						<h3 class='text-center'>Book an Appointment with a Writing Coach</h3>

						<div class='row'>
						<a class='study-room-link purple-background' href="http://jwu-ri.libcal.com/booking/writinglab_downcity" onClick="ga('send', 'event', 'schedule', 'click', 'wcdc') ;">Downcity </a>
						</div>

						<div class='row'>
						<a class='study-room-link purple-background' href="http://jwu-ri.libcal.com/booking/writinglab_harborside" onClick="ga('send', 'event', 'schedule', 'click', 'wchb') ;">Harborside</a>
						</div>


						<h3 class='text-center'>Book an appointment with a Librarian</h3>

						<div class='row'>
						<a class='study-room-link orange-background' href="http://jwu-ri.libcal.com/appointments/" onClick="ga('send', 'event', 'schedule', 'click', 'researchapp') ;">Research Appointment</a>
						</div>




				</div>
			</div>
			`
	};

	Mustache.parse(template); // optional, speeds up future uses
	var rendered = Mustache.render(template, roombooking);
	$('#roombooking').html(rendered);


};


function loadChatbox() {
	var template = $('#chatbox-content').html();
	var chatbox = {

		chatboxcontent: `

		<div id="chat-wrap">
		<div class="needs-js">chat loading...</div>
		<!-- Place this script as near to the end of your BODY as possible. --><script type="text/javascript">
				(function() {
					var x = document.createElement("script");
					x.type = "text/javascript";
					x.async = true;
					x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "us.libraryh3lp.com/js/libraryh3lp.js?8970";
					var y = document.getElementsByTagName("script")[0];
					y.parentNode.insertBefore(x, y);
				})();
			</script></div>


            `
	};


	Mustache.parse(template); // optional, speeds up future uses
	var rendered = Mustache.render(template, chatbox);
	$('#chatbox').html(rendered);

}



function loadContact() {
	var template = $('#contact-content').html();
	var contact = {

		contactcontent: `


		<div id="ask-us-wrap-desktop" class="librarybox">

				<div id="ask-pics-desktop container-fluid">
					<div class="row">
					<div class="ask-pic col-xs-6 col-sm-4 col-md-3 col-lg-1">
						<div class="row">
							<a class='img-center' href="http://jwu-ri.libanswers.com/a.php?qid=2887" target="_blank" title="Send a Text Message to the Library" onClick="ga('send', 'event', 'askicons', 'click', 'text') ;">
		<svg class='svg-ask-icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>


						<p>Text</p>
							 </a>
						</div>
					</div>
					<div class="ask-pic col-xs-6 col-sm-4 col-md-3 col-lg-1">
						<div class="row">
							<a class='img-center' href="http://jwu-ri.libanswers.com/index#s-la-box-36592" target="_blank" title="E-Mail the Library" onClick="ga('send', 'event', 'askicons', 'click', 'email') ;">
							<svg xmlns="http://www.w3.org/2000/svg" class="svg-ask-icons" viewBox="0 0 512 512"><path d="M448 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128C512 92.7 483.3 64 448 64zM342.7 234.8l135.5-116.1c0.9 3 1.9 6 1.9 9.3v256c0 2.2-0.8 4.2-1.3 6.3L342.7 234.8zM448 96c2.1 0 4 0.8 6 1.2L256 266.9 58 97.2C60 96.8 61.9 96 64 96H448zM33.3 390.3C32.8 388.2 32 386.2 32 384V128c0-3.3 1-6.3 1.9-9.3L169.3 234.8 33.3 390.3zM64 416c-3.2 0-6.2-0.9-9.1-1.8l138.8-158.6 52 44.5C248.6 302.7 252.3 304 256 304s7.4-1.3 10.4-3.9l52-44.5 138.8 158.6C454.2 415.1 451.3 416 448 417H64z"/></svg>

		<p>E-mail</p>
							 </a>
						</div>

					</div>

					<div class="ask-pic col-xs-6 col-sm-4 col-md-3 col-lg-1">
						<div class="row">
							<a class='img-center' href="http://jwu-ri.libanswers.com/a.php?qid=8122" target="_blank" title="Call the Library" onClick="ga('send', 'event', 'askicons', 'click', 'call') ;">
						<svg  class='svg-ask-icons'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
		<p>&nbspCall</p>
						</a>
						</div>

					</div>
					<div class="ask-pic col-xs-6 col-sm-4 col-md-3 col-lg-1">
						<div class="row">
							<a href="http://jwu-ri.libanswers.com/" target="_blank" title="FAQ" onClick="ga('send', 'event', 'askicons', 'click', 'faq') ;">
<svg class='svg-ask-icons'	 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/></svg>
<p>&quot;How Do I?&quot;</p></a>
						</div>

					</div>
					<div class="ask-pic col-xs-6 col-sm-4 col-md-3 col-lg-1">
						<div class="row">
							<a href= "http://pvd.library.jwu.edu/az.php" target="_blank" title="FAQ" onClick="ga('send', 'event', 'askicons', 'click', 'databases') ;">
							<svg xmlns="http://www.w3.org/2000/svg" class="svg-ask-icons" viewBox="2 -12 55 55" xmlns:xlink="http://www.w3.org/1999/xlink" version="1">

							  <path  d="M528 989.8v5.6c5.68.65 10.8 3.13 14.76 6.82 3.97-3.7 9.08-6.17 14.75-6.8v-5.6H528z" transform="translate(-512.857 -978.72)"/>
							  <path  d="M2441.34 1882.7l26-.7c.67 0 1.22.55 1.22 1.22l.7 27.4c0 .68-.54 1.23-1.22 1.23l-27.4-.7c-.68 0-1.22-.55-1.22-1.23l.7-26c0-.67.55-1.2 1.22-1.2z" transform="scale(1.377 .32) rotate(45 3493.97 -1973.796)"/>
							  <path  d="M31.07 9.18l-.36.32 7.9 4.23-.02 7c0 1.27-.98 1.08-.98 2.27v7.08c0 2 2.84 2 2.84 0V23c0-1.1-.96-1.07-.95-2.27V13.5l-8.4-4.3z"/>
							  <path  d="M32.58 8.95a2.6 1.1 0 1 1-5.2 0 2.6 1.1 0 1 1 5.2 0z" transform="translate(.03 -.152)"/>
							</svg>
							<p>Databases</p></a>
						</div>

					</div>

				</div>
			</div>
		</div>



            `
	};


	Mustache.parse(template); // optional, speeds up future uses
	var rendered = Mustache.render(template, contact);
	$('#contact').html(rendered);

}
