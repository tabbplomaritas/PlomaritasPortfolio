//blog img click to enlarge

$(".blog-img").click(function(){
  $(this).addClass("blog-img-hidden");
  $("#hidden-img-close").css("display", "block");
});

$("#hidden-img-close").click(function(){
  $(".blog-img-hidden").removeClass("blog-img-hidden");
  $("#hidden-img-close").css("display", "none");
});

// $(window).click(function() {
//   $(".blog-img").removeClass("blog-img-hidden");
  
// });

// $('.blog-img-hidden').click(function(event){
//   event.stopPropagation();
// });

