define("MT.SPM/0.0.1/src/page/videos-live",[],function(e,t){var n=function(){console.log("Live Page");var t=e("MT.SPM/0.0.1/src/components/html5-player").create($(".video-section"),$(".video-section video"),document.getElementById("html5-video"),{display:{volumeControl:!1},control:{progress:!1,volume:!1}});t.init(),t.resume()};t.init=n}),define("MT.SPM/0.0.1/src/components/html5-player",[],function(e,t){var n={create:function(e,t,n,l){var a={},i={},e=e,t=t,n=n,o=l||{},s=t.attr("data-src");return a.init=function(){i.init()},a.resume=function(){i.resume()},i.init=function(){t.remove(),t.find("source").attr("src",s),e.prepend(t);var n="";n+='<div class="video-controls">',n+='<div class="controls-container">',n+='<div class="play">',n+=' <a class="button" id="play-pause"></a>',n+="</div>",n+='<div class="progress">',n+='<input type="range" id="seek-bar" class="seek-bar" value="0">',n+="</div>",n+='<div class="mute">',n+='<a class="button" id="mute"></a>',n+="</div>",n+='<div class="volume">',n+='<input type="range" id="volume-bar" class="volume-bar" min="0" max="1" step="0.1" value="1">',n+="</div>",n+='<div class="full-screen">',n+='<a class="button" id="full-screen"></a>',n+="</div>",n+="</div>",n+="</div>",e.append(n)},i.resume=function(){n.src=s,window.addEventListener("touchstart",function e(){n.play(),this.removeEventListener("touchstart",e)}),n.load(),i.updatePlayerStyle(),i.playerHandler()},i.updatePlayerStyle=function(){var t=e.find("video").width(),n=0;o.display.volumeControl||(e.find(".video-controls .mute").hide(),e.find(".video-controls .volume").hide()),o.display.volumeControl?(n=t-108-20,e.find(".progress").css({width:.6*n}),e.find(".volume").css({width:.35*n})):(n=t-72-12,e.find(".progress").css({width:.99*n}))},i.playerHandler=function(){function e(){console.log(r()+" Player.Playing")}function t(){console.log(r()+" Player.Pause")}function l(){console.log(r()+" Player.Play")}function a(){console.log(r()+" Player.timeUpdate");var e=100/n.duration*n.currentTime;v.value=e}function i(){console.log(r()+" Player.touchStart"),$(".live-controls").css({opacity:.9})}function s(){console.log(r()+" Player.touchEnd"),setTimeout(function(){$(".live-controls").css({opacity:0})},2e3)}function r(){return(new Date).getTime()}var u=document.getElementById("play-pause"),c=document.getElementById("mute"),d=document.getElementById("full-screen"),v=document.getElementById("seek-bar"),m=document.getElementById("volume-bar");u.addEventListener("click",function(){1==n.paused?(n.play(),u.style.backgroundImage="url(/public/images/player/player-pause.svg)"):(n.pause(),u.style.backgroundImage="url(/public/images/player/player-play.svg)")}),c.addEventListener("click",function(){0==n.muted?(n.muted=!0,c.style.backgroundImage="url(/public/images/player/player-mute.svg)"):(n.muted=!1,c.style.backgroundImage="url(/public/images/player/player-unmute.svg)")}),d.addEventListener("click",function(){n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}),v.addEventListener("change",function(){function e(t){return n.seekable?(n.currentTime=t,!1):void setTimeout(function(){e(t)},500)}var t=n.duration*(v.value/100);o.control.progress&&(n.seekable?n.currentTime=t:e(t))}),m.addEventListener("change",function(){n.volume=m.value}),n.addEventListener("play",l,!1),n.addEventListener("pause",t,!1),n.addEventListener("playing",e,!1),n.addEventListener("timeupdate",a,!1),n.addEventListener("touchstart",i,!1),n.addEventListener("touchend",s,!1)},a}};t.create=n.create});