
$(document).ready(() => {
  // when the document is ready hide the loading screen and show the welcome screen
  setTimeout(() => {
    $(".initialLoadScreen").fadeOut();
    $(".welcomeScreen").fadeIn("slow", () => {
      $(".welcometitle img").addClass("animate__animated animate__rubberBand");
    });
  }, 500);

  // animating when the button on the welcome screen is clicked
  $($(".welcomeButton")[0]).on("click", (elem) => {
    let welcomeScreen = $(".welcomeScreen");

    micron.getEle("#me").interaction("squeeze").duration(".60").timing("ease-out");

    welcomeScreen.fadeOut(1000, () => {
      // show the storytelling body
      $(".initialLoadScreen2").fadeIn("slow");

      setTimeout(() => {
        $(".initialLoadScreen2").fadeOut(1000, () => {
          // show the comic body
          $(".comicbody").fadeIn();
          $(".comicbody").addClass("animate__animated animate__zoomIn");
        });
      }, 20000);
    });
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
      // turning the page when it is clicked
      $("#nextBtn").on("click", () => {
        $('.flipbook').turn('next');
      });
      $("#prevBtn").on("click", () => {
        $('.flipbook').turn('previous');

      });

    }, 1200);
  });

});
