import $ from 'jquery';
import 'slick-carousel';

function createSlider(element, customOpts) {
  const $sliderContainer = $(element).find('.slider-controls');
  const $slider = $(element).find('.inner');

  if ($slider.hasClass('slick-initialized')) {
    return;
  }

  const slickDefaults = {
    mobileFirst: true,
    appendArrows: $sliderContainer,
    appendDots: $sliderContainer,
    dots: true,
    speed: 300,
    prevArrow: '<button type="button" role="button" class="slick-prev slick-arrow">back</button>',
    nextArrow: '<button type="button" role="button" class="slick-next slick-arrow">next</button>',
    adaptiveHeight: true,
  };

  if ($(element).find('.detail-slider').length > 0) {
    $slider.on('init', () => {
      $(element).find('.detail-slider .caption').text($(element).find('.slick-current.slick-active .caption').text());
    });
    $slider.on('afterChange', () => {
      $(element).find('.detail-slider .caption').text($(element).find('.slick-current.slick-active .caption').text());
    });
  }

  const slickOpts = Object.assign(customOpts, slickDefaults);
  $slider.slick(slickOpts);
}

function Slider(elem, customOpts = {}) {
  const $component = $(`.c-slider.${elem}`);
  $component.each(function () {
    const sliderElement = this;
    createSlider(sliderElement, customOpts);
  });
}