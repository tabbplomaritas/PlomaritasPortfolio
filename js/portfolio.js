
//smooth scrolling 

$('a[href*=#]').click(function(event){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  event.preventDefault();
});

//close projectInfo window
$("#closeProjectWindow").click(function(){
  $(".projectInfo").addClass("animated slideOutRight-50");
  setTimeout(function(){
    $(".projectInfo").css("display", "none");
    $(".projectInfo").removeClass("animated slideOutRight-50");
    // $("#viewOnWeb").css("display", "block");
  }, 1050);
}); 


//project thumbnail clicks

//rockpaper
$(".portfolio_img").click(function(){

//declare variables needed to populate project info popup
let projectHeader = "";
let gitCode = "";
let gitPage = "";
let projectText = "";
let clickedThumb = $(this)[0].id;
//this is to test that we are grabbing correct value
// console.log(clickedThumb); 

// check which item is clicked and set variable values
  // if(clickedThumb === "rockpaper"){
  //   console.log("it's rock paper");
  //   projectHeader = "Rock Paper Scissors";
  //   gitCode = "https://github.com/tabbplomaritas/rock-paper-scissors";
  //   gitPage ="https://tabbplomaritas.github.io/rock-paper-scissors/";
  //   projectText = "A classic game of Rock, Paper, Scissors using Javascript and jQuery. Includes fun CSS transitions, animations, and sound effects!";
  // } else if (clickedThumb === "portfolioThumb"){
  //   console.log("it's portfolio time!");
  //   projectHeader = "Tabbatha Plomaritas Portfolio";
  //   gitCode = "https://github.com/tabbplomaritas/plomaritasportfolio";
  //   gitPage ="http://www.tabbatha.net";
  //   projectText = "My web development portfolio is currently a work in progress and being refined daily. I am using Flexbox, CSS animations, JavaScript, and jQuery as I conintue to build this project. I am using this website to explore and practice the capabilities of SASS, jQuery, and other super fun front-end development tools!";
  // }

  switch(clickedThumb){
    case "rockpaper":
      console.log("rockpaper is the clicked item."); 
      projectHeader = "Rock Paper Scissors",
      gitCode = "https://github.com/tabbplomaritas/rock-paper-scissors",
      gitPage ="https://tabbplomaritas.github.io/rock-paper-scissors/",
      projectText = "A classic game of Rock, Paper, Scissors using Javascript and jQuery. Includes fun CSS transitions, animations, and sound effects!";
    break;

    case "portfolioThumb":
      console.log("it's portfolio time!");
      projectHeader = "Tabbatha Plomaritas Portfolio";
      gitCode = "https://github.com/tabbplomaritas/plomaritasportfolio";
      gitPage ="http://www.tabbatha.net";
      projectText = "My web development portfolio is currently a work in progress and being refined daily. I am using Flexbox, CSS animations, JavaScript, and jQuery as I conintue to build this project. I am using this website to explore and practice the capabilities of SASS, jQuery, and other super fun front-end development tools!";
  }
  console.log(projectHeader);

//put those vairables into action and populate the project info popup
    $(".projectInfo").addClass("animated slideInRight-50");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text(projectHeader);
    $("#viewOnGit").attr("href", gitCode);
    $("#viewOnWeb").attr("href", gitPage);
    $("#projectDescript").text(projectText);  

// remove that animation class so that next time they click it runs again
  setTimeout(function(){
    $(".projectInfo").removeClass("animated moveInRight-50");
  }, 1000);
});

//portfolio
// $("#portfolioThumb").click(function(){
//   setTimeout(function(){
//     $(".projectInfo").addClass("moveInRight");
//     $(".projectInfo").css("display", "flex");
//     $("#projectInfoHeader").text("Tabbatha Plomaritas Portfolio");
//     $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/plomaritasportfolio");
//     $("#viewOnWeb").css("display", "none");
//     $("#projectDescript").text("My web development portfolio is currently a work in progress and being refined daily. I am using Flexbox, CSS animations, JavaScript, and jQuery as I conintue to build this project. I am using this website to explore and practice the capabilities of SASS.");  
//   }, 500); 

//   setTimeout(function(){
//     $(".projectInfo").removeClass("moveInRight");
//   }, 1000);
// });

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

//todo game
$("#todo").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("To-do List");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/ToDo-List");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/ToDo-List/");
    $("#projectDescript").text("An interactive Todo List app that uses JavaScript and jQuery.");  
}, 500);  
  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});

//javascript exercises
$("#js").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("JavaScript Exercises");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/PlomaritasJavaScriptExercises");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/PlomaritasJavaScriptExercises/");
    $("#projectDescript").text("A series of JavaScript challenges I was required to complete for entrance into the Grand Circus Front-End Bootcamp.");  
}, 500);  
  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});

//GearShare
$("#gearshare").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("Gear Share");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/GearShare");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/GearShare/");
    $("#projectDescript").text("Gear Share is a fictitious start-up company that I created for practicing and exploring web development tools as I learn them. This application will connect users of audio and photo technical equipment to other users for loaning and renting gear. It currently utilizes SASS and JavaScript but will soon showcase the use of a variety of technologies.");  
}, 500);  
  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});


//addressbook



$("#addressBook").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("Address Book");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/addressbook_DOM");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/addressBook_DOM/");
    $("#projectDescript").text("A pure JavaScript address book that allows users to use a form to add new contacts and delete dynamically created contacts.");  
  }, 500); 

  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});


//tabbPhotos
$("#tabbphotos").click(function(){
  setTimeout(function(){
    $(".projectInfo").addClass("moveInRight");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text("tabbPhotos");
    $("#viewOnGit").attr("href", "https://github.com/tabbplomaritas/tabbphotos");
    $("#viewOnWeb").attr("href", "https://tabbplomaritas.github.io/tabbphotos/");
    $("#projectDescript").html("This project is a landing page for a portrait and wedding photographer. One of my earliest projects, it utilizes Bootstrap, Media Queries, sticky positioning, all contained in a well designed one page layout. Bonus fact: Tabbatha Plomaritas <em>is</em> tabbPhotos!");  
}, 500);  
  setTimeout(function(){
    $(".projectInfo").removeClass("moveInRight");
  }, 1000);
});


//project info header mouseover effect
$("#projectInfoHeader").on("mouseover", function(){
  $("#projectInfoHeader").addClass("animated jello");
  
  setTimeout(function(){
    $("#projectInfoHeader").removeClass("animated jello");
  }, 1000);
})

//contact page
// $("#emailBox").hover(function(){
//   $("#emailBoxText").text("TabbathaPlomaritas@gmail.com");
//   $("#emailBoxText").addClass("emailHighlight");
//   }, function() {
//     $("#emailBoxText").text("Email Me");
//     $("#emailBoxText").removeClass("emailHighlight");
//   });















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