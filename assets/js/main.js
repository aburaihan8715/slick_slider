// slick slide
$(function () {
  $('.slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev">⬅</button>',
    nextArrow: '<button type="button" class="slick-next">➡</button>',
    centerPadding: '1px',
    dots: true,
  });
});
