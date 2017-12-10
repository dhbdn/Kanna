//顶部导航显示隐藏
(function () {
    var $nav = $("#nav"),
        $showHide = $nav.find(".topNav .tNMenu .showHide"),
        $tHiden = $nav.find(".topNav .topNav_hide"),
        $logo = $nav.find(".logo"),
        $logo2  = $nav.find(".logo2"),
        $hide = $tHiden.find(".hide");
    //logo2的载入动画
    $logo2.delay(500).queue(function () {
        $(this).css({
            left:60,
            opacity:1
        })
    });
    //显示nav吸顶
    $(window).scroll(function () {
        if($(window).scrollTop()){
            $nav.addClass("scroll");
            $logo.fadeIn(300);
            $logo2.addClass("scale");
        }else{
            $logo.fadeOut(300);
            $nav.removeClass("scroll");
            $logo2.removeClass("scale");
        }
    });
    $showHide.hover(function () {
        $showHide.removeClass("hover");
        $(this).addClass("hover");
        $nav.addClass("hover");
        $tHiden.stop().animate({height:"200px"},300).find(".hide").eq($(this).index("#nav .topNav .tNMenu .showHide")).show().fadeIn();
    },function () {
        $nav.removeClass("hover");
        $showHide.removeClass("hover");
        $tHiden.stop().animate({height:0},300).find(".hide").eq($(this).index("#nav .topNav .tNMenu .showHide")).hide().fadeOut();
    });
    $hide.hover(function () {
        $(this).eq($(this).index()).show().fadeIn();
        $nav.addClass("hover");
        $showHide.removeClass("hover");
        $tHiden.stop().animate({height:"200px"},300).find(".hide").eq($(this).index("#nav .topNav .tNMenu .showHide")).show().fadeIn();
    },function () {
        $nav.removeClass("hover");
        $(this).eq($(this).index()).hide().fadeOut();
        $showHide.removeClass("hover");
        $tHiden.stop().animate({height:0},300);
    });
})();
//人物列表
(function () {
    var $role = $("#role"),
        $role1 = $role.find(".role1 .role"),
        $role2 = $role.find(".role2 .role"),
        $btn = $role.find(".btn"),
        flag = false;  //表示role1显示，role2隐藏
    $role1.removeClass("hidden");
    $btn.click(function () {
        if(flag){
            change($role2,$role1);
        }else{
            change($role1,$role2);
        }
        flag = !flag;
    });
    function change($1,$2) {
        $1.stop();
        $2.stop();
        $1.addClass("hidden").delay(500).queue(function () {
            $2.removeClass("hidden");
        });
    }
})();
// downLoad的伸展
(function () {
    var $calendar = $("#calendar"),
        $downLoad = $calendar.find(".downLoad"),
        $shrink = $downLoad.find(".shrink"),
        $stretch = $downLoad.find(".stretch"),
        $arrow = $stretch.find(".arrow");
    $shrink.click(function () {
        $(this).hide();
        $stretch.show().fadeIn();
        $downLoad.stop().animate({
            width:533
        },500)
    });
    $arrow.click(function () {
        $stretch.fadeOut().hide();
        $shrink.show();
        $downLoad.stop().animate({
            width:32
        },500)
    });
    /*日历*/
    (function () {
        var $list = $calendar.find(".content .c_Menu .list");

        $list.hover(function () {
            $(this).stop().addClass("pos");
        },function () {
            $(this).stop().delay(500).queue(function () {
                $(this).removeClass("pos");
            })
        })

    })();
})();
//news_section
(function(){
    //面向对象写法
    function Banr( $ul , $pic , $tab ) {
        this.$ul = $ul;
        this.$tab = $tab;
        this.index = 0;
        this.length = $pic.length;
        this.width = $pic.width();
        this.timeOut = null;
    }
    Banr.prototype = {
        exe : function () {
            this.addEvent();
        },
        addEvent : function () {
            var This = this;
            this.$tab.mouseenter(function () {
                clearTimeout(This.timeOut);
                var $this = $(this);
                This.timeOut = setTimeout(function () {
                    This.index = This.$tab.index($this);
                    $this.addClass("on").siblings().removeClass("on");
                    This.$ul.stop().animate({
                        left : -This.width*This.index
                    },500);
                },200);
            });
        }
    };

    //继承
    function Banr2($ul , $pic , $tab ,$wrap) {
        Banr.call(this,$ul , $pic , $tab);
        this.$wrap = $wrap;
        this.timer = null;
    }
    function Fn(){}
    Fn.prototype = Banr.prototype;
    Banr2.prototype = new Fn();
    Banr2.prototype.temp = Banr2.prototype.exe;
    Banr2.prototype.exe = function () {
        this.temp();
        this.auto();
        this.clearTime();
    };
    Banr2.prototype.clearTime = function () {
        var This = this;
        this.$wrap.hover(function () {
            clearInterval(This.timer);
        },function(){
            This.auto();
        });
    };
    Banr2.prototype.auto = function (){
        var This = this;
        this.timer = setInterval(function () {
            This.index ++;
            This.index %= This.length;
            This.$tab.eq(This.index).addClass("on").siblings().removeClass("on");
            This.$ul.stop().animate({
                left : -This.width*This.index
            },300);
        },3000);
    };
    window.Banr = Banr;
    window.Banr2 = Banr2;
})();
(function(){
    var $news = $("#news_section"),
        $banner = $news.find(".banner"),
        $pic = $banner.find(".pic"),
        $list = $pic.children(".list"),
        $tList = $news.find(".tab .tList"),
        banner = new Banr2($pic,$list,$tList,$banner);
    banner.exe();
})();

