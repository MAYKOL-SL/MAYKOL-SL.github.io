'use strict';

/*eslint-env jquery*/

$(document).ready(() => {
  $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
  );
});

// setInterval(function() {
//   $('.carousel').carousel('next');
// }, 4000);