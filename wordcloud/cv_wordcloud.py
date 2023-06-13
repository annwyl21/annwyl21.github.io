import numpy as np
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS

with open('./wordcloud/my_cv.txt', 'r') as f:
    my_cv = f.read()

stopwords = set(STOPWORDS)
stopwords.update(['course', 'introduction', 'various', 'developed', 'site', 'sought', 'learned'])

wc = WordCloud(max_words=500,
               relative_scaling=0.5,
               #mask=mask,
               background_color='white',
               stopwords=stopwords,
               margin=2,
               random_state=7,
               contour_width=2,
               contour_color='brown',
               colormap='copper').generate(my_cv)
colors = wc.to_array()
plt.figure()
# plt.title("Ellen Houghton:\n",
#           fontsize=15, color='brown')
# plt.text(-10, 0, "CV",
#          fontsize=20, fontweight='bold', color='brown')
# plt.suptitle("do I need this?",
#              x=0.52, y=0.095, fontsize=15, color='brown')
plt.imshow(colors, interpolation="bilinear")
plt.axis('off')
plt.savefig('EllenHoughtonCVwordcloud.png')
plt.show()
