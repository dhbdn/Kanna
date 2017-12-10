
/*
*  0 新闻
*  1 公告
*  2 活动
*  3 媒体
*
* */
var data = [
    {
        time : "2017-09-13",
        tp : 0,
        title : "-【新闻】 《阴阳师》×bilibili举办式神歌舞同欢会 妖约现世盛夏"
    },
    {
        time : "2017-09-12",
        tp : 0,
        title : "-【新闻】 《阴阳师》×半次元打造百魅夜行第二季  开启唯美和风COSPLAY嘉年华"
    },
    {
        time : "2017-09-12",
        tp : 2,
        title : "-【活动】 声控召唤 第二季《阴阳师》广播剧配音大赛来袭"
    },
    {
        time : "2017-09-11",
        tp : 0,
        title : "-【新闻】 《阴阳师》同人社区全新上线，玩转精彩同人"
    },
    {
        time : "2017-09-11",
        tp : 1,
        title : "-【公告】 《阴阳师》体验服6月9日维护更新公告"
    },
    {
        time : "2017-09-10",
        tp : 0,
        title : "-【新闻】 《阴阳师》×梅林茂纪录片发布：走进大师心中的平安世界"
    },
    {
        time : "2017-09-09",
        tp : 0,
        title : "-【新闻】 声控大触集结 《阴阳师》广播剧大赛精彩作品展示"
    },
    {
        time : "2017-09-08",
        tp : 1,
        title : "-【公告】 《阴阳师》手游6月9日维护更新公告"
    },
    {
        time : "2017-09-08",
        tp : 1,
        title : "-【公告】 《阴阳师》体验服6月2日维护更新公告"
    },
    {
        time : "2017-09-07",
        tp : 1,
        title : "-【公告】 《阴阳师》体验服5月26日维护更新公告"
    },
    {
        time : "2017-09-07",
        tp : 2,
        title : "-【活动】 “浮妖百态”式神设计大赛投稿开启！一起画崽吧！"
    },
    {
        time : "2017-09-13",
        tp : 1,
        title : "-【公告】 《阴阳师》手游6月1日维护更新公告"
    },
    {
        time : "2017-09-09",
        tp : 3,
        title : "-【媒体】 【18183】阴阳师协同斗技登顶阵容:无拉条无控制"
    },
    {
        time : "2017-09-08",
        tp : 2,
        title : "-【活动】 \"浮妖百态\"《阴阳师》式神设计大赛，邀你画崽！"
    },
    {
        time : "2017-09-02",
        tp : 2,
        title : "-【活动】 KFC跨界应援！炸鸡可乐与式神召唤"
    },
    {
        time : "2017-09-02",
        tp : 3,
        title : "-【媒体】 [18183]专访网易游戏贾海漠：让阴阳师文化渗透到大众生活"
    },
    {
        time : "2017-09-01",
        tp : 3,
        title : "-【媒体】 AppSo2016 《阴阳师》登年度榜单"
    },
    {
        time : "2017-08-30",
        tp : 2,
        title : "-【活动】 \"舔瓶我崽\"，跨界表白，揭盖召唤果味崽"
    },
    {
        time : "2017-08-29",
        tp : 3,
        title : "-【媒体】 【17173】我的领导是个极品 他为抽SSR去了晴明神社"
    },
    {
        time : "2017-08-29",
        tp : 3,
        title : "-【媒体】 【17173】没想到你是这样的姑获鸟 一个SR为何有SSR的实力？"
    }
];

