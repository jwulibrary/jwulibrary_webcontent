function libraryLinkFix() {
    var campusRegexp = /(nmiz|denz|pvdz|cltz)/;
    var campuses = ['pvdz', 'cltz', 'nmiz', 'denz'];
    var links = document.querySelectorAll('a');


    links.forEach(function(pageLink, i) {
        if (campusRegexp.test(pageLink.href) || pageLink.href.includes('ebookcentral')) {
            // Create link wrapper, add title
            var fourLinks = document.createElement("div");
            var linkTitle = document.createElement("span");
            linkTitle.textContent = "Library Links: ";
            linkTitle.classList.add('lib-link-title');
            fourLinks.insertBefore(linkTitle, fourLinks.firstChild);
            fourLinks.classList.add('lib-link-btns');

            // check links to see if are library links
            var match = campusRegexp.exec(pageLink.href)
            origLink = pageLink.href
            campuses.forEach(function(campus, i) {
                //Create links
                newLink = document.createElement("a");
                newLink.innerHTML = campus.replace('z', '');
                newLink.target = "_blank";
                // make new link
                newLink.href = origLink.replace(/nmiz|denz|pvdz|cltz/, campus)

                //Style links
                if (newLink.classList)
                    newLink.classList.add('four-link-btn');
                else
                    newLink.className += ' ' + 'four-link-btn';


                // Fix Gale regionals
                if (newLink.href.includes("prov43712")) {
                    if (campus == "nmiz") {
                        newLink.href = newLink.href.replace("prov43712", "nort5426");
                    } else if (campus == "denz") {
                        newLink.href = newLink.href.replace("prov43712", "denv8636");
                    }
                }
                // Fix ProQuest regionals
                if (newLink.href.includes("accountid=1363")) {
                    if (campus == "nmiz") {
                        newLink.href = newLink.href.replace("1363", "187069");
                    } else if (campus == "denz") {
                        newLink.href = newLink.href.replace("1363", "187070");
                    } else if (campus == "cltz") {
                        newLink.href = newLink.href.replace("1363", "151086");
                    }
                }
                // Fix ebrary
                if (newLink.href.includes("ebookcentral.proquest.com/lib/jwu")) {
                    if (campus == "nmiz") {
                        newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwunmiz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-northmiami");
                    } else if (campus == "denz") {
                        newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwudenz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwu-denver");
                    } else if (campus == "cltz") {
                        newLink.href = newLink.href.replace("ebookcentral.proquest.com/lib/jwu", "jwucltz.idm.oclc.org/login?url=http://site.ebrary.com/lib/jwucharlotte");
                    }
                }
                // Fix Credo
                if (newLink.href.includes("institutionId=4944")) {
                    if (campus == "nmiz") {
                        newLink.href = newLink.href.replace("4944", "8947");
                    } else if (campus == "denz") {
                        newLink.href = newLink.href.replace("4944", "8946");
                    } else if (campus == "cltz") {
                        newLink.href = newLink.href.replace("4944", "8948");
                    }
                }
                // Fix Films on demand
                if (newLink.href.includes("wid=99165")) {
                    if (campus == "nmiz") {
                        newLink.href = newLink.href.replace("99165", "238548");
                    } else if (campus == "denz") {
                        newLink.href = newLink.href.replace("99165", "240032");
                    } else if (campus == "cltz") {
                        newLink.href = newLink.href.replace("99165", "239260");
                    }
                }

                // Check EBSCO Dbs in other libraries.... if not subscribed to add a blank box
                // Check MLA EBSCO (only pvd and den get)
                if (newLink.href.includes("ebsco")) {
                    // mzh is MLA, not in NMI or CLT
                    if (newLink.href.includes("mzh")) {
                        if (campus == "nmiz" || campus == "cltz") {
                            newLink.removeAttribute("href");
                            newLink.style.backgroundColor = "#919095";
                            newLink.textContent += ": no access, contact a librarian";
                        }
                    }

                    // Criminal Justice Abstracts with Full Text (EBSCO) ...i3h
                    // Only pvd gets this
                    if (newLink.href.includes("i3h")) {
                        if (campus == "nmiz" || campus == "cltz" || campus == "denz") {
                            newLink.removeAttribute("href");
                            newLink.style.backgroundColor = "#919095";
                            newLink.textContent += ": Request Article";
                        }
                    }
                }


                // Add the campus link
                fourLinks.appendChild(newLink);

            })
            pageLink.parentNode.appendChild(fourLinks);
            pageLink.removeAttribute("href");
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
