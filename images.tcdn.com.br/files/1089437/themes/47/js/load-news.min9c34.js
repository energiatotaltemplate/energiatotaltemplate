setTimeout(function() {
  jQuery(document).ready(function() {
      document.getElementsByTagName("html")[0].getAttribute("data-store");
      var s = "busca_noticias.php?loja=" + document.getElementsByTagName("html")[0].getAttribute("data-store") +'&'+ document.getElementsByTagName("html")[0].getAttribute("data-files")
        , e = jQuery(".noticias-content");
      jQuery.ajax({
          url: s,
          type: "GET",
          async: !0,
          success: function(s) {
              var t = s.replace(/src/g, 'class="lazy-notices" data-src');
              e.html('<div class="noticias">' + jQuery(t).find(".noticias").html() + "</div>"),
              e.find("li").wrapInner('<div class="box-noticia"></div>'),
              e.find(".noticias li:nth-child(n+7)").remove(),
              new LazyLoad({
                  elements_selector: ".lazy-notices"
              }),
              e.find('.noticias li').length ? 
              ''
              : jQuery('.section-notices').remove();
          }
      })
  })
}, 100);
