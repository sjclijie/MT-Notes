define("MT.SPM/0.0.3/src/page/index-index",[],function(e,o){var i=function(){var o=e("MT.SPM/0.0.3/src/page/public");o.init(),console.log("\n\n\u513f\u65f6\u7684\u68a6\u60f3\uff0c\u7ec8\u7a76\u672a\u80fd\u5b9e\u73b0\u3002\n\u5982\u4eca\u8fd8\u5269\u4e0b\u4ec0\u4e48\u5462\uff1f\n\n")};o.init=i}),define("MT.SPM/0.0.3/src/page/public",[],function(e,o){o.init=function(){var o=e("MT.SPM/0.0.3/src/components/update-browser").create("",!1);o.init();var i=e("MT.SPM/0.0.3/src/components/toggle-nav").create($(".nav-ul-toggle a"),$(".nav-ul"));i.init()}}),define("MT.SPM/0.0.3/src/components/update-browser",[],function(e,o){var i={create:function(e,o){var i={},n={};n.options=e||{},n.options.versionRequied={i:10,f:23,o:12,s:6.2,n:12,c:28},n.options.versionDefault={i:9,f:23,o:12,s:6.2,n:12,c:28},n.options.versionMinimal={i:9,f:23,o:12,s:6.2,n:12,c:28},n.options.version=e.version||n.options.versionDefault;{var t;window.navigator}return i.init=function(){for(t in n.options.versionRequied)n.options.version[t]>=n.options.versionRequied[t]&&(n.options.version[t]=n.options.version[t]-.2),n.options.version[t]||(n.options.version[t]=n.options.versionDefault[t]),n.options.version[t]<n.options.versionMinimal[t]&&(n.options.version[t]=n.options.versionMinimal[t]);n.options.test=o||e.test||!1,"#test-bu"==window.location.hash&&(n.options.test=!0)},i.getBrowser=function(){var e,o,i=navigator.userAgent,n={i:"Internet Explorer",f:"Firefox",o:"Opera",s:"Apple Safari",n:"Netscape Navigator",c:"Chrome",x:"Other"};if(/bot|googlebot|facebook|slurp|wii|silk|blackberry|mediapartners|adsbot|silk|android|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|rekonq|symbian|webos/i.test(i))e="x";else if(/Trident.*rv:(\d+\.\d+)/i.test(i))e="i";else if(/Trident.(\d+\.\d+)/i.test(i))e="io";else if(/MSIE.(\d+\.\d+)/i.test(i))e="i";else if(/OPR.(\d+\.\d+)/i.test(i))e="o";else if(/Chrome.(\d+\.\d+)/i.test(i))e="c";else if(/Firefox.(\d+\.\d+)/i.test(i))e="f";else if(/Version.(\d+.\d+).{0,10}Safari/i.test(i))e="s";else if(/Safari.(\d+)/i.test(i))e="so";else if(/Opera.*Version.(\d+\.\d+)/i.test(i))e="o";else if(/Opera.(\d+\.?\d+)/i.test(i))e="o";else{if(!/Netscape.(\d+)/i.test(i))return{n:"x",v:0,t:n[e]};e="n"}return/windows.nt.5.0|windows.nt.4.0|windows.98|os x 10.4|os x 10.5|os x 10.3|os x 10.2/.test(i)&&(e="x"),"f"==e&&24==o&&(e="x"),/linux|x11|unix|bsd/.test(i)&&"o"==e&&o>12&&(e="x"),"x"==e?{n:"x",v:0,t:n[e]}:(o=new Number(RegExp.$1),"so"==e&&(o=100>o&&1||130>o&&1.2||320>o&&1.3||520>o&&2||524>o&&3||526>o&&3.2||4,e="s"),"i"==e&&7==o&&window.XDomainRequest&&(o=8),"io"==e&&(e="i",o=o>6?11:o>5?10:o>4?9:o>3.1?8:o>3?7:9),{n:e,v:o,t:n[e]+" "+o})},i.generateInfo=function(){var o=window.devicePixelRatio>1?2:1,i=document.createElement("div");n.options.div=i,i.id="update-browser",i.className="update-browser";var t='                    <div class="update-browser-box">                        <div class="update-browser-icon"><img src="/public/images/icons/'+o+'x/icon-update-browser.png" alt=""></div>                        <div class="update-browser-info"><p>\u9a6c\u4e0a\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u83b7\u5f97\u66f4\u6d41\u7545\u7684\u8bbf\u95ee\u4f53\u9a8c</p></div>                        <div class="update-browser-action"><a href="/demo/update-browser">\u514d\u8d39\u66f4\u65b0</a></div>                    </div>                    <div class="update-browser-close"><a id="update-browser-button-close" href="#">\u6b8b\u5fcd\u62d2\u7edd</a></div></div>';i.innerHTML=e.div||t;var s=document.createElement("style"),r=".update-browser {position: fixed;top: 0;left: 0;padding: 14px 0;width: 100%;display: table;background: #f4f4f4;box-shadow: 0 0 4px #000000;z-index: 9999;}.update-browser-box{margin: 0 auto;width: 600px;}.update-browser-box:before{content: ' ';display: table;}.update-browser-box:after{content: ' ';clear: both;display: table;}.update-browser-icon,.update-browser-info,.update-browser-action {display: inline-block;float: left;}.update-browser-icon img{width: 28px;vertical-align: middle;}.update-browser-info p{margin: 10px;display: block;font-size: 16px;color: #505050;}.update-browser-action a{padding: 10px 0;display: block;font-size: 16px;color: #2732c9;}.update-browser-close{position: absolute;top: 14px;right: 23px;}.update-browser-close a{display: block;text-decoration: none;font-size: 12px;color: #858689;}",a=e.style||r;document.body.insertBefore(i,document.body.firstChild),document.getElementsByTagName("head")[0].appendChild(s);try{s.innerText=a,s.innerHTML=a}catch(d){try{s.styleSheet.cssText=a}catch(d){return}}document.getElementById("update-browser-button-close").onclick=function(e){e.preventDefault(),n.options.div.style.display="none"}},i.appendInfo=function(){n.options.browser=i.getBrowser(),(n.options.test||n.options.browser&&n.options.browser.n&&"x"!=n.options.browser.n&&!(n.options.browser.v>n.options.version[n.options.browser.n]))&&i.generateInfo()},n.init=function(){i.init(),i.appendInfo()},n}};o.create=i.create}),define("MT.SPM/0.0.3/src/components/toggle-nav",[],function(e,o){var i={create:function(e,o){var i={},n=!1;return i.init=function(){e.click(function(){return n?o.fadeOut():o.fadeIn(),n=!n,!1})},i}};o.create=i.create});