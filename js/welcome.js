
$(document).ready(() => {
  setTimeout(() => {
    $(".initialLoadScreen").fadeOut();
    $(".welcomeScreen").fadeIn();
  }, 1500);

  // animating when the button on the welcome screen is clicked
  $(".welcomeButton").on("click", (elem) => {
    let welcomeScreen = $(".welcomeScreen");
    micron.getEle("#me").interaction("squeeze").duration(".60").timing("ease-out");
    setTimeout(() => {
      welcomeScreen.addClass("animate__animated animate__zoomOutUp");
    }, 200);
    setTimeout(() => {
      // hide the welcome screen
      welcomeScreen.hide();
      // show the comic body
      $(".comicBody").show();
      $(".comicBody").addClass("animate__animated animate__zoomInUp");
    }, 1200);
  });
});



