
$(".welcomeButton").on("click", (elem) => {
  let welcomeScreen = $(".welcomeScreen");
  // fade away the welcome screen
  micron.getEle("#me").interaction("squeeze").duration(".60").timing("ease-out");
  setTimeout(() => {
    welcomeScreen.css({ "opacity": 0 });
  }, 400);
  setTimeout(() => {
    // hide the welcome screen
    welcomeScreen.hide();
    // show the comic body
    $(".comicBody").fadeIn();
  }, 1200);
});
