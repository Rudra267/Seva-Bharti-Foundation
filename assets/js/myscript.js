$(document).ready(function () {
  // $(".counter").each(function () {
  //   var $this = $(this);
  //   var start = parseInt($this.attr("data-start"));
  //   var end = parseInt($this.attr("data-end"));
  //   var interval = Math.ceil(10 / (end - start)); // Adjust speed based on the range

  //   $this.text(start);

  //   var intervalFunc = function () {
  //     if (start < end) {
  //       start++;
  //       $this.html(start + "k +");
  //     }
  //   };

  //   var intervalId = setInterval(intervalFunc, interval);

  //   // Stop the interval when the target is reached
  //   var stopIntervalFunc = function () {
  //     if (start >= end) {
  //       clearInterval(intervalId);
  //     }
  //   };

  //   setTimeout(stopIntervalFunc, 3000); // Adjust duration based on your preference
  // });

  $("#downloadButton").click(function () {
    var selectedLanguage = $("#languageSelect").val();
    var pdfUrl = getPDFUrl(selectedLanguage);
    downloadPDF(pdfUrl);
  });

  function getPDFUrl(language) {
    // Replace with your actual file URLs based on language codes
    var pdfUrls = {
      hindi:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/hindi.pdf",
      english:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/english.pdf",
      tamil:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/tamil.pdf",
      kannada:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/kannada.pdf",
      malayalam:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/malayalam.pdf",
      marathi:
        "https://www.krishnayangauraksha.org/assets/images/downloads/brochure/marathi.pdf",
    };
    return pdfUrls[language];
  }

  function downloadPDF(url) {
    var link = document.createElement("a");
    link.href = url;
    link.download = "krishnayan-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  $(".desktopreadmore").after(
    '<button class="readMoreBtn2 btn btn-sm shadow-none text-primary w-100 text-center rounded-0 px-3 py-3 ">Read More <i class="fa-solid fa-angle-down"></i> </button>'
  );
  $(".readMoreBtn2").click(function () {
    $(this).parent().find(".desktopreadmore").addClass("removelineclap");
    $(this).hide();
  });

  function checkWidth() {
    if (window.innerWidth <= 600) {
      $(".add-moverlay").after(
        '<span class="text-primary small mt-2 d-block addmbtn" role="button">Read More</span>'
      );
      $(".addmbtn").click(function () {
        $(this).parent().find(".add-moverlay").addClass("showalltext");
        $(this).removeClass("d-block").hide();
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
          $(".homepage .header-1").addClass("bg-primary-5");
        } else {
          $(".homepage .header-1").removeClass("bg-primary-5");
        }
      });
      
    } else {
    }
  }

  // Call the function initially and on window resize
  checkWidth();
  //window.addEventListener('resize', checkWidth);

  var fullName = $("#krfullname").text().trim().split(" "); // Get the full name and split it into an array of words
  var firstNameInitial = fullName[0].charAt(0); // Get the first letter of the first name

  if (fullName.length > 1) {
    var lastNameInitial = fullName[1].charAt(0); // Get the first letter of the last name
    $("#printfn").text(firstNameInitial + " " + lastNameInitial); // Display both initials
  } else {
    $("#printfn").text(firstNameInitial); // Display only the initial of the first name
  }

  if (
    window.location.pathname === "/" ||
    window.location.href === "http://localhost/krishnayan/" ||
    window.location.href === "https://www.krishnayangauraksha.org/"
  ) {
    $("body").addClass("homepage");
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      $(".homepage .header-1").addClass("bg-primary");
    } else {
      $(".homepage .header-1").removeClass("bg-primary");
    }
  });

  $(window).on("load", function () {
    $(".preloader2").fadeOut("slow");
    //$("body").removeClass("loading");
  });

  $(".wordy").each(function (index) {
    var delay = index * 600; // Adjust the delay time as needed
    $(this).delay(delay).animate(
      {
        bottom: "50%",
        opacity: 1,
      },
      1000
    ); // Adjust the animation duration as needed
  });
});

window.addEventListener("load", (event) => {
  const imgDefer = document.querySelectorAll("img[data-src]");
  imgDefer.forEach((img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
  });
  const handlePreloader = document.getElementById("handle-preloader");
  if (handlePreloader) {
    handlePreloader.style.display = "none";
  }
});

