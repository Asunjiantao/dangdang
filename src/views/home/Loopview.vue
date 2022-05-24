<template>
  <div class="a">
    <DdNav></DdNav>
    <div class="loopview"
         ref="loopview">
      <!-- 图片 -->
      <ul class="nav"
          ref="nav">
        <li v-for="item in banners"
            :key="item.id">
          <a :href="item.ihref">
            <img :src="item.isrc"
                 alt="1">
          </a>
          <!-- <p>{{item.id}}</p> -->
        </li>

      </ul>
      <!-- 左右按钮 -->
      <p class="leftbutton"
         ref="leftbutton">&lt;</p>
      <p class="rightbutton"
         ref="rightbutton">&gt;</p>
      <!-- 小圆点 -->
      <div class="sps">
        <ul ref="sps">
          <li v-for="(item,index) in banners"
              :key="item.id">{{index+1}}</li>
        </ul>
      </div>
    </div>
    <div class="loopview-bottom">
      <el-carousel indicator-position="none"
                   height="160px">
        <el-carousel-item v-for="item in imgList"
                          :key="item.id">
          <img src="../../assets/img/2022030815382526753.jpg"
               alt="">
          <img src="../../assets/img/2022030815382526753.jpg"
               alt="">
          <img src="../../assets/img/2022030815382526753.jpg"
               alt="">
          <img src="../../assets/img/2022030815382526753.jpg"
               alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import DdNav from "../../views/home/DdNav.vue"
export default {
  components: {
    DdNav
  },
  props: ["banners"],
  data () {
    return {
      index: 0,  //控制显示当前图片
      timer: null,
      imgList: [
        { id: 1, src: require("../../assets/img/2022030815382526753.jpg") },
        { id: 2, src: require("../../assets/img/2022030815382526753.jpg") },
        { id: 3, src: require("../../assets/img/2022030815382526753.jpg") },
        { id: 4, src: require("../../assets/img/2022030815382526753.jpg") }
      ]
    }
  },
  mounted () {

    let lis = this.$refs.nav.children;
    //拿到所有的小圆点
    let sps = this.$refs.sps.children;
    //设置sps的位置
    // getComputedStyle  拿到样式的属性值
    let spsl = getComputedStyle(this.$refs.sps.firstElementChild, false)["marginRight"];
    console.log(spsl)
    this.$refs.sps.style.left = (this.$refs.loopview.offsetWidth - this.$refs.sps.offsetWidth - parseInt(spsl)) / 2 + "px";

    //表示当前要显示的图片
    let that = this

    function spsColor () {
      for (let i = 0; i < sps.length; i++) {
        sps[i].style.background = "#646464"
      }
      sps[that.index].style.background = "red"
    }
    spsColor();
    //让图片动起来，显示当前下标的图片
    function move () {
      for (let i = 0; i < lis.length; i++) {
        lis[i].style.opacity = 0
      }
      lis[that.index].style.opacity = 1;
      spsColor()
    }
    move();
    //点击小圆点跳转
    for (let i = 0; i < sps.length; i++) {
      // 1.鼠标划入的是第几个 li
      sps[i].getindex = i
      sps[i].onmouseenter = function () {
        // 2.this.index = x
        that.index = this.getindex
        // 3.move()
        move()
        spsColor()
      }
    }
    //自动轮播
    this.timer = setInterval(() => {
      that.index++;
      if (that.index == lis.length) {
        that.index = 0
      }
      move();
      spsColor()
    }, 5000)
    // 右箭头
    this.$refs.rightbutton.onclick = function () {
      that.index++;
      if (that.index == lis.length) {
        that.index = 0
      }
      move();
      spsColor()
    }
    // 左箭头
    this.$refs.leftbutton.onclick = function () {
      that.index--;
      if (that.index == -1) {
        that.index = lis.length - 1
      }
      move();
      spsColor()
    }
    // 鼠标移入将箭头显示出来,轮播图停止
    this.$refs.loopview.onmouseenter = function () {
      that.$refs.leftbutton.style.opacity = 1;
      that.$refs.rightbutton.style.opacity = 1;
      clearInterval(that.timer)
      spsColor()
    }
    // 鼠标移出将箭头隐藏出来，轮播图继续
    this.$refs.loopview.onmouseout = function () {
      that.$refs.leftbutton.style.opacity = 0;
      that.$refs.rightbutton.style.opacity = 0;
      //自动轮播
      that.timer = setInterval(() => {
        that.index++;
        if (that.index == lis.length - 1) {
          that.index = 0
        }
        spsColor()
        move();
      }, 5000)
    }
  }
}
</script>
<style scoped>
.loopview-bottom li {
  float: left;
  width: 199px;
  height: 160px;
  background: red;
}
.loopview-bottom img {
  width: 197px;
  height: 160px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
}
.a {
  width: 1190px;
  height: 508px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%);
}
.loopview {
  position: relative;
  width: 796px;
  margin: 0 auto;
  z-index: 999;
}
.loopview .nav li,
.loopview .nav,
.loopview .nav img {
  width: 790px;
  height: 326px;
}
.loopview .nav {
  position: relative;
}
.loopview .nav li {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  transition: 1s;
}
.loopview .leftbutton,
.loopview .rightbutton {
  position: absolute;
  width: 40px;
  height: 80px;
  font-size: 40px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  top: 130px;
  line-height: 80px;
  opacity: 0;
  transition: 1s;
}
.loopview .leftbutton {
  left: 0;
}
.loopview .rightbutton {
  right: 6px;
}
.sps ul {
  position: absolute;
  bottom: 10px;
}
.sps li {
  width: 20px;
  height: 20px;
  background: #646464;
  border-radius: 50%;
  float: left;
  z-index: 9999;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  margin-right: 5px;
}
.loopview-bottom {
  width: 796px;
  margin: 0 auto;
}
</style>