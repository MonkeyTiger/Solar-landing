$(document).ready(function () {
  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $("body").css("overflow", "inherit");
  });

  $('.menu-button').on('click', function () {
    $("body").css("overflow", "hidden");
    $('#sidebar').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});