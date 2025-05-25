   window.addEventListener('load', () => {
    const interval = setInterval(() => {
      const options = document.querySelectorAll('.goog-te-combo option');
      if (options.length > 0) {
        options.forEach(option => {
          const value = option.value;
          if (value && value !== 'hi' && value !== 'te') {
            option.remove(); // remove all except Hindi and Telugu
          }
        });
        clearInterval(interval); // stop checking once done
      }
    }, 500);
  });
 
 function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'hi,te', // Intention to limit (Google sometimes ignores this)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );
  }