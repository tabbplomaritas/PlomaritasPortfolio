
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

  }, 1050);
});


//project thumbnail clicks

//rockpaper
$(".toolsUsedContainer").click(function(){
  let clicked = $(this).siblings();
console.log(clicked);

//declare variables needed to populate project info popup
let projectHeader = "";
let gitCode = "";
let gitPage = "";
let projectText = "";
let projectImg = "";
let toolsUsed = "";
let clickedThumb = clicked[0].id;

  switch(clickedThumb){

    case "kapow":

      projectHeader = "Kapow",
      gitCode = "https://github.com/tabbplomaritas/Superhero_FinalProject",
      gitPage ="http://kapow-game.herokuapp.com/#!/startgame",
      projectText = "Kapow is a study game for middle schoolers than utilizes superheroes and villains to make learning fun! Users select their grade and school subject, chose their superhero character, then defeat a randomly selected opponent by correctly answering trivia questions on their subject. This collaboritve project was built as a SPA using AngularJS, Node.js, Express, and the SuperheoDB api. We utilized fun custom animations, sound effects, and custom color themes that change based up the superhero chosen.";
      projectImg = "../images/projectThumbs/kapow-1.jpg"

    break;

    case "expressFresh":

      projectHeader = "Express Fresh",
      gitCode = "https://github.com/tabbplomaritas/express-shoppingcart",
      gitPage ="https://expressfresh.herokuapp.com/",
      projectText = "Express Fresh is a work-in-progress full-stack application meant to allow users to support local farmers markets while saving time by browsing and shopping for farmer's market items and then paying for and picking them up onsite. It is built with AngularJS, Node.js, Express, and PostgreSQL. This project began as a simple shopping cart to practice the essentials of SQL and PostgreSQL and I'm greatly enjoying building it out further to integrate a sleek and modern UI as well as expanding the data used in the backend.";
      projectImg = "../images/projectThumbs/expressfresh.jpg"

    break;

    case "grubstake":

      projectHeader = "Grubstake",
      gitCode = "https://github.com/tabbplomaritas/grubstake",
      gitPage ="http://www.whatisgrubstake.com",
      projectText = "whatisgrubstake.com is a responsive, one page website I developed for a community investing workshop series during my web development internship at DO:BETTER. Working closely with the designer and project manager, I utilized jQuery, Git, Babel, and Google Tag Manager in this fun client project.";
      projectImg = "../images/projectThumbs/grubstake2.jpg"

    break;

    case "divvy":

      projectHeader = "Divvy",
      gitCode = "https://github.com/johnson-cameron/Divvy",
      gitPage ="https://johnson-cameron.github.io/Divvy/",
      projectText = "Divvy is a mobile-first budgeting website, built over the course of two days at Grand Circus as a midterm project. This was my first time planning and coding as a member of a small team. Besides the JavaScript and jQuery problem solving I was able to practice, my biggest gain from this project was learning from the group dynamic. I had a ton of fun planning, designing, testing, troubleshooting, and completing Divvy with my team.";
      projectImg = "../images/projectThumbs/Divvy.jpg"

    break;

    case "recipeFinder":

      projectHeader = "Recipe Finder",
      gitCode = "https://github.com/tabbplomaritas/recipe-finder",
      gitPage ="https://tabbplomaritas.github.io/recipe-finder",
      projectText = "This recipe finder website, titled 'From Ramen to Ratatouille', is a collaborative project completed by my team of three. This is a single page application utilizing AngularJS ng-route to change the users view without ever leaving the page. I enjoyed contributing to all aspects of this website including the design, the CSS, and all JavaScript";
      projectImg = "../images/projectThumbs/recipeFinder.jpg"

    break;

    case "rockpaper":

      projectHeader = "Rock Paper Scissors",
      gitCode = "https://github.com/tabbplomaritas/rock-paper-scissors",
      gitPage ="https://tabbplomaritas.github.io/rock-paper-scissors/",
      projectText = "A classic game of Rock, Paper, Scissors using Javascript and jQuery. Includes fun CSS transitions, animations, and sound effects!";
      projectImg = "../images/projectThumbs/rockpaper.jpg"
    break;

    case "portfolioThumb":

      projectHeader = "Tabbatha Plomaritas Portfolio";
      gitCode = "https://github.com/tabbplomaritas/plomaritasportfolio";
      gitPage ="http://www.tabbatha.net";
      projectText = "My web development portfolio is currently a work in progress and being refined daily. I am using Flexbox, CSS animations, JavaScript, and jQuery as I conintue to build this project. I am using this website to explore and practice the capabilities of SASS, jQuery, and other super fun front-end development tools!";
      projectImg = "../images/projectThumbs/portfolio.jpg"
    break;

    case "gearshare":

      projectHeader = "GearShare";
      gitCode = "https://github.com/tabbplomaritas/GearShare";
      gitPage ="https://tabbplomaritas.github.io/GearShare/";
      projectText = "Gear Share is a fictitious start-up company that I created for practicing and exploring web development tools as I learn them. This application will connect users of audio and photo technical equipment to other users for loaning and renting gear. It currently utilizes SASS and JavaScript but will soon showcase the use of a variety of technologies.";
      projectImg = "../images/projectThumbs/gearshare.jpg"
    break;

    case "addressBook":

      projectHeader = "Address Book";
      gitCode = "https://github.com/tabbplomaritas/addressbook_DOM";
      gitPage ="https://tabbplomaritas.github.io/addressBook_DOM/";
      projectText = "A pure JavaScript address book that allows users to use a form to add new contacts and delete dynamically created contacts.";
      projectImg = "../images/projectThumbs/addressBook.jpg";
    break;

    case "rgb":

      projectHeader = "The Great RGB Game";
      gitCode = "https://github.com/tabbplomaritas/Color-Game";
      gitPage ="https://tabbplomaritas.github.io/Color-Game/";
      projectText = "This vanilla-JavaScript-only guessing game will help you hone your RGB skills! Building this game was a lot of fun and added to my understanding of looping through arrays, using Math.random to generate random colors, and 'this'.";
      projectImg = "../images/projectThumbs/rgb.jpg"
    break;

    case "todo":

      projectHeader = "To-Do List";
      gitCode = "https://github.com/tabbplomaritas/ToDo-List";
      gitPage ="https://tabbplomaritas.github.io/ToDo-List/";
      projectText = "An interactive Todo List app that uses JavaScript and jQuery.";
      projectImg = "../images/projectThumbs/todo.jpg";
    break;

    case "todo-angular":

      projectHeader = "Todo List with AngularJS";
      gitCode = "https://github.com/tabbplomaritas/Todo-list-Angular";
      gitPage ="https://tabbplomaritas.github.io/Todo-list-Angular/";
      projectText = "My latest rendition of the todo list app - this time built with AngularJS! This todo list allows the user to input new tasks, mark them as complete, delete them, or filter the displayed tasks based on user input text.";
      projectImg = "../images/projectThumbs/todo-angular.jpg"
    break;

  }
  console.log(projectHeader);

//put those vairables into action and populate the project info window


    $(".projectInfo").addClass("animated slideInRight-50");
    $(".projectInfo").css("display", "flex");
    $("#projectInfoHeader").text(projectHeader);
    $("#viewOnGit").attr("href", gitCode);
    $("#viewOnWeb").attr("href", gitPage);
    $("#projectDescript").text(projectText);
    $("#projectInfoImg").attr("src", projectImg);

// remove that animation class so that next time they click it runs again
  setTimeout(function(){
    $(".projectInfo").removeClass("animated moveInRight-50");
  }, 1000);
});

//project info header mouseover effect
$("#projectInfoHeader").on("mouseover", function(){
  $("#projectInfoHeader").addClass("animated jello");

  setTimeout(function(){
    $("#projectInfoHeader").removeClass("animated jello");
  }, 1000);
})



//project thumbnail mouseover effects

//mouseover
$("#portfolio > div > div").on("mouseover", function(){
  // console.log(this);
  $(this).find('div').addClass("animated slideInUp");
  $(this).find('div').css("visibility", "visible");
})

//mouseleave
$("#portfolio > div > div").on("mouseleave", function(){
  $(this).find('div').removeClass("animated slideInUp");
  $(this).find('div').addClass("animated slideOutDown");
  let that = this;
  setTimeout(function(){
    $(that).find('div').css("visibility", "hidden");
    $(that).find('div').removeClass("animated slideOutDown");
  }, 500);

})

$(".currentProjects > img").on("click", function(){
  console.log(this);
  $(this).addClass("expanded");
  // $(this).find('div').addClass("animated slideInUp");
  // $(this).find('div').css("visibility", "visible");
})

$(document).keyup(function(e) {
  console.log(e);
  
  if (e.keyCode === 27) $('.expanded').removeClass("expanded");   // esc
});