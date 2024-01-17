import requests
# from bs4 import BeautifulSoup
import json
   
URL = "https://yugenanime.tv/watch/4002/boku-no-kanojo-ga-majimesugiru-sho-bitch-na-ken-dub/1/"
r = requests.get(URL)
print(r.content)
   
# soup = BeautifulSoup(r.content, 'html5lib')

# table = soup.find('iframe', attrs = {'id':'main-embed'})
# print(table['src'])