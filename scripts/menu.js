
$(document).ready(function() {
  $(".nav").toggleClass("menu__hide");
  $("body").on("click", ".nav-toggle", function() {
    $(".nav").toggleClass("menu__hide");
    $(".nav-toggle .fa")
      .toggleClass("fa-bars")
      .toggleClass("fa-times");
  });
});
