$(document).ready(function(){
  $(window).scroll(function(){
    let x = $(window).scrollTop()
    if(x>700){
      $('.navbar').css({
        'background': 'black',
        'opacity':'0.5'
      })
    }else{
     $('.navbar').css({
       'background': 'transparent',
       'opacity':'1'
     })
    }
  })
    new WOW().init();
    
    var typed = new Typed('.drinks', {
        strings: ["Many people enjoy a cup of coffee or tea in the morning or an occasional bowl of ice cream after dinner. There are endless choices when it comes to the types of drinks, desserts and sweets, and other foods we eat."],
        typeSpeed: 30,
        loop: false,
      });
      
      var typed = new Typed('.food', {
        strings: ["Do you know where your food comes from? Words that describe where food is grown and raised are important to know. Words describing different types of food and when and why we eat are also good to know, too."],
        typeSpeed: 30,
        loop: false,
      });

      var typed = new Typed('.chefs', {
        strings: [" The primary responsibility of a chef is to plan menus, develop recipes, and engage in and supervise the preparation of dishes. They order supplies, accept their deliveries in the morning, and check for their freshness and taste."],
        typeSpeed: 30,
        loop: false,
      });
    
      var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 2000
    });
   
    
    })