
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Mutation observer to restrict languages
const observer = new MutationObserver(function() {
  const select = document.querySelector("#google_translate_element select");
  if (select && select.options.length > 2) {
    // Allowed languages: Hindi and Telugu
    const allowed = ["hi", "te"];
    for (let i = select.options.length - 1; i >= 0; i--) {
      const option = select.options[i];
      if (!allowed.includes(option.value) && option.value !== '') {
        select.remove(i);
      }
    }
    
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("google_translate_wrapper");
    if (wrapper) {
      wrapper.setAttribute("title", "Select your language on the home page to use it across the site.");
    }
  });



  

  function customSlider(){
   const slides = document.getElementById("slideTrack");
  const totalSlides = slides.children.length;
  let currentIndex = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Auto-slide every 6 seconds
  setInterval(nextSlide, 6000);
}

customSlider()



