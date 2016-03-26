'use strict';

(function() {

  var sliderHeader = [];
  var sliderMobile = [];
  var count = 0;

  setTimeout(function() {
    sliderHeader = document.querySelectorAll("li.slider-img");
    sliderMobile = document.querySelectorAll("li.slider-img-mobile");

    //Init Slider 
    slider();
    // after wait 5000
  }, 5000);

  function slider() {
    var cant = sliderHeader.length;
    if (count != cant) {
      for (var i = 0; i < cant; i++) {
        sliderHeader[i].classList.remove("active");
        sliderMobile[i].classList.remove("active-mobile");
      }
      sliderHeader[count].classList.add("active");
      sliderMobile[count].classList.add("active-mobile");
      count++;
    }else{
      count = 0;
    }

    setTimeout(slider, 3000);
  }
  
})();