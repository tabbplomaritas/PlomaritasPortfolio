//smooth scrolling 

$('a[href*=#]').click(function(event){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  event.preventDefault();
});

//close projectInfo window
$("#closeProjectWindow").click(function(){
  $(".projectInfo").addClass("fadeOut");
  setTimeout(function(){
    $(".projectInfo").css("display", "none");
    $(".projectInfo").removeClass("fadeOut");
  }, 550);
}); 


//project thumbnail clicks

//rockpaper
$("#rockpaper").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $(".projectInfo").css("background-size", "cover");
    $("#projectInfoHeader").text("Rock Paper Scissors");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/rock-paper-scissors");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/rock-paper-scissors/");
    $("#projectDescript").text("A classic game of Rock, Paper, Scissors using Javascript and jQuery. Includes fun CSS transitions, animations, and sound effects!");  
  }, 500); 

  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});

//rgb game
$("#rgb").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("The Great RGB Game");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/Color-Game");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/Color-Game/");
    $("#projectDescript").text("This guessing game will help you hone your RGB skills! Uses JavaScript, jQuery, and randomized RGB colors."); 
  }, 500);   

  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
      }, 1000);
});



$("#todo").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("Todo List");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/ToDo-List");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/ToDo-List/");
    $("#projectDescript").text("An interactive Todo List app that uses JavaScript and jQuery.");  
}, 500);  
  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});










// function projectInfo(val) {
//   if ((val) == $("#rockpaper")){
//   $(".projectInfo").css("display", "flex");
//   $("#projectInfoHeader").text("Rock Paper Scissors");
//   $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/rock-paper-scissors");
//   $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/rock-paper-scissors/");
//   $("#projectDescript").text("A classic game of Rock, Paper, Scissors using Javascript and jQuery. Includes fun CSS transitions, animations, and sound effects!");
//   }
// };


// if ($(this) == $("#rockpaper")){