// TODO:
// - Add matches for nmi/dnv/pvd, also add tests for regional campus links
// group links better
// films on demand iframe replacement
// Check if course is an ONL course
// Add all other dbs not subscribed to by regionals

function libraryLinkFix() {
    var campusRegexp = /(nmiz|denz|pvdz|cltz)/;
    var campuses = ['pvdz', 'cltz', 'nmiz', 'denz'];
    var links = document.querySelectorAll('a');

    links.forEach(function(pageLink, i) {
        if (campusRegexp.test(pageLink.href) || pageLink.href.includes('ebookcentral')) {
            // Create link wrapper, add title
            pageLink.href = pageLink.href.toLowerCase();
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



                // Fix Gale regionals
                // if (newLink.href.includes("prov43712")) {
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace("prov43712", "nort5426");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace("prov43712", "denv8636");
                //     }
                // };
                // Run Gale generalized regex search
                //
                if (newLink.href.includes("gale")) {
                    regexSwapper('prov43712', 'denv8636', 'nort5426', 'prov43712');
                }
                // Run proquest generalized regex search
                if (newLink.href.includes("proquest")) {
                    regexSwapper('accountid=151086', 'accountid=187070', 'accountid=187069', 'accountid=1363');
                }

                // Fix ProQuest regionals (checks for PVD only)
                // if (newLink.href.includes("accountid=1363")) {
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace("1363", "187069");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace("1363", "187070");
                //     } else if (campus == "cltz") {
                //         newLink.href = newLink.href.replace("1363", "151086");
                //     }
                // }
                // Fix ProQuest regionals (works on any input link, regardless of campus)
                // var proquestRegexp = /(accountid=1363)|(accountid=187069)|(accountid=187070)|(accountid=151086)/;
                // if (proquestRegexp.test(pageLink.href)) {
                //     var match = proquestRegexp.exec(pageLink.href)[0];
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace(match, "accountid=187069");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace(match, "accountid=187070");
                //     } else if (campus == "cltz") {
                //         newLink.href = newLink.href.replace(match, "accountid=151086");
                //     } else if (campus == "pvdz") {
                //         newLink.href = newLink.href.replace(match, "accountid=1363");
                //     }
                // };





                // Fix ebrary (OLD)
                // if (newLink.href.includes("ebookcentral.proquest.com/lib/jwu")) {
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwunmiz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-northmiami");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwudenz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-denver");
                //     } else if (campus == "cltz") {
                //         newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwucltz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwucharlotte");
                //     }
                // }
                // Fix ebrary (NEw)
                if (newLink.href.includes("ebookcentral") | newLink.href.includes("ebrary")) {
                    regexSwapper('jwucltz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwucharlotte', 'jwudenz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-denver', 'jwunmiz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-northmiami', 'ebookcentral.proquest.com/lib/jwu');
                }
                // Fix Credo
                // if (newLink.href.includes("institutionId=4944")) {
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace("4944", "8947");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace("4944", "8946");
                //     } else if (campus == "cltz") {
                //         newLink.href = newLink.href.replace("4944", "8948");
                //     }
                // }
                // Credo regex swap
                if (newLink.href.includes("credo")) {
                    regexSwapper('institutionId=8948', 'institutionId=8946', 'institutionId=8947', 'institutionId=4944');
                }


                // // Fix Films on demand (OLD)
                // if (newLink.href.includes("wid=99165")) {
                //     if (campus == "nmiz") {
                //         newLink.href = newLink.href.replace("99165", "238548");
                //     } else if (campus == "denz") {
                //         newLink.href = newLink.href.replace("99165", "240032");
                //     } else if (campus == "cltz") {
                //         newLink.href = newLink.href.replace("99165", "239260");
                //     }
                // }

                // Fix Films on demand (NEW)
                if (newLink.href.includes("fod.infobase")) {
                    regexSwapper('wid=239260', 'wid=240032', 'wid=238548', 'wid=99165');
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
        }
    });


    // Films on Demand Video Widget check and replace
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(frame, i) {
        //fod.infobase.com/OnDemandEmbed
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
            console.log(vidToken, wID);
            // Now create links to popout to external campus-specific video
    
            var vidLinks = document.createElement('div');
            campuses.forEach(function(campus, i) {

                var newLink = document.createElement('a');
                newLink.textContent=' video: ' + campus;
                vidLinks.appendChild(newLink);

                console.log(newLink);



            })
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
