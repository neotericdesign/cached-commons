(function(a){a.fn.supersized=function(){a.inAnimation=false;a.paused=false;var b=a.extend(a.fn.supersized.defaults,a.fn.supersized.options);a(window).bind("load",function(){a("#loading").hide();a("#supersize").fadeIn("fast");a("#content").show();if(a("#slideshow .activeslide").length==0){a("#supersize a:first").addClass("activeslide")}if(b.slide_captions==1){a("#slidecaption").html(a("#supersize .activeslide").find("img").attr("title"))}if(b.navigation==0){a("#navigation").hide()}if(b.slideshow==1){if(b.slide_counter==1){a("#slidecounter .slidenumber").html(1);a("#slidecounter .totalslides").html(a("#supersize > *").size())}slideshow_interval=setInterval("nextslide()",b.slide_interval);if(b.navigation==1){a("#navigation a").click(function(){a(this).blur();return false});a("#nextslide").click(function(){if(a.paused){return false}if(a.inAnimation){return false}clearInterval(slideshow_interval);nextslide();slideshow_interval=setInterval(nextslide,b.slide_interval);return false});a("#prevslide").click(function(){if(a.paused){return false}if(a.inAnimation){return false}clearInterval(slideshow_interval);prevslide();slideshow_interval=setInterval(nextslide,b.slide_interval);return false});a("#nextslide img").hover(function(){if(a.paused==true){return false}a(this).attr("src","images/forward.gif")},function(){if(a.paused==true){return false}a(this).attr("src","images/forward_dull.gif")});a("#prevslide img").hover(function(){if(a.paused==true){return false}a(this).attr("src","images/back.gif")},function(){if(a.paused==true){return false}a(this).attr("src","images/back_dull.gif")});a("#pauseplay").click(function(){if(a.inAnimation){return false}var c=(a(this).find("img").attr("src")==="images/play.gif")?"images/pause.gif":"images/play.gif";if(c=="images/pause.gif"){a(this).find("img").attr("src","images/play.gif");a.paused=false;slideshow_interval=setInterval(nextslide,b.slide_interval)}else{a(this).find("img").attr("src","images/pause.gif");clearInterval(slideshow_interval);a.paused=true}a(this).find("img").attr("src",c);return false});a("#pauseplay").mouseover(function(){var c=(a(this).find("img").attr("src")==="images/play_dull.gif");if(c){a(this).find("img").attr("src","images/play.gif")}else{a(this).find("img").attr("src","images/pause.gif")}});a("#pauseplay").mouseout(function(){var c=(a(this).find("img").attr("src")==="images/play.gif");if(c){a(this).find("img").attr("src","images/play_dull.gif")}else{a(this).find("img").attr("src","images/pause_dull.gif")}return false})}}});a(document).ready(function(){a("#supersize").resizenow()});a("#supersize > *").hover(function(){if(b.slideshow==1&&b.pause_hover==1){if(!(a.paused)&&b.navigation==1){a("#pauseplay > img").attr("src","images/pause.gif");clearInterval(slideshow_interval)}}original_title=a(this).find("img").attr("title");if(a.inAnimation){return false}else{a(this).find("img").attr("title","")}},function(){if(b.slideshow==1&&b.pause_hover==1){if(!(a.paused)&&b.navigation==1){a("#pauseplay > img").attr("src","images/pause_dull.gif");slideshow_interval=setInterval(nextslide,b.slide_interval)}}a(this).find("img").attr("title",original_title)});a(window).bind("resize",function(){a("#supersize").resizenow()});a("#supersize").hide();a("#content").hide()};a.fn.resizenow=function(){var b=a.extend(a.fn.supersized.defaults,a.fn.supersized.options);return this.each(function(){var e=b.startheight/b.startwidth;var f=a(this).width();var d=a(this).height();var c=a(window).width();var g=a(window).height();var h;if((g/c)>e){a(this).height(g);a(this).width(g/e);a(this).children().height(g);a(this).children().width(g/e)}else{a(this).width(c);a(this).height(c*e);a(this).children().width(c);a(this).children().height(c*e)}if(b.vertical_center==1){a(this).children().css("left",(c-a(this).width())/2);a(this).children().css("top",(g-a(this).height())/2)}return false})};a.fn.supersized.defaults={startwidth:4,startheight:3,vertical_center:1,slideshow:1,navigation:1,transition:1,pause_hover:0,slide_counter:1,slide_captions:1,slide_interval:5000}})(jQuery);function nextslide(){if($.inAnimation){return false}else{$.inAnimation=true}var c=$.extend($.fn.supersized.defaults,$.fn.supersized.options);var b=$("#supersize .activeslide");b.removeClass("activeslide");if(b.length==0){b=$("#supersize a:last")}var a=b.next().length?b.next():$("#supersize a:first");var e=a.prev().length?a.prev():$("#supersize a:last");if(c.slide_counter==1){var d=$("#slidecounter .slidenumber").html();b.next().length?d++:d=1;$("#slidecounter .slidenumber").html(d)}$(".prevslide").removeClass("prevslide");e.addClass("prevslide");if(c.slide_captions==1){$("#slidecaption").html($(a).find("img").attr("title"))}a.hide().addClass("activeslide");if(c.transition==0){a.show();$.inAnimation=false}if(c.transition==1){a.fadeIn(750,function(){$.inAnimation=false})}if(c.transition==2){a.show("slide",{direction:"up"},"slow",function(){$.inAnimation=false})}if(c.transition==3){a.show("slide",{direction:"right"},"slow",function(){$.inAnimation=false})}if(c.transition==4){a.show("slide",{direction:"down"},"slow",function(){$.inAnimation=false})}if(c.transition==5){a.show("slide",{direction:"left"},"slow",function(){$.inAnimation=false})}$("#supersize").resizenow()}function prevslide(){if($.inAnimation){return false}else{$.inAnimation=true}var c=$.extend($.fn.supersized.defaults,$.fn.supersized.options);var b=$("#supersize .activeslide");b.removeClass("activeslide");if(b.length==0){b=$("#supersize a:first")}var a=b.prev().length?b.prev():$("#supersize a:last");var e=a.next().length?a.next():$("#supersize a:first");if(c.slide_counter==1){var d=$("#slidecounter .slidenumber").html();b.prev().length?d--:d=$("#supersize > *").size();$("#slidecounter .slidenumber").html(d)}$(".prevslide").removeClass("prevslide");e.addClass("prevslide");if(c.slide_captions==1){$("#slidecaption").html($(a).find("img").attr("title"))}a.hide().addClass("activeslide");if(c.transition==0){a.show();$.inAnimation=false}if(c.transition==1){a.fadeIn(750,function(){$.inAnimation=false})}if(c.transition==2){a.show("slide",{direction:"down"},"slow",function(){$.inAnimation=false})}if(c.transition==3){a.show("slide",{direction:"left"},"slow",function(){$.inAnimation=false})}if(c.transition==4){a.show("slide",{direction:"up"},"slow",function(){$.inAnimation=false})}if(c.transition==5){a.show("slide",{direction:"right"},"slow",function(){$.inAnimation=false})}$("#supersize").resizenow()};