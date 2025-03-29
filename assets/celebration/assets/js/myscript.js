
 const quantityElements = document.querySelectorAll('.quantity');

    // Loop through each quantity element
    quantityElements.forEach(function(element) {
      const input = element.querySelector('input');
      const incrementButton = element.querySelector('.plus-btn');
      const decrementButton = element.querySelector('.minus-btn');
      
      // Increment the value when the increment button is clicked
      incrementButton.addEventListener('click', function() {
        input.value = parseInt(input.value) + 1;
      });
      
      // Decrement the value when the decrement button is clicked, but don't go below zero
      decrementButton.addEventListener('click', function() {
        if (parseInt(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
        }
      });
    });




 $('.marquee').marquee({
        duration: 10000,
        delayBeforeStart: 0,
        duplicated: true,
        gap:0,
        pauseOnHover: true,
        startVisible: true,
        direction: 'left',
    });

//
//var swiper = new Swiper(".mySwiper", {
//    slidesPerView: 1,
//    spaceBetween: 10,
//    navigation: {
//        nextEl: ".swiper-next",
//        prevEl: ".swiper-prev",
//      },
//    breakpoints: {
//      640: {
//        slidesPerView: 1,
//        spaceBetween: 20,
//      },
//      768: {
//        slidesPerView: 3,
//        spaceBetween: 20,
//      },
//      1024: {
//        slidesPerView: 4,
//        spaceBetween: 20,
//      },
//    },
//  });


  var test = new Swiper(".test", {
    slidesPerView: 1,
    spaceBetween: 10,
	  autoplay:true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


 
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });