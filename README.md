# Code Review
> original code :
```javascript
import $jQuery from 'jquery';
import 'slick-carousel';

function CreateSlider(element, customOpts) {
  var $sliderContainer = $(element).find('.slider-controls') var $slider = $(element).find('.inner')
  if ($slider.hasClass('slick-initialized')) {
    exit;
  }
  const slickDefaults = {
    mobileFirst: true,
    appendArrows: $sliderContainer,
    appendDots: $sliderContainer,
    dots: true,
    speed: 300,
    prevArrow: '<button type="button" role="button" class="slick-prev
    slick - arrow ">back</span>',
    nextArrow: '<button type="button" role="button" class="slick-next
    slick - arrow ">next</span>',
    adaptiveHeight: true,
  };

  if ($(element).find('.detail-slider').length > -1) {
    $slider.on('init', () => {
        $(element).find('.detail-slider
          .caption ').text($(element).find('.slick - current.slick - active.caption ').text());
        }); $slider.on('afterChange', () => {
          $(element).find('.detail-slider
            .caption ').text($(element).find('.slick - current.slick - active.caption ').text());
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
```

# After checking I think there are a some issue regarding the error and styles

## Syntax errors
+ import the jQuery should writen like this
```javascript
import $ from 'jquery';
```
+ the statement inside conditional if($slider.hasClass..., can't write 
```javascript
exit;
```
> it should be 
```javascript
return;
```
> since it used to end the function and returning nothing
+ the closing tag for </span> for the prevArrow and nextArrow element is incorrect syntax. It should be </button>
```javascript
prevArrow: '<button type="button" role="button" class="slick-prev slick-arrow">back</button>',
nextArrow: '<button type="button" role="button" class="slick-next slick-arrow">next</button>',
```
## Logical errors
+ createSlider function when it's call inside Slider function it's have incorrect naming 
it should name with Capital 'C' so it would be CreateSLider
+ I think in condition where 
```javascript
$(element).find('.detail-slider').length > -1
```
> could be pottentially true, if the purpose is to check if the element is exists you can use
```javascript
$(element).find('.detail-slider').length > 0
```
## Style issues
+ use of var keyword to declare variables, it can cause problems with scope and hoisting it is recomended to use let or const
+ function naming should named in camel case as createSlider

### Here's is some code correction for syntax error, logical error and style issue
> modified slick carousel
```javascript
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

```
