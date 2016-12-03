var main = function(){
    $(".color-box").each(function(){
        $(this).css("background-color", $(this).text());
    });
    
    $(".color-box").on('click', function(){
        
    });
    
    var width = $('.color-box').width();
    $('.color-box').css({'height':width+'px', "line-height":width+"px", "font-size":width/6+"px"});

    $(window).on('resize', function(){
        var width = $('.color-box').width();
        $('.color-box').css({'height':width+'px', "line-height":width+"px", "font-size":width/6+"px"});
    });
};

$(document).ready(main);