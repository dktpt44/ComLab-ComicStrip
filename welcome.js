$(".welcomeButton").on("click", (elem) => {
  let welcomeScreen = $(".welcomeScreen");
  // fade away the welcome screen
  welcomeScreen.css({ "opacity": 0 });
  setTimeout(() => {
    // hide the welcome screen
    welcomeScreen.hide();
    // show the comic body
    $(".comicBody").fadeIn();
  }, 800);


});