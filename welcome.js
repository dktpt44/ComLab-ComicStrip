$(".welcomeButton").on("click", (elem) => {
  let welcomeScreen = $(".welcomeScreen");
  // fade away the welcome screen
  welcomeScreen.css({ "opacity": 0 });
  setTimeout(() => {
    welcomeScreen.hide();
    $(".comicBody").fadeIn();
  }, 800);


  $(".comicBody")
});