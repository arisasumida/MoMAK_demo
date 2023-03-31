// site js //

// --------- Name: site.js --------- //

// page fadeIn //
$(function() {
	$('body').fadeIn(1000);
});

// back_to_Top logo //
$(function () {
  $("#js-pagetop_logo").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});

// back_to_Top button //
$(function () {
  $("#js-pagetop").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('#js-pagetop').fadeIn(400).css('display', 'flex')
    } else {
      $('#js-pagetop').fadeOut(400)
    }
  });
});
