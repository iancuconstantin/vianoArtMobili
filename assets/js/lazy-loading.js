function loadCSS(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.head.appendChild(link);
  }
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
      loadCSS('assets/css/font-awesome-all.css');
      loadCSS('assets/css/flaticon.css');
      loadCSS('assets/css/owl.css');
      loadCSS('assets/css/jquery.fancybox.min.css');
      loadCSS('assets/css/animate.css');
      loadCSS('assets/css/nice-select.css');
      loadCSS('assets/css/color.css');
      loadCSS('assets/css/elpath.css');
      loadCSS('assets/css/responsive.css');
    }
  });
  