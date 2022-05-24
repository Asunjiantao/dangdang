<template>
  <div class="fz">
    <div class="fz-top clear">
      <h4 class="fl">服装</h4>
      <ul class="fr nav"
          ref="nav">
        <li class="active">
          服装鞋包
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          运动潮流
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          女装男装内衣
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          童装童鞋
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          鞋靴箱包
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
      </ul>
    </div>
    <div class="con"
         ref="cons">
      <div class="con-a active">
        <div class="con-a-left">
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <ul>
            <li><a href="">童装</a></li>
            <li><a href="">童鞋</a></li>
            <li><a href="">婴儿服饰</a></li>
            <li><a href="">童装T恤</a></li>
            <li><a href="">童装裤子</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">衬衫女</a></li>
            <li><a href="">女士裤装</a></li>
            <li><a href="">跑步鞋</a></li>
            <li><a href="">运动服饰</a></li>
            <li><a href="">户外裤装</a></li>
            <li><a href="">男士T恤</a></li>
            <li><a href="">男士牛仔裤</a></li>
            <li><a href="">男士外套</a></li>
            <li><a href="">凉鞋</a></li>
            <li><a href="">太阳镜</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">内衣袜品</a></li>
          </ul>
        </div>
        <div class="con-a-outside">
          <el-carousel :interval="3000"
                       height="340px"
                       arrow="always">
            <el-carousel-item v-for="item in imgList"
                              :key="item.id">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="con-a-right">
          <a href=""> <img src="../../assets/img/53840181423302_y.jpg"
                 alt=""></a>
          <a href=""> <img src="../../assets/img/53840181423304_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/77100181569064_y.jpg"
                 alt=""></a>
        </div>
        <div class="con-a-bottom">
          <a href=""><img src="../../assets/img/I0422635-1647251469 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0422387-1644808860 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I_04-10748-1621577175 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0415944-1644808838 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/6-1621330573.jpg"
                 alt=""></a>
        </div>
      </div>
      <div class="con-b">
        <div class="con-a-left">
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <ul>
            <li><a href="">童装</a></li>
            <li><a href="">童鞋</a></li>
            <li><a href="">婴儿服饰</a></li>
            <li><a href="">童装T恤</a></li>
            <li><a href="">童装裤子</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">衬衫女</a></li>
            <li><a href="">女士裤装</a></li>
            <li><a href="">跑步鞋</a></li>
            <li><a href="">运动服饰</a></li>
            <li><a href="">户外裤装</a></li>
            <li><a href="">男士T恤</a></li>
            <li><a href="">男士牛仔裤</a></li>
            <li><a href="">男士外套</a></li>
            <li><a href="">凉鞋</a></li>
            <li><a href="">太阳镜</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">内衣袜品</a></li>
          </ul>
        </div>
        <div class="con-a-outside">
          <el-carousel :interval="3000"
                       height="340px"
                       arrow="always">
            <el-carousel-item v-for="item in imgList"
                              :key="item.id">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="con-a-right">
          <a href=""> <img src="../../assets/img/I031-1632825585 - 副本.jpg"
                 alt=""></a>
          <a href=""> <img src="../../assets/img/I033-1632825648 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
        </div>
        <div class="con-a-bottom">
          <a href=""><img src="../../assets/img/77100181569063_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/186920220775964_y - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/206770133407702_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/80640151623403_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/53840181422419_y.jpg"
                 alt=""></a>
        </div>
      </div>
      <div class="con-c">
        <div class="con-a-left">
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <ul>
            <li><a href="">童装</a></li>
            <li><a href="">童鞋</a></li>
            <li><a href="">婴儿服饰</a></li>
            <li><a href="">童装T恤</a></li>
            <li><a href="">童装裤子</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">衬衫女</a></li>
            <li><a href="">女士裤装</a></li>
            <li><a href="">跑步鞋</a></li>
            <li><a href="">运动服饰</a></li>
            <li><a href="">户外裤装</a></li>
            <li><a href="">男士T恤</a></li>
            <li><a href="">男士牛仔裤</a></li>
            <li><a href="">男士外套</a></li>
            <li><a href="">凉鞋</a></li>
            <li><a href="">太阳镜</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">内衣袜品</a></li>
          </ul>
        </div>
        <div class="con-a-outside">
          <el-carousel :interval="3000"
                       height="340px"
                       arrow="always">
            <el-carousel-item v-for="item in imgList"
                              :key="item.id">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="con-a-right">
          <a href=""> <img src="../../assets/img/8258-1634869936.jpg"
                 alt=""></a>
          <a href=""> <img src="../../assets/img/dafuni-1634872325.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/85250200959441_y.jpg"
                 alt=""></a>
        </div>
        <div class="con-a-bottom">
          <a href=""><img src="../../assets/img/215060264858171_y - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/232640173366396_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/F2154002-1644806660 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/F2263501-1644806502.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0415944-1644808838.jpg"
                 alt=""></a>
        </div>
      </div>
      <div class="con-d">
        <div class="con-a-left">
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <ul>
            <li><a href="">童装</a></li>
            <li><a href="">童鞋</a></li>
            <li><a href="">婴儿服饰</a></li>
            <li><a href="">童装T恤</a></li>
            <li><a href="">童装裤子</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">衬衫女</a></li>
            <li><a href="">女士裤装</a></li>
            <li><a href="">跑步鞋</a></li>
            <li><a href="">运动服饰</a></li>
            <li><a href="">户外裤装</a></li>
            <li><a href="">男士T恤</a></li>
            <li><a href="">男士牛仔裤</a></li>
            <li><a href="">男士外套</a></li>
            <li><a href="">凉鞋</a></li>
            <li><a href="">太阳镜</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">内衣袜品</a></li>
          </ul>
        </div>
        <div class="con-a-outside">
          <el-carousel :interval="3000"
                       height="340px"
                       arrow="always">
            <el-carousel-item v-for="item in imgList"
                              :key="item.id">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="con-a-right">

          <a href=""> <img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <a href=""> <img src="../../assets/img/218080195790043_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/77100181569064_y.jpg"
                 alt=""></a>
        </div>
        <div class="con-a-bottom">
          <a href=""><img src="../../assets/img/I0422635-1647251469 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0422387-1644808860 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I_04-10748-1621577175 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0415944-1644808838 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/6-1621330573.jpg"
                 alt=""></a>
        </div>
      </div>
      <div class="con-e">
        <div class="con-a-left">
          <a href=""><img src="../../assets/img/balbala-1649329255.png"
                 alt=""></a>
          <ul>
            <li><a href="">童装</a></li>
            <li><a href="">童鞋</a></li>
            <li><a href="">婴儿服饰</a></li>
            <li><a href="">童装T恤</a></li>
            <li><a href="">童装裤子</a></li>
            <li><a href="">女装</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">衬衫女</a></li>
            <li><a href="">女士裤装</a></li>
            <li><a href="">跑步鞋</a></li>
            <li><a href="">运动服饰</a></li>
            <li><a href="">户外裤装</a></li>
            <li><a href="">男士T恤</a></li>
            <li><a href="">男士牛仔裤</a></li>
            <li><a href="">男士外套</a></li>
            <li><a href="">凉鞋</a></li>
            <li><a href="">太阳镜</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">内衣袜品</a></li>
          </ul>
        </div>
        <div class="con-a-outside">
          <el-carousel :interval="3000"
                       height="340px"
                       arrow="always">
            <el-carousel-item v-for="item in imgList"
                              height="340px"
                              :key="item.id">
              <img :src="item.img"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="con-a-right">
          <a href=""> <img src="../../assets/img/C3-22079-1620716364.jpg"
                 alt=""></a>
          <a href=""> <img src="../../assets/img/215060264860510_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/77100181569064_y.jpg"
                 alt=""></a>
        </div>
        <div class="con-a-bottom">
          <a href=""><img src="../../assets/img/182870160217717_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/185840171247438_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/119130173404043_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/I0415944-1644808838 - 副本.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/232640173366396_y.jpg"
                 alt=""></a>
        </div>
      </div>
    </div>
    <div class="fz-footer">
      <el-carousel indicator-position="none"
                   height="50px">
        <el-carousel-item v-for="item in 2"
                          :key="item.id">
          <img src="../../assets/img/footerimg.jpg"
               alt="">
          <img src="../../assets/img/footerimg.jpg"
               alt="">
          <img src="../../assets/img/footerimg.jpg"
               alt="">
          <img src="../../assets/img/footerimg.jpg"
               alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        { img: require("../../assets/img/85250200959443_y.jpg") },
        { img: require("../../assets/img/218500178600044_y.jpg") }
      ],
      imgFooter: [
        { img: require("../../assets/img/footerimg.jpg") },
        { img: require("../../assets/img/footerimg1.jpg") },
        { img: require("../../assets/img/footerimg1.jpg") },
        { img: require("../../assets/img/footerimg1.jpg") },
        { img: require("../../assets/img/footerimg1.jpg") },
        { img: require("../../assets/img/footerimg1.jpg") },

      ]
    }
  },
  mounted () {
    let nav = this.$refs.nav.children
    let cons = this.$refs.cons.children
    for (let i = 0; i < nav.length; i++) {
      nav[i].index = i;  //给当前标签设置索引值
      nav[i].onmouseover = function () {
        for (let j = 0; j < nav.length; j++) {
          nav[j].classList.remove("active");
          cons[j].classList.remove("active");
        }
        this.classList.add("active");
        // console.log(this.index);
        cons[this.index].classList.add("active")

      }
    }
  }
}
</script>
<style scoped>
.el-carousel__container {
  height: 340px !important;
}
.fz {
  width: 1200px;
  margin: 0 auto;
}
.fz .fz-top {
  height: 43px;
  line-height: 40px;
  border-bottom: 2px solid black;
}
.fz .fz-top > .nav {
  display: flex;
  flex-wrap: wrap; /* 换行 */
  width: 600px;
}
.fz .fz-top > .nav li {
  position: relative;
  flex: 1;
  background: #f5f5f5;
  border-right: 1px solid #c1c1c1;
  border-top: 1px solid #c1c1c1;
  z-index: 99;
}
.fz .fz-top > .nav li:first-child {
  border-left: 1px solid #c1c1c1;
}
.fz .fz-top > .nav li p {
  position: absolute;
  display: none;
}
.fz .fz-top > .nav .active p {
  display: block;
}
.fz .fz-top > .nav li p:nth-of-type(1) {
  width: 2px;
  height: 42px;
  left: -1px;
  top: -1px;
  border-left: 2px solid black;
}
.fz .fz-top > .nav li p:nth-of-type(2) {
  width: 120px;
  height: 40px;
  left: -1px;
  top: -1px;
  border-top: 2px solid black;
}
.fz .fz-top > .nav li p:nth-of-type(3) {
  width: 120px;
  height: 42px;
  left: 0px;
  top: -1px;
  border-right: 2px solid black;
}
.fz .fz-top > .nav li p:nth-of-type(4) {
  width: 117px;
  height: 40px;
  left: 1px;
  top: 2px;
  border-bottom: 2px solid #fff;
}
.fz .con {
  height: 523px;
  width: 1200px;
  border: 1px solid #e6e6e6;
  margin: 20px auto;
}
.fz .con > div {
  display: none;
}
.fz .con .active {
  display: block;
}
.con-a-outside {
  width: 383px;
  height: 340px;
  float: left;
}
.con-a-outside img {
  width: 383px;
  height: 340px;
}
.con-a-left {
  position: relative;
  float: left;
}
.con-a-left ul {
  bottom: 0;
  position: absolute;
  background: rgb(255, 255, 255, 0.9);
}

.con-a-left ul li {
  font-size: 12px;
  float: left;
  width: 63px;
  height: 28px;
  line-height: 28px;
  padding-left: 16px;
  overflow: hidden;
  text-align: left;
}
.con-a-left a {
  color: #323232;
}
.con-a-left a:hover {
  color: #ff2832;
  text-decoration: underline;
}
.con-a-right a {
  display: block;
  width: 192px;
  height: 340px;
  border-right: 1px solid #e6e6e6;
  overflow: hidden;
  float: left;
}
.con-a-right a:last-child {
  border-right: 1px solid transparent;
}
.con-a-bottom a {
  float: left;
  width: 192px;
  border-right: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  height: 180px;
  overflow: hidden;
  text-align: center;
}
.con-a-bottom a:last-child {
  border-right: 1px solid transparent;
}
.fz-footer {
  width: 1190px;
  height: 55px;
  margin: 0 auto;
}
.fz-footer img {
  width: 110px;
  height: 50px;
}
</style>