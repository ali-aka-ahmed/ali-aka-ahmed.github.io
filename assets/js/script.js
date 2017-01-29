$(document).ready(function() {  

    /* BUTTON JQUERY 

    1) Landing Page Buttons
        - resume
        - blog
        - about me
    2) Resume Menu Buttons
        - top
        - home
    3) Blog Menu Buttons
        - top
        - home

    */



    // Landing Page Buttons



    var resActive = false;
    var ready = true;
    var blogActive = false;

    $("#resume").click(function() {
        if (ready) {
            ready = false;
            $('.res').addClass('res-active-display');
            $('.resmenu').addClass('res-active-display');
            setTimeout(function() {
                $('.res').addClass('res-active');
                $('.main').addClass('main-active');
                $('.resmenu').addClass('res-active');
            }, 2);
            setTimeout(function() {
                $('.about-me').addClass('about-me-inactive');
                ready = true;
            }, 3);
            resActive = true;
        }
    });

    $("#blog").click(function() {
        if (ready) {
            ready = false;
            $('.blog').addClass('blog-active-display');
            $('.blogmenu').addClass('blogmenu-active-display');
            setTimeout(function() {
                $('.blog').addClass('blog-active');
                $('.main').addClass('main-active');
                $('.blogmenu').addClass('blog-active');
            }, 2);
            setTimeout(function() {
                $('.about-me').addClass('about-me-inactive');
                ready = true;
            }, 3);
            blogActive = true;
        }
    });

    $('#aboutme_container').click(function(){
        var amsec1offset = $('#amsec1').offset().top;
        $('body').animate({
            scrollTop: amsec1offset
        }, 1000);
    });



    // Resume Menu Buttons



    $('.totop').click(function(){
        var scrolldist = $(window).scrollTop();
        var windowsize = $(window).height();
        var timeup = (scrolldist * 400 / windowsize);
        $('body').animate({
            scrollTop: 0
        }, timeup);
    });

    $(".home").click(function() {
        ready = false;
        disable_scroll();
        $('.res').removeClass('res-active');
        $('.main').removeClass('main-active');
        $('.resmenu').removeClass('res-active');
        setTimeout(function() {
            $('.res').removeClass('res-active-display');
            $('.resmenu').removeClass('res-active-display');
            window.scrollTo(0, 0);
        }, 1502);
        setTimeout(function() {
            $('.about-me').removeClass('about-me-inactive');
            enable_scroll();
            ready = true;
        }, 1503);
        resActive = false;
    });

    // Helper Functions for disable_scroll and enable_scroll functions used for home transition

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [37, 38, 39, 40];

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    function keydown(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }

    function wheel(e) {
      preventDefault(e);
    }

    function disable_scroll() {
      if (window.addEventListener) {
          window.addEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = wheel;
      document.onkeydown = keydown;
    }

    function enable_scroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
    }



    // Blog Menu Buttons



    $('.totop').click(function(){
        var scrolldist = $(window).scrollTop();
        var windowsize = $(window).height();
        var timeup = (scrolldist * 400 / windowsize);
        $('body').animate({
            scrollTop: 0
        }, timeup);
    });

    $(".home").click(function() {
        ready = false
        disable_scroll();
        $('.blog').removeClass('blog-active');
        $('.main').removeClass('main-active');
        $('.blogmenu').removeClass('blog-active');
        setTimeout(function() {
            $('.blog').removeClass('blog-active-display');
            $('.blogmenu').removeClass('blogmenu-active-display');
            window.scrollTo(0, 0);
        }, 1502);
        setTimeout(function() {
            $('.about-me').removeClass('about-me-inactive');
            enable_scroll();
            ready = true;
        }, 1503);
        blogActive = false;
    });






    var claireeffect = false;

    $('.t3').one("mouseenter", function() {
        $(".t3").css("text-decoration", "line-through");
        $('.t3').css("font-size", "x-large");
        setTimeout(function() {
            $('.t3').css("transition", "1s");
            $('.t3').css("margin-right", "30px");
        }, 1100);
        setTimeout(function() {
            $('.t3').css("margin-right", "0px");
            $('.t3').css("margin-left", "-134px");
            $('.t4').css("margin-left", "15.5vw");
        }, 2170);
        setTimeout(function() {
            $('.t3').hide();
            claireeffect = true;
        }, 3170);

    });

    $(".t4").hover(function() {
        if (claireeffect) {
            $(".hiddenn").css("opacity", "1");
        }
    }, function(){
            $(".hiddenn").css("opacity", "0");
    });

    /* 
    Animates the sidebar in the resume. 
    1) Makes it visible when scrolling to the first section ('Profile')
    2) Changes its color when it reaches the last section ('Contacts')
    */

    $(window).scroll(function() {
        var scrolltop     = $(window).scrollTop(),
            ProfileOffset = $('#menu-ind').offset().top / 1.2,
            ContactOffset = $('#color-ind').offset().top,
            distProfile   = (ProfileOffset - scrolltop),
            distContact   = (ContactOffset - scrolltop);

        if (distProfile <= 0 && resActive) {
            $(".resmenu").addClass("menu-visible");
        } else {

            $(".resmenu").removeClass("menu-visible");
        }

        if (distContact <= 0 && resActive) {
            $(".resmenu").addClass("menu-transition");
            $(".resmenu").addClass("menu-white");
        } else {
            $(".resmenu").removeClass("menu-white");
            setTimeout(function() {
                $(".resmenu").removeClass("menu-transition");
            }, 30);
        }
    });
    
});






// $.ajax({
//   url:'https://www.kimonolabs.com/api/[API_NAME]?apikey=[API_KEY]', // enter your API name and key in place of placeholders, without the []
//   crossDomain: true,
//   dataType: 'jsonp',
//   success: function(response) {
//     $.each(response.results.posts, function(index, value) { // the `posts` here is a reference to the Kimono collection
//       var newPost = $("#postTemplate").clone(); // clone our template
//       newPost.appendTo('.posts'); // append clone to our container with the class .posts
//       newPost.removeAttr('id'); // remove the unnecessary ID
//       newPost.find('.post-title a').attr('href', value.date.href).text(value.title); // input post title
//       newPost.find('.post-date').text(value.date.text); // input post date
//       newPost.find('.post-length').text(value.length); // input post reading time
//       newPost.show(); // reveal the post
//       return index < 4; // fetch only the latest 5 posts
//     });
//   },
//   error: function(jqXHR, textStatus, errorThrown) {
//     $('.posts').html('<article class="post-error">Ooops, something went wrong and posts could not be fetched. Pleae visit our blog at https://medium.com/@sprawsmdoo/latest</article>');
//   }
// });

