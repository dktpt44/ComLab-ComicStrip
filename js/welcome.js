
$(document).ready(() => {
  // when the document is ready hide the loading screen and show the welcome screen
  setTimeout(() => {
    $(".initialLoadScreen").fadeOut();
    $(".welcomeScreen").fadeIn();
  }, 1500);

  // animating when the button on the welcome screen is clicked
  $($(".welcomeButton")[0]).on("click", (elem) => {
    let welcomeScreen = $(".welcomeScreen");
    micron.getEle("#me").interaction("squeeze").duration(".60").timing("ease-out");
    setTimeout(() => {
      welcomeScreen.addClass("animate__animated animate__zoomOutUp");
    }, 200);
    setTimeout(() => {
      // hide the welcome screen
      welcomeScreen.hide();
      // show the comic body
      $(".comicbody").show();
      $(".comicbody").addClass("animate__animated animate__zoomInUp");

    }, 1200);
  });

  // animation when the other button is clicked on
  $($(".welcomeButton")[1]).on("click", (elem) => {
    let welcomeScreen = $(".welcomeScreen");
    micron.getEle("#me2").interaction("squeeze").duration(".60").timing("ease-out");
    setTimeout(() => {
      welcomeScreen.addClass("animate__animated animate__zoomOutUp");
    }, 200);
    setTimeout(() => {
      // hide the welcome screen
      welcomeScreen.hide();
      // show the comic body
      $(".comicbodyflipbook").show();
      $(".comicbodyflipbook").addClass("animate__animated animate__zoomInUp");

    
    }, 1200);
  });

});



