<script>
    document.getElementById('themeButton').addEventListener('click', function() {
        var stylesheet = document.getElementById('stylesheet');
        if (stylesheet.getAttribute('href') == 'styles.css') {
            stylesheet.setAttribute('href', 'style_dark.css');
            this.innerText = "Switch to Light Mode";
        } else {
            stylesheet.setAttribute('href', 'styles.css');
            this.innerText = "Switch to Dark Mode";
        }
    });
</script>

