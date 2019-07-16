// var elem = document.getElementById('test'),
//    elemY = elem.offsetTop;

//    window.onscroll = function() {
//       var scrolled = window.pageYOffset || document.documentElement.scrollTop;

//       console.log(scrolled);
//       console.log(elemY);
//       console.log(scrolled > elemY+100); 
//            if (scrolled > elemY+100) {
//          console.log('test');
//          elem.style.opacity = 1;
//       }
//    }

var isScrolling = false;
var content = document.querySelectorAll('.opacity, .gallery-list__item');
window.addEventListener('scroll', throttleScroll, false);

function throttleScroll(e) {
   if (isScrolling == false) {
      window.requestAnimationFrame(function () {
         scrolling(e);
         isScrolling = false;
      });
   }
   isScrolling = true;
}


document.addEventListener('DOMContentLoaded', scrolling, false);


function dealWithScrolling(e) {

}


function isPartlyVisible(el) {
   var elementBoundary = el.getBoundingClientRect()
   var top = elementBoundary.top;
   var bottom = elementBoundary.bottom;
   var height = elementBoundary.height;

   return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function scrolling(e) {
   for (var i = 0; i < content.length; i++) {
      if (isPartlyVisible(content[i])) {
         content[i].classList.add('active')
      } else {
         content[i].classList.remove('active');
      }
   }
}
scrolling();

// function isFullyVisible(el) {
//    var elementBoundary = el.getBoundingClientRect()
//    var top = elementBoundary.top;
//    var bottom = elementBoundary.bottom;

//    return ((top >= 0 ) && (bottom <= window.innerHeight));
// }

;
(function ($) {
   $(document).ready(function () {
      $('.gallery-list__item img').on('click', function (e) {
         var $imgSrc = $(this).attr('src');
         var $modalimage = $('<img>');
         $modalimage.attr('src', $imgSrc);

         $modalimage.appendTo('.modal-content');
         openModal();

      })
   })

   var openModal = function () {
      $('.modal').css('display', 'block')
   }

   var closeModal = function () {
      $('.modal').css('display', 'none').find('img').remove();
   }

   $('.modal-close').on('click', closeModal);
   $('.modal').on('click', function (e) {

      if (!$(e.target).is('.modal-content') || !$(e.target).closest('.modal-content').length) {
         closeModal();
      }



   })

})(jQuery);
$(window).on('scroll', function () {
   var introduction = $('.about').offset().top;
   var scroll = $(window).scrollTop();
   var header = $('.header');
   var home = $('.introduction').offset().top;
   var homeBtn = $('.home-btn');
   var about = $('.about').offset().top;
   var aboutBtn = $('.about-btn');
   var services = $('.services-wrapper').offset().top;
   var servicesBtn = $('.services-btn');
   var gallery = $('.gallery').offset().top;
   var galleryBtn = $('.gallery-btn');
   var subscribe = $('.subscribe-container').offset().top;
   var subscribeBtn = $('.subscribe-btn');
   var blog = $('.blog').offset().top;
   var blogBtn = $('.blog-btn');
   var contact = $('.contact').offset().top;
   var contactBtn = $('.contact-btn');

   if (scroll >= introduction) {
      header.addClass('sticky')

   } else {
      header.removeClass('sticky');

   }
   // switch (scroll) {
   //    case about.coords :  header.addClass('about-back'); break;
   //     default: console.log("SCROLL=", scroll); break;
   // }
   if (scroll >= 0 && scroll < about) {
      homeBtn.addClass('btn-active');

   } else {
      homeBtn.removeClass('btn-active')
   }
   if (scroll >= about && scroll < services) {
      header.addClass('about-back');
      aboutBtn.addClass('btn-active');
   } else {
      header.removeClass('about-back');
      aboutBtn.removeClass('btn-active')
   }
   if (scroll >= services && scroll < gallery) {
      header.addClass('services-back');
      servicesBtn.addClass('btn-active');
   } else {
      header.removeClass('services-back');
      servicesBtn.removeClass('btn-active')
   }
   if (scroll >= gallery && scroll < subscribe) {
      header.addClass('gallery-back');
      galleryBtn.addClass('btn-active');
   } else {
      header.removeClass('gallery-back');
      galleryBtn.removeClass('btn-active')
   }
   if (scroll >= subscribe && scroll < blog) {
      header.addClass('subscribe-back');
      subscribeBtn.addClass('btn-active');
   } else {
      header.removeClass('subscribe-back');
      subscribeBtn.removeClass('btn-active')
   }
   if (scroll >= blog && scroll < contact) {
      header.addClass('blog-back');
      blogBtn.addClass('btn-active');
   } else {
      header.removeClass('blog-back');
      blogBtn.removeClass('btn-active')
   }
   if (scroll >= contact) {
      header.addClass('contact-back');
      contactBtn.addClass('btn-active');
   } else {
      header.removeClass('contact-back');
      contactBtn.removeClass('btn-active')
   }


})



// function Section(name,color) {
//    this.name = name;
//    this.color = color;
//    this.coords = $(name).offset().top; 
// }

// var home = new Section('.introduction','inherit');
// var about = new Section('.about',"'background-color','#00b2b2'" );
// var services = new Section('.services', '#70bfff');
// var gallery = new Section('.gallery','#ffe92f')
// var subscribe = new Section('.subscribe', '#fff');
// var blog = new Section('.blog','#b07cf7');
// var contact = new Section('.contact','#fff');