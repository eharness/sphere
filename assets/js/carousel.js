$(document).ready(function(){$(".owl-carousel").owlCarousel({center:!0,items:4,loop:!0,margin:0,nav:!1,dots:!1,autoplay:!0,responsive:{0:{items:1},700:{items:2},1000:{items:3},1400:{items:4}}});var e=$(".owl-carousel");e.owlCarousel(),$(".customNextBtn").click(function(){e.trigger("next.owl.carousel")}),$(".customPrevBtn").click(function(){e.trigger("prev.owl.carousel")}),$(".beginningBtn").click(function(){e.trigger("to.owl.carousel",[0])})}),$(".hero .image").dimmer("show");