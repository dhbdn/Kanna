//视频弹窗
(function () {
    var $section1 = $("#section1"),
        $videoBtn = $section1.find(".videoBtn"),
        $video = $section1.find(".video"),
        $close = $video.find("#video .close");
    $videoBtn.click(function () {
        $video.fadeIn();
        $(document.body).addClass("noScroll");
    });
    $close.click(function () {
        $video.fadeOut();
        $(document.body).removeClass("noScroll");
    })
})();
//down
(function(){
    var $down = $("#section1").find(".down");
    $down.click(function () {
        $("body,html").animate({
            scrollTop:900
        },300)
    })
})();
//pop_windows弹窗
(function () {
    var $section2 = $("#section2"),
        $popWindows = $section2.find(".new_main .pop_windows"),
        $close = $popWindows.find(".close"),
        $list = $section2.find(".new_main .list"),
        $popLi = $popWindows.find("ul li"),
        $title = $section2.find(".title"),
        index;
    $content = $popWindows.find(".content");
        $content.each(function () {
            var $contentTxt = $content.find(".contentTxt"),
                $scroll = $(this).find(".scroll"),
                $scrollBar = $scroll.find(".scrollBar"),
                scrollH = $scroll.height(),
                cH = $content.height(),
                TxtH = $contentTxt.height(),
                barH =  scrollH*cH/TxtH,
                topMin = 0,
                topMax = scrollH - barH;
            $scrollBar.height(barH);
            $scrollBar.mousedown(function (e) {
                var sy = e.clientY,
                    sTop = $(this).position().top,
                    $This = $(this);
                $(document).mousemove(function (e) {
                    var top = e.clientY - sy +sTop;
                    top = Math.min(top,topMax);
                    top = Math.max(top,topMin);
                    $This.css("top",top);
                    $contentTxt.css("top",-top*scrollH/barH);
                }).mouseup(function () {
                    $(this).off("mousemove").off("mouseup");
                });
            });
            //滚轮事件
            $(this).mousewheel(function (e,d) {
                var top = $scrollBar.position().top;
                if(d<0){
                    //拉
                    top+=10;
                }else{
                    //推
                    top-=10;
                }
                top = Math.min(top,topMax);
                top = Math.max(top,topMin);
                $scrollBar.css("top",top);
                $contentTxt.css("top",-top*scrollH/barH);
            });
            //点击scroll,bar移动
            $scroll.click(function (e) {
                if(e.target === this)
                    var ny = e.clientY - $(this).offset().top+$(document).scrollTop(),
                        top = $scrollBar.position().top;
                top=ny<top?top-100:top+=100;
                top = Math.min(top,topMax);
                top = Math.max(top,topMin);
                console.log(top);
                $scrollBar.animate({"top":top},500);
                $contentTxt.animate({"top":-top*scrollH/barH},500);
            });
        });

        //防止获取不到高度
        $popWindows.hide().css("opacity" , 1);
        $popLi.hide();

        //点击弹窗
        $list.click(function () {
            index = $(this).index();
            $(document.body).addClass('noScroll');
            $popWindows.show().animate({opacity:1},500);
            $popLi.eq(index).show().siblings().hide();
        });

        //点击关闭
        $close.click(function () {
            $(document.body).removeClass('noScroll');
            $popWindows.hide().animate({opacity:0},500);
        });
        //点击弹窗之后点击btn轮播

        var $btn = $popWindows.find(".btn"),
            length = $popLi.length,
            j = 0;
        $btn.click(function () {
            if($(this).index(".pop_windows .pop_main .btn")){
                j--;
                if(j<0)j = length-1;
            }else{
                j++;
                if(j>length-1)j = 0;
            }
            $popLi.eq(j).show().siblings().hide();
        });
        //滚轮延迟加载：
    (function () {
        var arr = [];
        init($title,$list);

        $(window).scroll(function () {
            var height = $(window).height()+$(document).scrollTop();
            for(var i = arr.length-1;i>=0;i--){
                var objArr = arr[i];
                if(height>=objArr.oldTop){
                    (function () {
                        var $This = $(objArr);
                        setTimeout(function () {
                            $This.removeClass("hide")
                        },($This.index()%3)*200);
                        arr.slice(i,1);
                    })();
                }
            }
        });
        function init() {
            for(var i = 0,length = arguments.length;i<length;i++){
                arguments[i].each(function () {
                    this.oldTop = $(this).offset().top;
                    arr.push(this);
                })
            }
        }
    })()
})();
//gameFeature轮播
(function () {
    var $section3 = $("#section3"),
        $picLi = $section3.find(".pic ul li"),
        $btn = $section3.find(".pic .btn"),
        index = 0,
        length = $picLi.length;
    $picLi.click(function () {
        if($(this).index()!==index){
            index = $(this).index();
            change();
        }
    });
    //btn切换
    $btn.click(function () {
        if($(this).index(".pic .btn")){
            index++;
            index %= length;
        }else{
            index--;
            if(index<0)index = length-1;
        }
        change();
    });
    function change() {
        var leftIndex = index-1,
            rightIndex = index+1;
        if(leftIndex<0)leftIndex = length-1;
        if(rightIndex>length-1)rightIndex = 0;
        $picLi.removeClass("left mid right");
        $picLi.eq(leftIndex).addClass("left");
        $picLi.eq(index).addClass("mid");
        $picLi.eq(rightIndex).addClass("right");
    }
})();