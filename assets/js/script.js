$(document).ready(function() {  

    // $('#amsec1').scroll(function() {
    //     $ use slide up
    // })

    $("#resume").click(function() {
        $('.res').addClass('res-active');
        $('.main').addClass('main-active');
    });

    $(".home").click(function() {
        $('.res').removeClass('res-active');
        $('.main').removeClass('main-active');
        window.scrollTo(0, 0);
    });

    $('.totop').click(function(){
        $('body').animate({
            scrollTop: 0
        }, 2000);
    });

    var bool = false;

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
            bool = true;
        }, 3170);

    });

    $(".t4").hover(function() {
        if (bool) {
            $(".hiddenn").css("opacity", "1");
        }
    }, function(){
            $(".hiddenn").css("opacity", "0");
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

