
    /*
    ** Only run on client-side and only in production mode
    */
    // if (process.env.NODE_ENV !== 'production') return
    /*
    ** Include Google Analytics Script
    */
  //  <!-- GA -->
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-3027687-2', 'gvm.com.tw');
    ga('send', 'pageview');


    // <!-- Begin comScore Tag -->
    var _comscore = _comscore || [];
    _comscore.push({ c1: "2", c2: "16164930" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();

    // <!-- Start Alexa Certify Javascript -->
    _atrk_opts = { atrk_acct:"IH0Jm1akKd60T3", domain:"gvm.com.tw",dynamic: true};
    (function() {  
      var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();

  
