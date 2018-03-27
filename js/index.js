$(function(){
    // payments
    $('#payments').waypoint(function(direction) {
        if(direction == 'down'){
            $("#payments .content").addClass("inview");
        }else if(direction == 'up'){
            $("#payments .content").removeClass("inview");
        }
    }, { offset: '40%' });

    // servides
    $('#services').waypoint(function(direction) {
        if(direction == 'down'){
            $("#services .wrapper").addClass("inview");
        }else if(direction == 'up'){
            $("#services .wrapper").removeClass("inview");
        }
    }, { offset: '50%' });

    // data
    $('#data').waypoint(function(direction) {
        if(direction == 'down'){
            $("#data .wrapper").addClass("inview");
        }else if(direction == 'up'){
            $("#data .wrapper").removeClass("inview");
        }
    }, { offset: '60%' });

    // safety
    $('#safety').waypoint(function(direction) {
        if(direction == 'down'){
            $("#safety .wrapper").addClass("inview");
        }else if(direction == 'up'){
            $("#safety .wrapper").removeClass("inview");
        }
    }, { offset: '60%' });

    // solutions
    $('#solutions').waypoint(function(direction) {
        if(direction == 'down'){
            $("#solutions .content").addClass("inview");
        }else if(direction == 'up'){
            $("#solutions .content").removeClass("inview");
        }
    }, { offset: '20%' });

    // 关于我们
    $('#about').waypoint(function(direction) {
        if(direction == 'down'){
            $("#about .wrapper").addClass("inview");
        }else if(direction == 'up'){
            $("#about .wrapper").removeClass("inview");
        }
    }, { offset: '60%' });

    // PARTNER
    $('#partner .cooperate').waypoint(function(direction) {
        var ele = $($(this)[0].element);
        if(direction == 'down'){
            ele.addClass("inview");
        }else if(direction == 'up'){
            ele.removeClass("inview");
        }
    }, { offset: '80%' });

    //PARTNER -图片摆动
    (function () {
        var timer;
        $('#partner .cooperate img').hover(function () {
            var _this = $(this);
            timer = setTimeout(function () {
                _this.addClass("active");
            },500)
        },function () {
            clearTimeout(timer);
            $(this).removeClass("active");
        });
    })();

    // 联系我们
    $('#contact').waypoint(function(direction) {
        if(direction == 'down'){
            $("#contact .wrapper").addClass("inview");
        }else if(direction == 'up'){
            $("#contact .wrapper").removeClass("inview");
        }
    }, { offset: '50%' });

    // 鼠标悬浮切换图片位置
    $(".book").mouseover(function(){
        $(this).css("zIndex",3);
        $(this).css("opacity",1)
        $(".pad").css("zIndex",1)
        $(".pad").animate(function(){"opacity",0.8},500)
    });
    $(".pad").mouseover(function(){
        $(this).css("zIndex",3)
        $(this).css("opacity",1)
        $(".book").css("zIndex",1)
        $(".book").animate(function(){"opacity",0.8},500);
    });

    $(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			$(".gotop").fadeIn(800);
		} else {
			$(".gotop").fadeOut(800);
		}
	});
	
    // 返回顶部
    $(".gotop").click(function() {
        $("html,body").animate({scrollTop:0}, 1000);
    }); 

})