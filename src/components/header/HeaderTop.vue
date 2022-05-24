<template>
  <div class="top">
    <div class="topimg">
      <img src="../../assets/images/tapimg.jpg"
           alt="">
    </div>
    <div class="bottom"
         ref="none">
      <img src="../../assets/images/yinliubanner-1640156285.gif"
           alt="">
      <div class="close"
           @click="close">
        <i class="iconfont">&#xe6ed;</i>
      </div>
    </div>
    <div class="fixed">
      <div class="fixed-top">
        <div class="fixed-img">
          <img src="../../assets/images/xintu38-1646722586.jpg"
               alt="">

          <ul class="side">
            <li>
              <a href="javascript:;"></a>
              <div class="side-none">
                购物车
              </div>
            </li>
            <li>
              <a href="javascript:;"></a>
              <div class="side-none">
                我的收藏
              </div>
            </li>
            <li>
              <a href="javascript:;"></a>
              <div class="side-none">
                我的浏览
              </div>
            </li>
            <li>
              <a href="javascript:;"></a>
              <div class="side-none">
                我的银铃铛
              </div>
            </li>
            <li>
              <a href="javascript:;"></a>
              <div class="side-none">
                咨询小当家
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div class="fixed-bottom">
        <ul>
          <li>
            <a href="javascript:;"></a>
            <div class="side-none">
              <img src="../../assets/images/code_three.jpg"
                   alt="">
            </div>
          </li>
          <li @click="gotop">
            <a href="javascript:;"></a>
            <div class="side-none">
              返回顶部
            </div>
          </li>
          <li>
            <a href="javascript:;"></a>
          </li>
          <li><a href="javascript:;">广告</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$refs.none.style.display = "none"
    },
    gotop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}
</script>
<style scoped>
@import url(http://at.alicdn.com/t/font_3283832_vn2iyqauwr.css);
.topimg {
  width: 1200px;
  margin: 0 auto;
  height: 200px;
  overflow: hidden;
}
.top .bottom {
  width: 100% !important;
  height: 140px;
  background: rgb(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0;
  z-index: 999999;
}
.top .bottom .close {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.top .bottom .close i {
  position: absolute;
  top: 10px;
  right: 370px;
  color: #fff;
  font-size: 30px;
}
.fixed {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999999999999999999;
}
.fixed ul {
  width: 34px;
}
.fixed ul li a {
  display: block;
  width: 34px;
  height: 34px;
  background: url(../../assets/images/sidebar_icon_2x.png) no-repeat;
  background-size: 80px 280px;
}
.fixed ul li {
  position: relative;
  cursor: pointer;
}
.fixed .side li:first-child {
  background-position: 0 0;
}
.fixed .side li:nth-child(2) a {
  background-position: 0 -35px;
}
.fixed .side li:nth-child(3) a {
  background-position: 0 -70px;
}
.fixed .side li:nth-child(4) a {
  background-position: 0 -105px;
}
.fixed .side li:nth-child(5) a {
  background-position: 0 -210px;
}

.fixed .side li:first-child a:hover {
  background-position: -40px 0;
}
.fixed .side li:nth-child(2) a:hover {
  background-position: -40px -35px;
}
.fixed .side li:nth-child(3) a:hover {
  background-position: -40px -70px;
}
.fixed .side li:nth-child(4) a:hover {
  background-position: -40px -105px;
}
.fixed .side li:nth-child(5) a:hover {
  background-position: -40px -210px;
}
.fixed ul li .side-none {
  position: absolute;
  top: 0;
  right: -100px;
  width: 79px;
  height: 34px;
  background: #4f4f4f;
  color: #fff;
  font-size: 12px;
  line-height: 34px;
  text-align: center;
  transition: 0.3s;
}
.fixed li:hover .side-none {
  right: 34px;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 34px;
  height: 133px;
  background: #4f4f4f;
}
.fixed-bottom li a {
  width: 34px;
  height: 34px;
  background: url(../../assets/images/sidebar_icon_2x.png);
}
.fixed-bottom li:nth-child(1) a {
  background-position: 0 -140px;
}
.fixed-bottom li:nth-child(2) a {
  background-position: 0 -175px;
}
.fixed-bottom li:nth-child(3) a {
  background-position: 0 -245px;
}
.fixed-bottom li:nth-child(4) a {
  background: none;
  color: #fff;
  font-size: 12px;
  line-height: 34px;
}
.fixed-bottom li:nth-child(1):hover a {
  background-position: -40px -140px;
}
.fixed-bottom li:nth-child(1):hover .side-none {
  right: 305px;
}
.fixed-bottom li:nth-child(2):hover a {
  background-position: -40px -175px;
}
.fixed-bottom li:nth-child(3):hover a {
  background-position: -40px -245px;
}
</style>