var dataList = [
        {
            "id": 291,
            "level": "SR",
            "name": "涔︾縼",
            "isNew": true
        },
        {
            "id": 289,
            "level": "R",
            "name": "鍏斾父",
            "isNew": true
        },
        {
            "id": 290,
            "level": "SR",
            "name": "灏忔澗涓�"
        },
        {
            "id": 288,
            "level": "SSR",
            "name": "褰煎哺鑺�"
        },
        {
            "id": 287,
            "level": "SR",
            "name": "鍖ｄ腑灏戝コ"
        },
        {
            "id": 285,
            "level": "SR",
            "name": "楦�"
        },
        {
            "id": 286,
            "level": "SR",
            "name": "浠ユ触鐪熷ぉ"
        },
        {
            "id": 283,
            "level": "SSR",
            "name": "鑽�"
        },{
        "id": 282,
        "level": "SR",
        "name": "閲戦奔濮�"
    },{
        "id": 275,
        "level": "SR",
        "name": "涓囧勾绔�"
    },{
        "id": 273,
        "level": "SR",
        "name": "闈掑潑涓�"

    },{
        "id": 274,
        "level": "R",
        "name": "鍙ょ鐏�"
    },{
        "id": 276,
        "level": "SR",
        "name": "澶滃弶"
    },{
        "id": 277,
        "level": "SR",
        "name": "榛戠瀛�"
    },{
        "id": 278,
        "level": "SR",
        "name": "鐧界瀛�"
    },{
        "id": 279,
        "level": "SSR",
        "name": "鑺遍笩鍗�"
    },{
        "id": 281,
        "level": "SR",
        "name": "鐑熺儫缃�"
    },{
        "id": 280,
        "level": "SSR",
        "name": "杈夊濮�"
    },
    {
        "id": 200,
        "name": "妗冭姳濡�",
        "level": "SR"
        
        
    },
    {
        "id": 201,
        "name": "闆コ",
        "level": "SR"
        
        
    },
    {
        "id": 202,
        "name": "涓夊熬鐙�",
        "level": "R"
        
        
    },
    {
        "id": 203,
        "name": "鐏楝�",
        "level": "N"
    },
    {
        "id": 205,
        "name": "搴ф暦绔ュ瓙",
        "level": "R"
        
        
    },
    {
        "id": 206,
        "name": "椴ら奔绮�",
        "level": "R"
        
        
    },
    {
        "id": 207,
        "name": "涔濆懡鐚�",
        "level": "R"
        
        
    },
    {
        "id": 208,
        "name": "鐙哥尗",
        "level": "R"
    },
    {
        "id": 209,
        "name": "娌崇",
        "level": "R"
    },
    {
        "id": 210,
        "name": "楝间娇鐧�",
        "level": "SR"
        
        
    },
    {
        "id": 211,
        "name": "楝间娇榛�",
        "level": "SR"
        
        
    },
    {
        "id": 212,
        "name": "绔ョ敺",
        "level": "R"
        
        
    },
    {
        "id": 213,
        "name": "绔ュコ",
        "level": "R"
    },
    {
        "id": 214,
        "name": "楗块",
        "level": "R"
    },
    {
        "id": 215,
        "name": "瀛熷﹩",
        "level": "SR"
        
        
    },
    {
        "id": 216,
        "name": "宸泭甯�",
        "level": "R"
        
        
    },
    {
        "id": 217,
        "name": "澶уぉ鐙�",
        "level": "SSR"
        
        
    },
    {
        "id": 218,
        "name": "楦﹀ぉ鐙�",
        "level": "R"
        
        
    },
    {
        "id": 219,
        "name": "閰掑悶绔ュ瓙",
        "level": "SSR"
        
        
    },
    {
        "id": 220,
        "name": "鐘",
        "level": "SR"
        
        
    },
    {
        "id": 221,
        "name": "椋熷彂楝�",
        "level": "R"
        
        
    },
    {
        "id": 222,
        "name": "姝﹀＋涔嬬伒",
        "level": "R"
    },
    {
        "id": 223,
        "name": "楠ㄥコ",
        "level": "SR"
        
        
    },
    {
        "id": 224,
        "name": "闆ㄥコ",
        "level": "R"
    },
    {
        "id": 225,
        "name": "璺宠烦寮熷紵",
        "level": "R"
        
        
    },
    {
        "id": 226,
        "name": "璺宠烦濡瑰",
        "level": "R"
        
        
    },
    {
        "id": 227,
        "name": "鍏典繎",
        "level": "R"
        
        
    },
    {
        "id": 228,
        "name": "涓戞椂涔嬪コ",
        "level": "R"
        
        
    },
    {
        "id": 230,
        "name": "鐙溂灏忓儳",
        "level": "R"
        
        
    },
    {
        "id": 231,
        "name": "楝煎コ绾㈠彾",
        "level": "SR"
        
        
    },
    {
        "id": 232,
        "name": "閾侀紶",
        "level": "R"
        
        
    },
    {
        "id": 233,
        "name": "璺宠烦鍝ュ摜",
        "level": "SR"
        
        
    },
    {
        "id": 234,
        "name": "妞掑浘",
        "level": "R"
        
        
    },
    {
        "id": 236,
        "name": "绠＄嫄",
        "level": "R"
        
        
    },
    {
        "id": 237,
        "name": "灞卞厰",
        "level": "R"
        
        
    },
    {
        "id": 238,
        "name": "钀よ崏",
        "level": "R"
        
        
    },
    {
        "id": 241,
        "name": "铦磋澏绮�",
        "level": "R"
        
        
    },
    {
        "id": 242,
        "name": "鍌€鍎″笀",
        "level": "SR"
        
        
    },
    {
        "id": 243,
        "name": "灞辩",
        "level": "R"
    },
    {
        "id": 244,
        "name": "棣栨棤",
        "level": "R"
        
        
    },
    {
        "id": 245,
        "name": "鎻愮伅灏忓儳",
        "level": "N"
    },
    {
        "id": 246,
        "name": "璧よ垖",
        "level": "N"
    },
    {
        "id": 247,
        "name": "娴峰潑涓�",
        "level": "SR"
        
        
    },
    {
        "id": 248,
        "name": "鑽掑窛涔嬩富",
        "level": "SSR"
        
        
    },
    {
        "id": 249,
        "name": "瑙�",
        "level": "R"
    },
    {
        "id": 250,
        "name": "闈掕洐鐡峰櫒",
        "level": "R"
        
        
    },
    {
        "id": 251,
        "name": "鍒ゅ畼",
        "level": "SR"
        
        
    },
    {
        "id": 252,
        "name": "鍑ゅ嚢鐏�",
        "level": "SR"
        
        
    },
    {
        "id": 253,
        "name": "鍚歌濮�",
        "level": "SR"
        
        
    },
    {
        "id": 254,
        "name": "濡栫嫄",
        "level": "SR"
        
        
    },
    {
        "id": 255,
        "name": "闃庨瓟",
        "level": "SSR"
        
        
    },
    {
        "id": 256,
        "name": "濡栫惔甯�",
        "level": "SR"
        
        
    },
    {
        "id": 257,
        "name": "椋熸ⅵ璨�",
        "level": "SR"
        
        
    },
    {
        "id": 258,
        "name": "涓ら潰浣�",
        "level": "SSR"
        
        
    },
    {
        "id": 259,
        "name": "灏忛箍鐢�",
        "level": "SSR"
        
        
    },
    {
        "id": 260,
        "name": "娓呭К",
        "level": "SR"
        
        
    },
    {
        "id": 261,
        "name": "闀伴棘",
        "level": "SR"
        
        
    },
    {
        "id": 262,
        "name": "濮戣幏楦�",
        "level": "SR"
        
        
    },
    {
        "id": 263,
        "name": "浜屽彛濂�",
        "level": "SR"
        
        
    },
    {
        "id": 264,
        "name": "鐧界嫾",
        "level": "SR"
        
        
    },
    {
        "id": 265,
        "name": "鑼ㄦ湪绔ュ瓙",
        "level": "SSR"
        
        
    },
    {
        "id": 266,
        "name": "闈掕鐏�",
        "level": "SSR"
        
        
    },
    {
        "id": 267,
        "name": "妯辫姳濡�",
        "level": "SR"
        
        
    },
    {
        "id": 268,
        "name": "鎯犳瘮瀵�",
        "level": "SR"
        
        
    },
    {
        "id": 269,
        "name": "濡栧垁濮�",
        "level": "SSR"
        
        
    },
    {
        "id": 270,
        "name": "缁滄柊濡�",
        "level": "SR"
    },

    {
        "id": 400,
        "name": "鐩楀灏忛",
        "level": "N"
    },
    {
        "id": 401,
        "name": "瀵勭敓榄�",
        "level": "N"
    },

    {
        "id": 403,
        "name": "鍞愮焊浼炲",
        "level": "N"
    },
    {
        "id": 404,
        "name": "澶╅偑楝肩豢",
        "level": "N"
    },
    {
        "id": 405,
        "name": "澶╅偑楝艰丹",
        "level": "N"
    },
    {
        "id": 406,
        "name": "澶╅偑楝奸粍",
        "level": "N"
    },
    {
        "id": 407,
        "name": "澶╅偑楝奸潚",
        "level": "N"
    },
    {
        "id": 408,
        "name": "甯氱",
        "level": "N"
    },
    {
        "id": 409,
        "name": "娑傚",
        "level": "N"
    },
    {
        "id": 272,
        "name": "涓€鐩繛",
        "level": "SSR"
    },
    {
        "id": 271,
        "name": "鑸嫢",
        "level": "SR"
    }
    ];
