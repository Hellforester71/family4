$(window).on("load",function(){

   // плавный скролл по якорю
   $("a[rel='Scroll']").mPageScroll2id();
   
   // бургер-меню
      $('.header__burger').click(function(event) {
         $('.header__burger, .header__list').toggleClass('active');
         // $('body').toggleClass('lock');
      });
      $('.header__item').click(function(event) {
         $('.header__burger, .header__list').removeClass('active');
         // $('body').toggleClass('lock');
      });

   
});