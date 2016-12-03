var main = function(){
    var clipboard = new Clipboard('.color-box');
    
    $(".color-box").each(function(){
        $(this).css("background-color", $(this).text());
        $(this).attr("data-clipboard-text",$(this).text());
    });
    
    var width = $('.color-box').width();
    $('.color-box').css({'height':width+'px', "line-height":width+"px", "font-size":width/6+"px"});

    $(window).on('resize', function(){
        var width = $('.color-box').width();
        $('.color-box').css({'height':width+'px', "line-height":width+"px", "font-size":width/6+"px"});
    });
    
    
    clipboard.on('success', function(e) {
        toastr.success("Color copied to your clipboard", 'Success!');
    e.clearSelection();
    });

    clipboard.on('error', function(e) {
        toastr.info("Ctl+C to copy color to clipboard", 'Selected!');
    });
   
    
};

$(document).ready(main);