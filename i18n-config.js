(function (i18next) {
    i18next.init({
      lng: 'en',
      debug: true,
      resources: {
        en: {
          translation: {
            // Content from en.json
            "selectedLanguage": "Selected Language: English",
            "welcome": "Welcome to our website!",
            "about": "About Us",
            "contact": "Contact Us"
          },
        },
        es: {
          translation: {
            // Content from es.json
            "selectedLanguage": "Idioma seleccionado: Español",
            "welcome": "¡Bienvenido a nuestro sitio web!",
            "about": "Acerca de",
            "contact": "Contacto"
          },
        },
      },
    });
  })(window.i18next);