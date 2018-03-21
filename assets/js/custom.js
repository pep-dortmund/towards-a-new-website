window.onload = function () {
  let pepElem = document.getElementById('pep');

  if (pepElem !== null) {
    console.log("adjusting height");
    let pepHeight = pepElem.offsetHeight;
    document.getElementById('content').style.marginTop = "-" + (pepHeight / 2) + "px";
  }
};


if($('#pepNavContainer').hasClass('nav-landing')){
  $(window).scroll(function (event) {
    var pos = $(window).scrollTop();
    var container = $('#pepNavContainer');

    if(pos > 300 && container.hasClass('bg-faded')){
      container.addClass('bg-dark');
      container.removeClass('bg-faded');
    } else if(pos <= 300 && container.hasClass('bg-dark')) {
      container.removeClass('bg-dark');
      container.addClass('bg-faded');
    };
  });
}


/* matomo tracking */
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//analytics.pepdo.elnath.uberspace.de/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '2']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
