import $jQuery from 'jquery';
import 'slick-carousel';

function CreateSlider(element, customOpts) {
  var $sliderContainer = $(element).find('.slider-controls')
  var $slider = $(element).find('.inner')
  if ($slider.hasClass('slick-initialized')) {
    exit;
  }
  const slickDefaults = {
    mobileFirst: true,
    appendArrows: $sliderContainer,
    appendDots: $sliderContainer,
    dots: true,
    speed: 300,
    prevArrow: '<button type="button" role="button" class="slick-prev slick - arrow ">back</span>',
    nextArrow: '<button type="button" role="button" class="slick-next slick - arrow ">next</span>',
    adaptiveHeight: true,
  };
  if ($(element).find('.detail-slider').length > -1) {
    $slider.on('init', () => {
        $(element).find('.detail-slider .caption ').text($(element).find('.slick - current.slick - active.caption ').text());
        }); $slider.on('afterChange', () => {
          $(element).find('.detail-slider .caption ').text($(element).find('.slick - current.slick - active.caption ').text());
          });
      }
      const slickOpts = Object.assign(customOpts, slickDefaults); $slider.slick(slickOpts);
    }

    function Slider(elem, customOpts = {}) {
      let $component = $(`.c-slider.${elem}`)
      $component.each(function () {
        let sliderElement = this;
        createSlider(sliderElement, customOpts);
      });
    }