(function(){
    var $news = $("#news_section"),
        $t_Menu = $news.find(".info .title .t_Menu"),
        $t_List = $t_Menu.children("li"),
        $bg = $t_List.find(".bg");
    //info选项卡
    var $s_Menu = $news.find(".info .news_wrap .s_Menu"),
        $s_List = $s_Menu.find(".s_List");
    $s_List.each(function (i) {
        var $ul = $(" <ul class='l_Menu'></ul>");
        var n = 0;
        for(var j = 0,length = data.length;j<length;j++){
            if(!i||data[j].tp===(i-1)){
                $ul.append('<li class="l_List"><a href=""><p class="txt">'+data[j].title+'</p><p class="time">'+data[j].time+'</p></a></li>');
                n++;
                if(n===5)break;
            }
        }
        $(this).append($ul);
    });
    var banner = new Banr($s_Menu,$s_List,$t_List);
    banner.exe();
})();
//shishen
(function(){
    var $sh = $("#shishen_section");
    //生成式神对应的图片
    var count = [[0,null],[0,null],[0,null],[0,null],[0,null]];//每一个tab对应的计时器
    var $showUl = $sh.find(".t_wrap .tab_show .show_wrap>ul");
    for(var i = 0,length = dataList.length;i<length;i++){
        var index = 0;
        switch(dataList[i].level){
            case"SSR":
                index = 1;
                break;
            case"SR":
                index = 2;
                break;
            case"R":
                index = 3;
                break;
            case"N":
                index = 4;
                break;
        }
        count[0][0]++;
        count[index][0]++;
        if(count[index][0]%2){
            count[index][1] = $('<li class="list"></li>');
            $showUl.eq(index).append(count[index][1]);
        }
        if(count[0][0]%2){
            count[0][1] = $('<li class="list"></li>');
            $showUl.eq(0).append(count[0][1]);
        }
        var isNew = dataList[index].isNew?'<span class="new"></span>':"";
        $add = $("<div class='shishen'><img src='img/index/content/shishen/"+dataList[i].id+".png'alt=''><p class='cover'><span class='txt'>"+dataList[i].name+"</span></p>"+isNew+"</div>");
        var $clone = $add.clone();
        count[index][1].append($add);
        count[0][1].append($clone);
    }
})();
//左右按钮切换
(function(){
    //tab点击
    var $sh = $("#shishen_section"),
        $tab_list = $sh.find(".t_wrap .tab_menu .tab_list"),
        $tab_show  = $sh.find(".t_wrap .tab_show"),
        $show_wrap = $tab_show.find(".show_wrap"),
        width =  $show_wrap.width();
        index = 0;
    $tab_list.click(function () {
        index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $show_wrap.eq(index).show().siblings(".show_wrap").hide();
    });
    $show_wrap.each(function () {
        var $showUl = $(this).children("ul"),
            $btn = $(this).children(".showBtn"),
            length = Math.ceil($showUl.children("li").length/6);
        this.index = 0;
        this.index !==length-1?$btn.eq(1).show():$btn.eq(1).hide();
        this.index !==0?$btn.eq(0).show():$btn.eq(0).hide();
        $btn.click(function () {
            var i = $(this).index(),
                parent = this.parentNode;
            if(i===2){
                parent.index++;
                parent.index%=length;
            }else{
                parent.index--;
                if(parent.index<0)parent.index = length-1;
            }
            parent.index !==length-1?$btn.eq(1).show():$btn.eq(1).hide();
            parent.index !==0?$btn.eq(0).show():$btn.eq(0).hide();
            $showUl.stop().animate({
                marginLeft : parent.index * -width
            },500);
        })
    })
})();
//zhujue tab切换
(function(){
    var $sh = $("#shishen_section"),
        $sp = $sh.find(".s_content .title .sp"),
        $tab_show = $sh.find(".s_content .t_wrap .tab_show"),
        $zhujue = $sh.find(".s_content .t_wrap .zhujue"),
        $tList = $zhujue.find(".z_tab ul .tabList"),
        $info = $zhujue.find(".tab_info .info"),
        k = 0;
    $sp.click(function () {
        $(this).addClass("show").siblings(".sp").removeClass("show");
        if($(this).index(".sp")){
            $tab_show.stop().hide().next(".zhujue").stop().show();
        }else{
            $zhujue.stop().hide().prev(".tab_show").stop().show();
        }
    });
    //zhujuetab切换
    $tList.click(function () {
        k = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $info.eq(k).addClass("on").siblings().removeClass("on");
    })
})();
//strategy
(function(){
    var $strategy = $("#strategy_section"),
        $pic = $strategy.find(".left .leftBanner .pic"),
        $picLi = $pic.find(".picList"),
        $list = $picLi.children(".list"),
        $tList = $strategy.find(".leftBanner .tab .list"),
        Banner = new Banr2($picLi,$list,$tList,$pic);
    Banner.exe();
})();
(function(){
    //右侧选项卡内容生产
    var $strategy = $("#strategy_section"),
        typeArr = ["新手" , "式神" , "斗技" , "玩法" , "高阶" , "御魂"],
        $title = $strategy.find(".right .title ul li.list"),
        $show = $strategy.find(".right .r_content .show"),
        $ul = $show.find("ul");

    //生成ul的内容
    $ul.each(function (i) {
        var num = 0;
        for (var j = 0,length = strateData.length; j < length; j++) {
            var data = strateData[j],
                reg = new RegExp(i-1);
            if ( !i || reg.test(data.type) ){
                var index = !i?data.type.charAt(data.type.length-1):i-1;
                $(this).append('<li>' +
                    '<a href="">' +
                    '<i></i> ' +
                    '<p class="mTitle">【<span class="type">'+typeArr[index]+'</span>】&nbsp;'+data.title+'</p> ' +
                    '<p class="author">作者：<span>'+data.author+'</span></p>' +
                    '</a>' +
                    '</li>');
            }
        }
    });
    var Banner = new Banr($show,$ul,$title);
    Banner.exe();
})();
//fan
(function(){
    var $tongren = $("#tongren_section"),
        $show = $tongren.find(".mFan .show"),
        $tab = $tongren.find(".tab .tabNav ul li"),
        length = 6;

    for (var i = 0; i < length; i++) {
        var $ul = $("<ul></ul>");
        for (var j = i*8; j < (i+1)*8; j++) {
            $ul.append('<li>\
                <div class="pic">\
                <img src="'+tongrenData[j].url+'" alt="">\
                <span><b></b></span>\
                </div>\
                <p class="sTitle">'+tongrenData[j].title+'</p>\
            </li>');
        }
        $show.append($ul);
    }
    var Banner = new Banr($show,$ul,$tab);
    Banner.exe();

})();
//回到顶部
(function(){
    var $gTop = $("#contact").find(".goTop");
        $gTop.click(function () {
        $("body,html").animate({
            scrollTop:0
        },500)
    })
})();


