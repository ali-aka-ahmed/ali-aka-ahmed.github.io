$(document).ready(function() {  

    // $('#amsec1').scroll(function() {
    //     $ use slide up
    // })

    $("#resume").click(function() {
        $('.res').addClass('res-active');
        $('.main').addClass('main-active');
    });

    

    // var HomeButtonPosition = $("#home").offset().top;

    // $(window).scroll(function() {
    //   var scrollHeight = $(window).scrollTop();
      
    //   if (scrollHeight > HomeButtonPosition * 0.5) {
    //     $(".search-container").addClass("search-bar-fixed");
    //   } else {
    //     $(".search-container").removeClass("search-bar-fixed");
    //   }
    // });

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

