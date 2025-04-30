// Header carousel------------------
$("#header-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Testimonial carousel-------------
$("#testimonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1200,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
