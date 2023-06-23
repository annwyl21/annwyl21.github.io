document.getElementById('toggleButton').addEventListener('click', function () {
    var text = document.getElementById('personal_profile_1');
    if (text.classList.contains('expanded')) {
      this.innerHTML = 'show more';
      text.classList.remove('expanded');
    } else {
      this.innerHTML = 'show less';
      text.classList.add('expanded');
    }
  });