// 0 - 新手  1 - 式神  2 - 斗技  3 - 玩法  4 - 御魂   5 - 高阶
var strateData = [
    {
        type : "0235",
        title : "逆转的胜利！反击流式神阵容推荐！",
        author : "迷い子"
    },
    {
        type : "03",
        title : "秘闻！双奶过河童本十层",
        author : "龙仕少爷"
    },
    {
        type : "123",
        title : "青行灯，美腿姐姐的全面剖析！",
        author : "散佚ROMA"
    },
    {
        type : "12345",
        title : "尾速妖琴师 —— 好吧，再给你一次机会",
        author : "晚风大神"
    },
    {
        type : "12345",
        title : "强势R卡，正面挑战SSR！",
        author : "无法回头的非酋"
    },
    {
        type : "023",
        title : "40级阴阳师的合理式神搭配",
        author : "垣语刖"
    },
    {
        type : "1234",
        title : "小小黑反杀阵容+雨女十层攻略",
        author : "把子小天使"
    },
    {
        type : "245",
        title : "进击的反击流！",
        author : ""
    },
    {
        type : "14",
        title : "“匣中少女”爱的~全方位评测",
        author : "冰冷之海"
    },
    {
        type : "0",
        title : "友谊的见证！好友羁绊打开方式",
        author : "吴妍"
    },
    {
        type : "03",
        title : "时间静止，开启魂10之路",
        author : "水之生灵"
    },
    {
        type : "01",
        title : "阴阳师主流四治疗大盘点！",
        author : "秋瓷的好爸爸"
    },
    {
        type : "04",
        title : "全【御魂】详解与欣赏",
        author : "流浪的书生"
    },
    {
        type : "01",
        title : "有奶便是娘！热门治疗式神推荐",
        author : "itmo爱萌游戏"
    },
    {
        type : "013",
        title : "鼠鼠VS兔兔？感受三兄弟的羁绊吧！",
        author : "Lionbaby"
    },
    {
        type : "03",
        title : "萌新专列！四星麒麟黑科技，发车~",
        author : "残云"
    },
    {
        type : "0",
        title : "萌新蜕变之路",
        author : "四隅花火"
    },
    {
        type : "12",
        title : "黄金之羽【以津真天】暴力出击！",
        author : "进击的皮皮"
    },
    {
        type : "12",
        title : "极致恐惧丶触之即死-3000分黑童子",
        author : "释然"
    },
    {
        type : "2",
        title : "日女巳时：转身~向后走~！",
        author : "乐于助人的小奇"
    },
    {
        type : "3",
        title : "一场妥妥的战斗，【妖刀十层】再约~",
        author : "神形"
    },
    {
        type : "3",
        title : "星辰之境荒！破【河童副本】十层",
        author : "不和禽兽玩"
    },
    {
        type : "3",
        title : "日常御魂十层组队详细攻略",
        author : "咪个喵的"
    },
    {
        type : "3",
        title : "【河童本】第十层过关技巧！",
        author : "吴妍"
    },
    {
        type : "3",
        title : "【河童本】那位清流中走出的少年，愿和你一起努力",
        author : "潘家小金莲"
    },
    {
        type : "3",
        title : "萌新专列！四星麒麟黑科技，发车~",
        author : "残云"
    },
    {
        type : "3",
        title : "【业原火】痴之阵推荐过关配置",
        author : "穷人"
    },
    {
        type : "3",
        title : "为美腻小姐姐奋斗！平民过【妖刀本】",
        author : "绯蜂"
    }
];
var tongrenData = [
    {
        type : 0,
        url : "img/index/fan/jxtj/1.jpg",
        title : "妖刀姬cos【作者】@押切YAKI"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/2.jpg",
        title : "黑童子x白童子【作者】狗司令太子&大霖先森"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/3.jpg",
        title : "宰了那个阿爸【作者】茉莉瓜"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/4.jpg",
        title : "承包自己的大尾巴！【作者】remirror逆镜"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/5.png",
        title : "椒图原创皮肤【作者】溪初阳关"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/6.jpg",
        title : "午后日常【作者】玄米糕糕"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/7.jpg",
        title : "萤草合集【作者】腥臭的百瑞笔迹"
    },
    {
        type : 0,
        url : "img/index/fan/jxtj/8.jpg",
        title : "妖琴师新衣【作者】@日出的小太阳"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/01.jpg",
        title : "式神魔法少女服【作者】 罗丸二"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/02.jpg",
        title : "寮日常，元、天、夫【作者】Koch_扣取"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/03.jpg",
        title : "日常心机【作者】-瓜子--"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/04.jpg",
        title : "酒茨逸事（二）【作者】KUMA没有猫"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/05.jpg",
        title : "阴阳师角色西装【作者】想要飞起来的零啊"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/06.jpg",
        title : "不可言说之事（二）【作者】精分兔乖乖"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/07.jpg",
        title : "酒茨小故事【作者】湘立"
    },
    {
        type : 1,
        url : "img/index/fan/trhh/08.jpg",
        title : "合集【作者】阿婶sheen"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/1.jpg",
        title : "姑获鸟cos【作者】papapa帕娘"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/2.jpg",
        title : "山兔cos【作者】茶兔阿"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/3.jpg",
        title : "神乐和莹草COS【作者】舔手指的毛毛虫"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/4.jpg",
        title : "萤草cos【作者】亀梨郁"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/5.png",
        title : "鬼女红叶cos【作者】流苏"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/6.png",
        title : "青行灯cos【作者】Jiawen"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/7.png",
        title : "吸血姬cos【作者】值木姐姐"
    },
    {
        type : 2,
        url : "img/index/fan/wjCOS/8.jpg",
        title : "性转茨木【作者】未岚RAN"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/01.jpg",
        title : "华丽现世召唤，突破次元壁之旅【作者】《阴阳师》手游"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/02.jpg",
        title : "【有声漫画】妖狐与天狗【莫逸工作室】【眠君】【作者】莫逸工作室&眠君"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/03.jpg",
        title : "祝各位阴阳师大人六一节日快乐【作者】"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/04.jpg",
        title : "【狗崽手书】樱色の梦【作者】@欧气零分偶偶偶"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/05.jpg",
        title : "大天狗X妖狐同人伪动态漫画【作者】绘音配音&印巴巴【作者】绘音配音&印巴巴"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/06.jpg",
        title : "源博雅与大天狗的惩罚游戏【作者】明矾矾矾矾"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/07.jpg",
        title : "当然是选择原谅她【作者】《阴阳师》手游"
    },
    {
        type : 3,
        url : "img/index/fan/trsp/08.jpg",
        title : "O夫山泉广告时间，认真就输惹【作者】《阴阳师》手游"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/01.jpg",
        title : "华之乱#酒茨【作者】八点三十二分"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/02.jpg",
        title : "狗崽【作者】929****41"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/03.jpg",
        title : "指间冰雪（姑获鸟×雪女）【作者】瑶台镜"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/04.png",
        title : "阴阳师妖狐前身传记二【作者】Heyingyao"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/05.png",
        title : "阴阳师妖狐前身传记一【作者】Heyingyao"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/06.png",
        title : "阴阳寮的元宵节【作者】月朝歌＃阴阳师同人文大赛＃"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/07.jpg",
        title : "阴阳见闻录【作者】我初初见你"
    },
    {
        type : 4,
        url : "img/index/fan/trxs/08.jpg",
        title : "万法皆空，有你无法【作者】小二上酒"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/01.jpg",
        title : "萌萌哒的小式神！【作者】会飞的鱼儿不想飞"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/02.jpg",
        title : "大天狗轻粘土【作者】包子酱Cion"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/03.jpg",
        title : "荒川之主轻粘土【作者】猫素粘土"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/04.jpg",
        title : "萤草超轻粘土【作者】美少女的魔法城堡"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/05.jpg",
        title : "一目连超轻粘土【作者】亭临"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/06.jpg",
        title : "小天狗和小崽崽【作者】紫衣烟染"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/07.jpg",
        title : "好可爱的山兔！【作者】狼烟KID痴迷32"
    },
    {
        type : 5,
        url : "img/index/fan/gszmj/08.jpg",
        title : "式神软陶手工！【作者】阿染"
    }
];










