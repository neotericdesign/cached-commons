(function($){$.fn.jLabel=function(c){var d=new Array();var e=$.extend({},$.fn.jLabel.defaults,c);return this.each(function(){$this=$(this);d.push(new state($this));$this.focus(function(){focus($(this))}).blur(function(){blur($(this))}).keyup(function(){keyup($(this))})});function state(b){this.equals=function(a){return a.attr('id')==this.input.attr('id')};this.input=b;this.label=getLabel(b);if(this.input.val()!='')this.label.fadeTo(0,0)};function getState(a){var b;$.each(d,function(){if(this.equals(a)){b=this;return false}});return b};function getLabel(a){var b=$('label[for='+a.attr('id')+']');if(b.size()==0){b=$('<label>').attr('for',a.attr('id')).text(a.attr('title'))};a.before(b);b.css({'font-family':a.css('font-family'),'font-size':a.css('font-size'),'font-style':a.css('font-style'),'font-variant':a.css('font-variant'),'font-weight':a.css('font-weight'),'letter-spacing':a.css('letter-spacing'),'line-height':a.css('line-height'),'text-decoration':a.css('text-decoration'),'text-transform':a.css('text-transform'),'color':a.css('color'),'cursor':a.css('cursor'),'display':'inline-block'});b.mousedown(function(){return false}).css({'position':'relative','z-index':'100','margin-right':-b.width(),'left':e.xShift+parseInt(a.css("padding-left"))+'px','top':e.yShift+'px'});return b};function focus(a){if(a.val()==''){getState(a).label.stop().fadeTo(e.speed,e.opacity)}};function blur(a){if(a.val()==''){getState(a).label.stop().fadeTo(e.speed,1)}};function keyup(a){if(a.val()==''){getState(a).label.stop().fadeTo(e.speed,e.opacity)}else{getState(a).label.stop().fadeTo(e.speed,0)}}};$.fn.jLabel.defaults={speed:200,opacity:0.4,xShift:2,yShift:0}})(jQuery);