$(function(){
    $(".ups").click(function(){
        $(".detail_in_detail").css({'transform':'translateY(0)'});
    })
    $(".line").click(function(){
        $(".detail_in_detail").css({'transform':'translateY(350px)'});
    })
    var FirstScroll = 0;	
    var prevScrollTop = $(window).scrollTop(),
    tp = $(window).scrollTop();
    $(window).scroll(function(e){
        tp = $(this).scrollTop();
        if ( tp > prevScrollTop ){
            $("footer").addClass("footdown");
            $("footer").removeClass("footup");
    }else if( tp < prevScrollTop ) {
        $("footer").addClass("footup");
        $("footer").removeClass("footdown");
    }
    prevScrollTop = tp;
});
})