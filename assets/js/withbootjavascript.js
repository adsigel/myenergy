/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */


var name = $('#hellolala').text();



//font function
(function($) {
    $.fn.textfill = function(maxFontSize, maxWords) {
        maxFontSize = parseInt(maxFontSize, 10);
        maxWords = parseInt(maxWords, 10) || 3;
        return this.each(function(){
            var self = $(this),
                orgText = self.text(),
                fontSize = parseInt(self.css("fontSize"), 10),
                lineHeight = parseInt(self.css("lineHeight"), 10),
                maxHeight = self.height(),
                maxWidth = self.width(),
                words = self.text().split(" ");
            
            function calcSize(text) {
                var ourText = $("<span>"+text+"</span>").appendTo(self),
                    multiplier = maxWidth/ourText.width(),
                    newSize = fontSize*(multiplier-0.1);
                ourText.css(
                    "fontSize", 
                    (maxFontSize > 0 && newSize > maxFontSize) ? 
                        maxFontSize : 
                        newSize
                );
                var scrollHeight = self[0].scrollHeight;
                if (scrollHeight  > maxHeight) {
                    multiplier = maxHeight/scrollHeight;
                    newSize = (newSize*multiplier);
                    ourText.css(
                        "fontSize", 
                        (maxFontSize > 0 && newSize > maxFontSize) ? 
                            maxFontSize : 
                            newSize
                    );
                }
            }
            self.empty();
            if (words.length > maxWords) {
                while (words.length > 0) {
                    var newText = words.splice(0, maxWords).join(" ");
                    console.log
                    calcSize(newText);
                    self.append("<br>");
                }
            } else {
                calcSize(orgText);
            }
        });
    };
})(jQuery);



$(function(){
    $(".textfill.little").textfill();
    
    $(".fontadjust").textfill(100, 5);
});











//grab and scroll function
(function() {
    function ScrollView(){ this.initialize.apply(this, arguments) }
    ScrollView.prototype = {
        initialize: function(container, config){
                // setting cursor.
                var gecko = navigator.userAgent.indexOf("Gecko/") != -1;
                var opera = navigator.userAgent.indexOf("Opera/") != -1;
                var mac = navigator.userAgent.indexOf("Mac OS") != -1;
                if (opera) {
                    this.grab = "default";
                    this.grabbing = "move";
                } else if (!(mac && gecko) && config) {
                    if (config.grab) {
                       this.grab = "url(\"" + config.grab + "\"),default";
                    }
                    if (config.grabbing) {
                       this.grabbing = "url(" + config.grabbing + "),move";
                    }
                } else if (gecko) {
                    this.grab = "-moz-grab";
                    this.grabbing = "-moz-grabbing";
                } else {
                    this.grab = "default";
                    this.grabbing = "move";
                }
                
                // Get container and image.
                this.m = $(container);
                this.i = this.m.children().css("cursor", this.grab);
                
                this.isgrabbing = false;
                
                // Set mouse events.
                var self = this;
                this.i.mousedown(function(e){
                        self.startgrab();
                        this.xp = e.pageX;
                        this.yp = e.pageY;
                        return false;
                }).mousemove(function(e){
                        if (!self.isgrabbing) return true;
                        self.scrollTo(this.xp - e.pageX, this.yp - e.pageY);
                        this.xp = e.pageX;
                        this.yp = e.pageY;
                        return false;
                })
                .mouseout(function(){ self.stopgrab() })
                .mouseup(function(){ self.stopgrab() })
                .dblclick(function(){
                        var _m = self.m;
                        var off = _m.offset();
                        var dx = this.xp - off.left - _m.width() / 2;
                        if (dx < 0) {
                                dx = "+=" + dx + "px";
                        } else {
                                dx = "-=" + -dx + "px";
                        }
                        var dy = this.yp - off.top - _m.height() / 2;
                        if (dy < 0) {
                                dy = "+=" + dy + "px";
                        } else {
                                dy = "-=" + -dy + "px";
                        }
                        _m.animate({ scrollLeft:  dx, scrollTop: dy },
                                "normal", "swing");
                });
                
                this.centering();
        },
        centering: function(){
                var _m = this.m;
                var w = this.i.width() - _m.width();
                var h = this.i.height() - _m.height();
                _m.scrollLeft(w / 2).scrollTop(h / 2);
        },
        startgrab: function(){
                this.isgrabbing = true;
                this.i.css("cursor", this.grabbing);
        },
        stopgrab: function(){
                this.isgrabbing = false;
                this.i.css("cursor", this.grab);
        },
        scrollTo: function(dx, dy){
                var _m = this.m;
                var x = _m.scrollLeft() + dx;
                var y = _m.scrollTop() + dy;
                _m.scrollLeft(x).scrollTop(y);
        }
    };
    
    jQuery.fn.scrollview = function(config){
        return this.each(function(){
            new ScrollView(this, config);
        });
    };
})(jQuery);


$(document).ready(function(){
  $("#innertext2").scrollview({
    grab:"img/openhand_8_8.cur",
    grabbing:"img/closedhand_8_8.cur"
  });
});





