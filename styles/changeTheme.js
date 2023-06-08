
    document.getElementById('themeButton').addEventListener('click', function() {
        var stylesheet = document.getElementById('stylesheet');
        if (stylesheet.getAttribute('href') == './styles/styles.css') {
            stylesheet.setAttribute('href', './styles/style_dark.css');
            // this.innerText = "Switch to Light Mode";
        } else {
            stylesheet.setAttribute('href', './styles/styles.css');
            // this.innerText = "Switch to Dark Mode";
        }
    });
