/* TODO:

- films on demand iframe replacement
- Check if course is an ONL course
- Add all other dbs not subscribed to by regionals (I guess)
- add ebrary title lookup upon failure
- try webhook for request article
*/

function libraryLinkFix() {
    var campusRegexp = /(nmiz|denz|pvdz|cltz)/;
    var campuses = ['pvdz', 'cltz', 'nmiz', 'denz'];
    var links = document.querySelectorAll('a');

    links.forEach(function(pageLink, i) {
        if (campusRegexp.test(pageLink.href) || pageLink.href.includes('ebookcentral')) {
            // Create link wrapper, add title
            //pageLink.href = pageLink.href.toLowerCase();
            var fourLinks = document.createElement("div");
            var linkTitle = document.createElement("span");
            linkTitle.textContent = "Library Links: ";
            linkTitle.classList.add('lib-link-title');
            fourLinks.insertBefore(linkTitle, fourLinks.firstChild);
            fourLinks.classList.add('lib-link-btns');
            // check links to see if are library links
            var match = campusRegexp.exec(pageLink.href)
            var origLink = pageLink.href;
            // iterate over campuses
            campuses.forEach(function(campus, i) {
                // Make some function-level functions and variables
                // Function to generate missing article message (DRY, etc)
                function makeMissingArticleMsg() {
                    var missingArticle = pageLink.textContent;
                    var articleRequestMsg = "Hi, I need access to this resource for my course. Thanks! The title of the resource is here: " + missingArticle;
                    newLink.href = "mailto:dmeincke@jwu.edu?subject=" + campus + " request for resource&body=" + articleRequestMsg;
                    if (newLink.classList)
                        newLink.classList.add('request-link-btn');
                    else
                        newLink.className += ' ' + 'request-link-btn';
                    newLink.textContent += ": Request Article";
                };
                //Create links
                var newLink = document.createElement("a");
                newLink.innerHTML = campus.replace('z', '').toUpperCase();
                newLink.target = "_blank";
                // make new link
                newLink.href = origLink.replace(/nmiz|denz|pvdz|cltz/, campus);
                //Style links
                if (newLink.classList)
                    newLink.classList.add('four-link-btn');
                else
                    newLink.className += ' ' + 'four-link-btn';


                // Generalize regex search and replace for url fragments. Input order is clt, den, nmi, pvd
                function regexSwapper(cltFrag, dnvFrag, nmiFrag, pvdFrag) {
                    var regexp = new RegExp("(" + cltFrag + ")|(" + dnvFrag + ")|(" + nmiFrag + ")|(" + pvdFrag + ")");
                    var linkSrc = pageLink.href;
                    if (regexp.test(linkSrc)) {
                        var match = regexp.exec(pageLink.href)[0];
                        if (campus == "cltz") {
                            newLink.href = newLink.href.replace(match, cltFrag);
                        } else if (campus == "denz") {
                            newLink.href = newLink.href.replace(match, dnvFrag);
                        } else if (campus == "nmiz") {
                            newLink.href = newLink.href.replace(match, nmiFrag);
                        } else if (campus == "pvdz") {
                            newLink.href = newLink.href.replace(match, pvdFrag);
                        }
                    }
                };




                if (newLink.href.includes("gale")) {
                    regexSwapper('prov43712', 'denv8636', 'nort5426', 'prov43712');
                }
                // Run proquest generalized regex search
                if (newLink.href.includes("proquest")) {
                    regexSwapper('accountid=151086', 'accountid=187070', 'accountid=187069', 'accountid=1363');
                }
                // Fix ebrary (NEw)
                if (newLink.href.includes("ebookcentral") | newLink.href.includes("ebrary")) {
                    regexSwapper('jwucltz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwucharlotte', 'jwudenz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-denver', 'jwunmiz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-northmiami', 'ebookcentral.proquest.com/lib/jwu');
                }
                // Credo regex swap
                if (newLink.href.includes("credo")) {
                    regexSwapper('institutionId=8948', 'institutionId=8946', 'institutionId=8947', 'institutionId=4944');
                }
                // RKMA regex swap
                if (newLink.href.includes("rkma.com")) {
                    regexSwapper('/jwucharlotte/', '/jwudenver/', '/jwunorthmiami/', '/jwu/');
                }
                // Fix Films on demand (NEW)
                if (newLink.href.includes("fod.infobase")) {
                    regexSwapper('wID=239260', 'wID=240032', 'wID=238548', 'wID=99165');
                }
                // Fix Global Road Warrior
                if (newLink.href.includes("globalroadwarrior")) {
                    regexSwapper('c=jwuclt', 'c=jwuden', 'c=jwunmi', 'c=jwu');
                }
                // Check EBSCO Dbs in other libraries.... if not subscribed to add a blank box
                // Check MLA EBSCO (only pvd and den get)
                if (newLink.href.includes("ebsco")) {
                    // mzh is MLA, not in NMI or CLT
                    if (newLink.href.includes("mzh")) {
                        if (campus == "nmiz" || campus == "cltz") {
                            makeMissingArticleMsg();
                        }
                    }
                    // Criminal Justice Abstracts with Full Text (EBSCO) ...i3h
                    // Only pvd gets this
                    if (newLink.href.includes("i3h")) {
                        if (campus == "nmiz" || campus == "cltz" || campus == "denz") {
                            makeMissingArticleMsg();
                        }
                    }
                };
                // Add the online campus link
                if (campus == 'pvdz') {
                    var onlLink = newLink.cloneNode(true);
                    onlLink.textContent = 'ONL';
                    fourLinks.appendChild(onlLink);
                }
                
                fourLinks.appendChild(newLink);
            })
            pageLink.parentNode.appendChild(fourLinks);
            pageLink.removeAttribute("href");
            pageLink.style.textDecoration = "none";
            pageLink.style.color = "#555";
        }
    });







    // Films on Demand Video Widget check and replace
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(frame, i) {

        if (frame.src.includes('fod.infobase.com/OnDemandEmbed')) {
            var vidSrc = frame.src;
            // Get paramets from FoD widget so to make new campus-specific widgets or links
            // Grabbed this function  from stackoverflow: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
            function getParameterByName(name, url) {
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }


            var vidToken = getParameterByName('token', vidSrc);
            var wID = getParameterByName('wID', vidSrc);


            // Now create links to popout to external campus-specific video
            var vidLinks = document.createElement('div');
            campuses.forEach(function(campus, i) {
                var newLink = document.createElement('a');
                newLink.textContent = 'Open Video: ' + campus.replace('z', '').toUpperCase();
                newLink.href = vidSrc;
                console.log(vidSrc);
                newLink.href = vidSrc.replace(/nmiz|denz|pvdz|cltz/, campus);
                fodLinkFrags = {'cltz':'wID=239260', 'denz' :'wID=240032', 'nmiz': 'wID=238548', 'pvdz':'wID=99165'};
                newLink.href = newLink.href.replace(/wID=239260|wID=240032|wID=238548|wID=99165/, fodLinkFrags[campus]);
                //newLink.href.replace
                console.log(fodLinkFrags[campus]);
                newLink.target = "_blank";
                if (newLink.classList)
                    newLink.classList.add('four-link-btn');
                else
                    newLink.className += ' ' + 'four-link-btn';
                vidLinks.appendChild(newLink);
                if (campus == 'pvdz') {
                    var onlLink = newLink.cloneNode(true);
                    onlLink.textContent = 'Open Video: ONL';
                    vidLinks.appendChild(onlLink);
                };
            });

            frame.parentNode.appendChild(vidLinks);

        }
    });
};

function addLibLinkStyle() {
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://s3.amazonaws.com/libapps/sites/538/include/bb-inject-css.css");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
// // Function to call when page is ready
// document.addEventListener("DOMContentLoaded", function() {
// 	libraryLinkFix();
// 	addLibLinkStyle();
// });