swiper10 = new Swiper(".accswiper", {
  // Add Swiper options here
  slidesPerView: 1.2,
  
  loop: true,
  effect: "slide",
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 10,
  //   depth: 200,
  //   modifier: 1,
  //   slideShadows: false,
  // },
  navigation: {
    nextEl: ".accreconext",
    prevEl: ".accrecoprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 24,
      
      loop: true,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

pagesswiper = new Swiper(".pagesslider", {
  // Add Swiper options here
  slidesPerView: 1,
  effect: "fade",
  spaceBetween: 16,
  autoplay: {
    delay: 4000,
  },
  loop: true,
});

var swiper2 = new Swiper(".impactslider", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".impactnext",
    prevEl: ".impactprev",
  },
  centeredSlides: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 2.65,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 4000,
  },
});
function isMobile() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
var heroslider = new Swiper(".heroslider", {
  effect: isMobile() ? "slide" : "coverflow",
  loop: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  // initialSlide: 2,
  slidesPerView: 1,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".heronext",
    prevEl: ".heroprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.15,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 1.15,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1920: {
      slidesPerView: 1.2,
      spaceBetween: 50,
      centeredSlides: true,
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var achiveslide = new Swiper(".achive-slider", {
  // slidesPerView: 1.2,
  effect: "slide",
  
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".achivenext",
    prevEl: ".achiveprev",
  },
  slidesPerView: 1.2,
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
  },
  autoplay: {
    delay: 8000,

    pauseOnMouseEnter: true,
  },
});

var whatwedoslide = new Swiper(".whatwesdoslider", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    // slideShadows: false,
  },
  slideToClickedSlide: true,
  slidesPerView: 1.2,
  centeredSlidesBounds: true,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  loop: true,

  navigation: {
    nextEl: ".whatwenext",
    prevEl: ".whatweprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.15,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1366: {
      slidesPerView: 3.5,
    },
    1920: {
      slidesPerView: 3.5,
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});

var swiper3 = new Swiper(".sewa-slider", {
  slidesPerView: 1.2,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
  },
  slideToClickedSlide: true,
  initialSlide: 3,
  centeredSlidesBounds: true,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".sewanext",
    prevEl: ".sewaprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      // spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1366: {
      slidesPerView: 3,
    },
    1900: {
      slidesPerView: 4,
    },
  },
});

var swiper4 = new Swiper(".cow-slider", {
  slidesPerView: 1.2,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1,
  },
  slideToClickedSlide: true,
  centeredSlides: true,
  initialSlide: 3,
  navigation: {
    nextEl: ".adoptcwnext",
    prevEl: ".adoptcwprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1366: {
      slidesPerView: 3,
    },
    1900: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  autoplay: {
    delay: 60000,
  },
});

var swiper5 = new Swiper(".astrologyslider", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 16,
  centeredSlidesBounds: true,

  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".adoptcwnext",
    prevEl: ".adoptcwprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1500: {
      slidesPerView: 7,
      spaceBetween: 0,
      centeredSlides: false,
    },
    1900: {
      slidesPerView: 7,
      spaceBetween: 10,
      centeredSlides: false,
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var swiper6 = new Swiper(".blogs-slider", {
  slidesPerView: 1.15,
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
  },
  centeredSlides: true,
  initialSlide: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".blognext",
    prevEl: ".blogprev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1366: {
      slidesPerView: 2.4,
      spaceBetween: 24,
    },
  },

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var swiper7 = new Swiper(".test", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 10,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  slideToClickedSlide: true,
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".testswiper-next",
    prevEl: ".testswiper-prev",
  },
  slidesPerView: 1.15,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});

var swiper8 = new Swiper(".alertslider", {
  slidesPerView: 1,
  //centeredSlides:true,
  spaceBetween: 20,
  centeredSlidesBounds: true,
  autoplay: true,
  navigation: {
    nextEl: ".homeralert-next",
    prevEl: ".homeralert-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

// testimonial slider

function liveGaushala() {
  document.getElementById("online-gaushala-visit").modal("show");
}

//google translation code
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//     pageLanguage: 'en'
//   }, 'google_translate_element');
// }

// share icon bottom right
$(".sharethisicon").on("click", function () {
  $("ul.sharethis li").each(function (i) {
    $(this)
      .delay(100 * i)
      .fadeToggle(500);
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//$(document).scroll(function() {
//  var y = $(this).scrollTop();
//  if (y > 800) {
//    $('.donatemobile').fadeIn();
//  } else {
//    $('.donatemobile').fadeOut();
//  }
//});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
