
document.getElementById('themeButton').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet-theme');
    if (stylesheet.getAttribute('href') == './styles/style_light.css') {
        stylesheet.setAttribute('href', './styles/style_dark.css');
        // this.innerText = "Switch to Light Mode";
    } else {
        stylesheet.setAttribute('href', './styles/style_light.css');
        // this.innerText = "Switch to Dark Mode";
    }
});

