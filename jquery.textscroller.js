/**
 *  
 *  Text Scroller - jQuery plugin for scroling div
 *  Copyright (c) 2014 Dmitrij Waśkowski
 *  
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *  
 *  Project home:
 *  https://github.com/dwaskowski/jquery_textscroller
 *  
 *  Version:  1.0
 *
 */


!function(e, t, o, n) {
    e.fn.textscroller = function() {
        
        var thisHtml = $(this).html();
        $(this).html('');
        var inner = $('<div>').html(thisHtml).appendTo($(this));
        
        var tsWraperHeight = $(this).outerHeight();
        var tsInnerHeight = $(inner).outerHeight();
        var tsSliderWraperHeight = $('.ts-scroller-wraper').outerHeight();
        
        if (tsWraperHeight<tsInnerHeight) {
            var tsSliderHeight = Math.round((100/(tsInnerHeight/tsWraperHeight)/100)*tsSliderWraperHeight);
            $('.ts-scroller-wraper > div').css('height', tsSliderHeight+'px');
        }
        
        var tsMaxInterval = tsSliderWraperHeight-tsSliderHeight;
        var tsDifference = (tsInnerHeight-tsWraperHeight)/tsMaxInterval;
        var tsSliderDrag = false, tsSliderTop = 0, tsMouseY = 0;
        
        $('.ts-scroller-wraper > div').on({
            'mousedown': function(e) {
                if (!tsSliderDrag) {
                    tsSliderDrag = true;
                    tsMouseY = e.pageY;
                }
             }            
        })
        $('.ts-scroller-wraper').on({
             'mousemove': function(e) {
                 if (tsSliderDrag) {
                     var tsSliderTopModify = tsSliderTop + (e.pageY-tsMouseY);
                     if(tsSliderTopModify<0) {
                         tsSliderTopModify = 0; 
                     }
                     if(tsSliderTopModify>tsMaxInterval) {
                         tsSliderTopModify = tsMaxInterval;
                     }
                     $(this).find('div').css('margin-top', tsSliderTopModify+'px');
                     var innerTop = (tsSliderTopModify*tsDifference*-1);
                     $(inner).css('margin-top',innerTop+'px');
                 }
             },
             'mouseup': function(e) {
                if (tsSliderDrag) {
                    tsSliderDrag = false;
                    var tsSliderTopModify = tsSliderTop + (e.pageY-tsMouseY);
                    if(tsSliderTopModify<0) {
                        tsSliderTopModify = 0; 
                    }
                    if(tsSliderTopModify>tsMaxInterval) {
                        tsSliderTopModify = tsMaxInterval;
                    }
                    tsSliderTop = tsSliderTopModify;
                    $(this).find('div').css('margin-top', tsSliderTopModify+'px');
                    var innerTop = (tsSliderTopModify*tsDifference*-1);
                    $(inner).css('margin-top',innerTop+'px');
                }
             },
             'click': function(e) {
                if (!tsSliderDrag) {
                    if(e.pageY < tsSliderTop) {
                        var tsSliderTopModify = tsSliderTop - 10;
                    } else if (e.pageY > (tsSliderTop+tsSliderHeight)) {
                        var tsSliderTopModify = tsSliderTop + 10;
                    } else {
                        return;
                    }
                    if(tsSliderTopModify<0) {
                        tsSliderTopModify = 0; 
                    }
                    if(tsSliderTopModify>tsMaxInterval) {
                        tsSliderTopModify = tsMaxInterval;
                    }
                    tsSliderTop = tsSliderTopModify;
                    $(this).find('div').css('margin-top', tsSliderTopModify+'px');
                    var innerTop = (tsSliderTopModify*tsDifference*-1);
                    $(inner).css('margin-top',innerTop+'px');
                }
             }
        });
        $(o).on({
            'mouseup': function(e) {
                if (tsSliderDrag) {
                    tsSliderDrag = false;
                    var tsSliderTopModify = tsSliderTop + (e.pageY-tsMouseY);
                    if(tsSliderTopModify<0) {
                        tsSliderTopModify = 0; 
                    }
                    if(tsSliderTopModify>tsMaxInterval) {
                        tsSliderTopModify = tsMaxInterval;
                    }
                    tsSliderTop = tsSliderTopModify;
                }
             }
        });
    };

}(jQuery, window, document);
