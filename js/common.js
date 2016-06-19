$(document).ready(function () {

    // Svg-sprite for IE
    
    svg4everybody();
    
    // Sliding Panel

    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function (e) {
        $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
        e.preventDefault();
    });

  // Portfolio Active Link 
    var portfolio_btn = $( ".portfolio" ).find(".btn");
    
    var active_link = function(){
        portfolio_btn.click(function(){
            portfolio_btn.removeClass("portfolio__active");
        $(this).addClass("portfolio__active");
        })
    };
    active_link();


    // Time line

    (function () {
        'use strict';
        var items = document.querySelectorAll(".timeline li");

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    })();

    // Mixitup

    $('#Container').mixItUp();

    // Scroll

    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1200);
        e.preventDefault();
    });
    
    // Owl Carousel
    
     $('.owl-carousel_1').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: [ , ] 
    });
     $('.owl-carousel_2').owlCarousel({
         items: 1,
         loop: true,
         startPosition: 1,
         dots: true
     });
    
    // Magnific Popup
    
   
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

// Blog Popup
    $('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
    
    // Map
    
ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [55.76, 37.64],
            zoom: 17
        });
        var myPlacemark = new ymaps.Placemark([55.76, 37.64], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/icons/Location-Icon.png',
        iconImageSize: [66, 75],
        iconImageOffset: [-3, -42]
    });

        myMap.geoObjects.add(myPlacemark);
    }
// IE 11 detect
    navigator.sayswho= (function(){
    var ua=  navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    return M.join(' ');
})();


if(navigator.sayswho == 'IE 11.0') {
    document.querySelector('body').className += ' ie11';
}
 
    // IE 11 Object-fit property
    
    if ( ! Modernizr.objectfit ) {
        
  var $img_item = $('.portfolio .item');

  $img_item.each(function () {
      var $wrapper = $(this),
      imgUrl = $wrapper.find('img').prop('src');
      if (imgUrl) {
         $wrapper
         .css('backgroundImage', 'url(' + imgUrl + ')')
         .addClass('compat-object-fit')
         .children('img').hide();
      }  
   });
 }
    
});