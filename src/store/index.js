// import { parseFloat } from 'core-js/core/number';
// import {set } from 'core-js/core/dict';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isflag: {
            isinfo: "true",
            setAddSuccess: "false",
            setinfo: "true",
        },
        user: {
            username: "",
            password: ""
        },
        usera: {
            phone: "",
            code: ""
        },
        buycars: [], //购物车
        shoppings: [{
                id: 1,
                url: require("../assets/img/29167684-1_h_1.jpg"),
                tip: "心灵教科书绘本系列：西兰花先生的理发店（教会孩子：敢于打破常规",
                afterprice: 46.60,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "日本精选绘本大赛优 秀奖得主福田纯子倾情奉献。知名阅读推广人、中科院儿童心理学专家徐静琰真诚推荐。教会孩子：敢于打破常规，培养创新意识；告诉大人：有时候，孩子也是我们的老师。附赠大幅实用导读。  "

            },
            {
                id: 2,
                url: require("../assets/img/27873729-1_h_1.jpg"),
                tip: "生命简史：从宇宙起源到人类文明（赠送超大生命星空图，精装大开本",
                afterprice: 123.20,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "恐龙有羽毛吗？59个代表性的人类文明进程你知道几个？这套书是自然资源部优秀科普图书，由中科院院士联名推荐，600多个知识点，1000幅手绘全彩插画，200多种生物，梳理138亿年的生命故事，给孩子  "
            },
            {
                id: 3,
                url: require("../assets/img/28992419-1_l.jpg"),
                tip: "蛤蟆先生去看心理医生（年销200万册！英国经典心理咨询入门书，知",
                afterprice: 26.00,
                beforeprice: "电子书￥9.9",
                titleContnet: "2021年当当网销量No.1！入围《新京报》、豆瓣2020年度图书榜单；英国亚马逊五星评分、授权10个语言版本，自1997年起长销至今。童话版《自卑与超越》，将心理学知识巧妙融入故事情节。  "

            },
            {
                id: 4,
                url: require("../assets/img/23579654-1_h_6.jpg"),
                tip: "三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！",
                afterprice: 87.10,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "《三体》第73届世界科幻雨果奖获奖作品，银河奖特别奖，《三体3》轨迹奖长篇科幻小说！2017年世界雨果奖提名作品。    	"
            },
            {
                id: 5,
                url: require("../assets/img/24184084-1_h_1.jpg"),
                tip: "次第花开 修订版",
                afterprice: 38.2,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "2017全新修订，新增上师数千字再版序言.希阿荣博堪布的现代心灵开示，解开藏人精神愉悦的秘密。陈坤、张嘉译、任鲁豫、李修平、樊登、马未都、何东、程然等盛情推荐.  "
            },
            {
                id: 6,
                url: require("../assets/img/28518072-1_h_1.jpg"),
                tip: "被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎",
                afterprice: 52.00,
                beforeprice: "电子书￥19.9",
                info: "aaaaa旗舰店",
                titleContnet: "被讨厌的勇气：“自我启发之父”阿德勒的哲学课 岸见一郎"
            },
            {
                id: 7,
                url: require("../assets/img/26921715-1_l.jpg"),
                tip: "人生海海（麦家重磅力作，莫言、董卿盛赞，连续两年高居畅销榜，发",
                afterprice: 55.00,
                beforeprice: "电子书￥24.99",
                info: "aaaaa旗舰店",
                titleContnet: "上校赢了所有的仗，却败给一个不足道的秘密。茅盾文学奖得主麦家暌违8年，打磨5年，挑战常人不敢落笔之处，解密人性的荒唐与高尚。人生海海，何必在意一时沉浮！  "

            },
            {
                id: 8,
                url: require("../assets/img/23444350-1_h_52.jpg"),
                tip: "神奇校车·桥梁书版（全20册）",
                afterprice: 144.00,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "幼小衔接升级阅读，科普“桥梁书”匠心之作，跟随神奇校车继续科学冒险之旅，校车迷不可错过的独立阅读读本！（蒲公英童书馆）    	"

            },
            {
                id: 9,
                url: require("../assets/img/23990140-1_h_46.jpg"),
                tip: "正面管教(修订版)",
                afterprice: 100.00,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "如何不惩罚、不娇纵地有效管教孩子。畅销美国400多万册，被翻译成16种语言畅销全球；让数百万孩子、父母和老师受益终身的经典之作；自1981年本书*版出版以来，《正面管教》已经成为管教孩子的“黄金准则 看见春天的味道，亲子美食旅行类图书满100减50。团购电话400-106-6666转6>> "
            },
            {
                id: 10,
                url: require("../assets/img/23946177-1_h_54.jpg"),
                tip: "我们的身体",
                afterprice: 116.00,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "【李佳琦推荐】3-6岁儿童性教育启蒙立体科普书！超好玩、全面的人体百科，翻翻、转转、拉拉、触摸等多重趣味互动环节，让孩子爱上阅读，爱上探索！ 乐乐趣科普阅读翻翻书  "
            },
            {
                id: 11,
                url: require("../assets/img/27913770-1_h_9.jpg"),
                tip: "我爸爸+我妈妈（全2册）——清华附小推荐经典儿童绘本 ！（启发童书馆出品）",
                afterprice: 79.60,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "★多年入选小学推荐阅读书目★清华附小推荐★邓超微博推荐的绘本上线啦：《我不敢说，我怕被骂》《我喜欢自己》《是谁嗯嗯在我的头上》《爱打嗝的斑马》 邓超微博强烈推荐  新的一年带给孩子更多勇气和自信绘本  "

            },
            {
                id: 12,
                url: require("../assets/img/27854383-1_h_161.jpg"),
                tip: "儿童思维导图启蒙绘本",
                afterprice: 99.80,
                beforeprice: "￥9.9",
                info: "aaaaa旗舰店",
                titleContnet: "训练思维能力，大幅提升学习力。用绘本故事形象演示8种神奇的思维魔法，益智思维训练，让学龄前和小学中低年级孩子轻松掌握高效的思维与学习方法。4-6岁亲子阅读，7岁以上独立阅读  "

            }
        ],
    },
    mutations: {
        // 初始化
        // setData(state, res) {
        //     state = {}
        //     state = res;
        //     console.log(res);
        // },

        // 加入购物车
        addBuyCars(state, res) {
            // 该商品在购物车里面不存在, 直接添加  
            // 该商品在购物车里面存在,修改该商品的数量
            let flag = true; //表示商品是否在购物车存在
            state.buycars.forEach(item => {
                if (res.id == item.id) {
                    item.num += res.num;
                    flag = false;
                }
            })
            if (flag) {
                state.buycars.push(res);
            }
            console.log(res.num);
        },
        //控制导航条是否显示或隐藏
        setnavflag(state, res) {
            state.flag = res;
        },
        //
        setuser(state, res) {
            state.user = res;
        },
        setusera(state, res) {
            state.usera = res;
        },
        //控制商品详情页
        setinfo(state, res) {
            state.isflag.isinfo = res;
        },
        //控制商品添加成功页面
        setAddSuccess(state, res) {
            state.isflag.isAddSuccess = res;
        },

    },
    getters: {
        getBuycarsGe(state) {
            let getBuycars = state.buycars;
            getBuycars.forEach(res => {
                Vue.set(res, "checked", false)
                res.totle = parseInt((res.num * res.afterprice).toFixed(2));
            })
            return getBuycars;
        },
    },
    actions: {},
    modules: {}
})