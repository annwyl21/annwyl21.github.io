import requests
import bs4

def web_scraper():
    url = 'https://annwyl21.github.io/index.html'
    page = requests.get(url)
    page.raise_for_status()
    soup = bs4.BeautifulSoup(page.text, 'html.parser')
    p_elems = [element.text for element in soup.find_all('p')]
    li_elems = [element.text for element in soup.find_all('li')]
    span_elems = [element.text for element in soup.find_all('span')]
    my_cv_p = ' '.join(p_elems)
    my_cv_li = ' '.join(li_elems)
    my_cv_span = ' '.join(span_elems)
    my_cv = my_cv_p + my_cv_li + my_cv_span

    with open('./wordcloud/my_cv.txt', 'w') as f:
        f.write(my_cv)

if __name__ == '__main__':
    web_scraper()