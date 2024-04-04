(function () {
    function changeLanguage(lng) {
      window.i18next.changeLanguage(lng, function () {
        document.getElementById('selectedLanguage').innerHTML = window.i18next.t('selectedLanguage');
        document.querySelector('.dropdown-menu').classList.remove('show');
      });
    }
  
    window.changeLanguage = changeLanguage;
  })();