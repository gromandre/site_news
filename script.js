$(function(){
  $.get(
    'http://data.fixer.io/api/latest',
    {'access_key': '566642b425bb4fa6120d0fda6e7eac48'},
    function(response) {
      $('.usd').append(Math.floor(response.rates.RUB/response.rates.USD*100)/100);
      $('.eur').append(Math.floor(response.rates.RUB*100)/100);
    }
  );

  $('body').on('click', '.header__burger__new', function(event) {
    event.preventDefault();

      $(this).parents('body').find('.menu-container').slideToggle(
          function() {
            if ($(this).parents('body').find('.menu-container').attr('aria-expanded') == 'true')
            {
              $("body").addClass("fixed");
              $(".header__burger__new").addClass("close");
            } else {
              $("body").removeClass("fixed");
              $(".header__burger__new").removeClass("close");
            }
          }
        );

      if ($(this).parents('body').find('.menu-container').attr('aria-expanded') == 'true') {
      $(this).parents('body').find('.menu-container').attr('aria-expanded', false);
      
      } else {
      $(this).parents('body').find('.menu-container').attr('aria-expanded', true);
      }

      console.log ($(this).parents('body').find('.menu-container').attr('aria-expanded') === 'true');

      
  });
});
