window.onload = $(function() {
    var lnb = $("#lnb").offset().top;
    $(window).scroll(function() {
      var window = $(this).scrollTop();

      if(lnb <= window) {
        $("#lnb").addClass("fixed");
      } else {
        $("#lnb").removeClass("fixed");
      }
    })
  });