//newsBanner
// $banner = $news.find(".banner"),
// $pic = $banner.find(".pic"),
// $list = $pic.children(),
// $tList = $news.find(".tab .tList"),
//     index = 0,
//     time = null,
//     time1 = null,
//     length = $list.length,
//     width = $list.width();
// //banner
// $tList.mouseenter(function () {
//     $this = $(this);
//     clearTimeout(time);
//     time = setTimeout(function () {
//         index = $this.index();
//         $this.stop().addClass("on").siblings().removeClass("on");
//         $pic.stop().animate({
//             left:-width*index
//         },500);
//     },200);
// });
// auto();
// $banner.hover(function () {
//     clearInterval(time1);
// },auto);
// function auto() {
//     time1 = setInterval(function () {
//         index++;
//         index %=length;
//         $tList.eq(index).addClass("on").siblings().removeClass("on");
//         $pic.stop().animate({
//             left:-width*index
//         },500);
//     },2000);
//     return auto;
// }
//info
//info选项卡
// $t_List.mouseenter(function () {
//$This = $(this),
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//         $This.addClass("on").siblings().removeClass("on");
//         index = $This.index();
//         $ul.stop().animate({
//             left:-w*index
//         },500)
//     },300);
// });
//leftBanner
// $tList.mouseenter(function () {
//     index= $(this).index();
//     $tList.stop().addClass("on").siblings().removeClass("on");
//     $picLi.animate({
//         left:-index*width
//     },500)
// });
// $pic.hover(function () {
//     clearInterval(time);
// },auto);
// time = setInterval(auto,2000);
// function auto() {
//     index++;
//     index%=length;
//     $tList.stop().eq(index).addClass("on").siblings().removeClass("on");
//     $picLi.animate({
//         left:-index*width
//     },500)
// }
// index = 0,
//     width = $ul.width();
// $title.mouseenter(function () {
//     index = $(this).index(".right .title ul li.list");
//     $title.eq(index).stop().addClass("on").siblings().removeClass("on");
//     $show.stop().animate({
//         left:-index*width
//     },500)
// })
//切换
// var width = $ul.width();
// $tab.mouseenter(function () {
//     index = $(this).index();
//     $(this).stop().addClass("on").siblings().removeClass("on");
//     $show.stop().animate({
//         left:-width*index
//     },500)
// })

