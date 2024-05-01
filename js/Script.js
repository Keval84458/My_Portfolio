/*===========================
      JAVASCRIPT INDEX
=============================
      1. Typed JS
      2. Navbar JS
      3. BackGround Image
      4. Isotop JS
      5. Magnific-popup JS
      6. Smooth Scroll Effect
      7. Chech validation
============================= */

(function($){
    "use strict";
    setTimeout(function(){
      $('#preloader').addClass('preloaded');
    },800);
    setTimeout(function(){
      $('#preloader').remove();
    },2000);
    /*
    1. Typed JS
     */

    var typed = new Typed('#typed', {
        strings: ['Web Designer', 'Web Developer', 'Front end developer'],
        typeSpeed: 50,
        startDelay: 10,
        backSpeed: 80,
        loop: true,
        loopCount: Infinity
      });

      /*
      2.Navbar JS
       */
      $(window).bind('scroll',function(){
          if($(window).scrollTop() > 150){
              $('.navbar').addClass('fixed');
          }else{
            $('.navbar').removeClass('fixed');
          }
      });

      /*
      3. BackGround Image
      */
    $("#home").css('background-image','url(' + '../assets/background/bg.jpg' + ')');

      /*
       4. Isotop JS
       */
       // init Isotope
    var $grid = $('.portfolio-wrapper').isotope({
      // options
      itemSelector: '.portfolio-grid',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.portfolio-grid'
      }
    });
    // filter items on button click
    $('.portfolio-filter').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
     
      //   active button selection
    $('.portfolio-filter button').click(function(){
      $(this).siblings('button').removeClass('active');
      $(this).addClass('active');
    });

    /*
    5. Magnific-popup JS
    */

    $('.expand-img').magnificPopup({
      type: 'image',
      gallery:{
          enabled:true
      }
    })

  /*
    6. Smooth Scroll Effect
    */
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  // get form data
  const form = document.getElementById('contact');
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // data
    const name = e.target[0].value;
    const emial = e.target[1].value;
    const subject = e.target[2].value;
    const comment = e.target[3].value;
    const allData = {
      name,
      emial,
      subject,
      comment
     };

     console.log(allData);

  // const loader=document.getElementById('box');
  // loader.innerHTML='Message Sending...';

  // setTimeout(function(){
  //   loader.innerHTML='Send Message <i class="fas fa-long-arrow-alt-right"></i>';
  // },2000);

    const scriptURL='https://script.google.com/macros/s/AKfycbz9O7U5qeX-YbQk0DQrzm0qNTlFHvfKA0WTNwzvWTzBNSoy0IdG6SAsFKPHz6qkJ04xiw/exec'
      


    fetch(scriptURL,{method:'POST',body: allData})
    .then(response=>{
      console.log('response', response)
      alert("Thank you")
    })  
    .catch(error=>console.error('Error',error.message))

  })
  
  /*
    7. Chech validation
    */
   $('#box').click(function(){

   });
})(jQuery);







