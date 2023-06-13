import requests
import bs4

url = 'https://annwyl21.github.io/aboutme.html'
page = requests.get(url)
page.raise_for_status()
soup = bs4.BeautifulSoup(page.text, 'html.parser')
p_elems = [element.text for element in soup.find_all('p')]
li_elems = [element.text for element in soup.find_all('li')]
my_cv = ' '.join(p_elems)

with open('./wordcloud/my_cv.txt', 'w') as f:
    f.write(my_cv)
