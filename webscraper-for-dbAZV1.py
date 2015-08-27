from bs4 import BeautifulSoup
import urllib2
url= 'http://jwu-ri.v1.libguides.com/friendly.php?s=databasesbyname'
page = urllib2.urlopen(url)
soup = BeautifulSoup(page.read())
dbnames = soup.find_all("div", {"class": "itemlist"})
dbdesc = soup.find_all("div", {"class": "linkdesc"})
print(dbnames)
