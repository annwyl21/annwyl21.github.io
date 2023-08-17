import requests
import bs4

def web_scraper():
    url = 'https://annwyl21.github.io/aboutme.html'
    page = requests.get(url)
    page.raise_for_status()
    soup = bs4.BeautifulSoup(page.text, 'html.parser')
    p_elems = [element.text for element in soup.find_all('p')]
    li_elems = [element.text for element in soup.find_all('li')]
    my_cv_p = ' '.join(p_elems)
    my_cv_li = ' '.join(li_elems) #include li elements
    my_cv = my_cv_p + my_cv_li

    with open('./wordcloud/my_cv2.txt', 'w') as f:
        f.write(my_cv)

if __name__ == '__main__':
    web_scraper()