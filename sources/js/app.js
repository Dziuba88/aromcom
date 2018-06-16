$.get("assets/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

AOS.init({
  disable: 'mobile',
  duration: 750,
  easing: 'ease-in-out-sine',
});

$('.carousel__portfolio').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveRefreshRate: 0,
  loop: true,
  margin:15,
  dots: false,
  nav: true,
  navText: [
    '<svg class="benefit__icon"><use xlink:href="#angle__left"></use></svg>',
    '<svg class="benefit__icon"><use xlink:href="#angle__right"></use></svg>'
  ],
  responsive:{
    0: {items:1},
    520: {items:3},
    960: {items:5},
    1170: {items:6}
  }
});

$('.carousel__knifes').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveRefreshRate: 0,
  loop: true,
  nav: true,
  navText: [
    '<svg class="benefit__icon"><use xlink:href="#angle__left"></use></svg>',
    '<svg class="benefit__icon"><use xlink:href="#angle__right"></use></svg>'
  ],
  responsive:{
    0: {dots: false,items:1,slideBy:1},
    520: {dots: false,items:3,slideBy:3},
    960: {dots: true,items:5,slideBy:5},
    1170: {dots: true,items:6,slideBy:6}
  }
});

$('.carousel__clients').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveRefreshRate: 0,
  loop: true,
  nav: false,
  dots: false,
  margin:15,
  responsive:{
    0: {items:2},
    520: {items:5},
    960: {items:7},
    1170: {items:10}
  }
});

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top -40
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});
