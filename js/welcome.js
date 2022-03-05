
// to do something when the document is ready
$(document).ready(() => {

});


$(".welcomeButton").on("click", (elem) => {
  let welcomeScreen = $(".welcomeScreen");
  // fade away the welcome screen
  micron.getEle("#me").interaction("squeeze").duration(".60").timing("ease-out");
  setTimeout(() => {
    // welcomeScreen.css({ "opacity": 0.1 });
    welcomeScreen.addClass("a-rotate-out");
  }, 200);
  setTimeout(() => {
    // hide the welcome screen
    welcomeScreen.hide();
    // show the comic body
    $(".comicBody").show();
    $(".comicBody").addClass("a-journal");
  }, 1200);
});
