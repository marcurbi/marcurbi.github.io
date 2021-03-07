$(document).ready(function () {
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    duration: 300,
    easing: 'ease-in-out',
    mainClass: 'mfp-fade'
  });
});