<template>
  <div class="snap-up">
    <div class="snap-up-header">
      <div class="snap-up-left">
        <img src="../../assets/img/home_miaosha_title-1561107108.png"
             alt="">
        <p class="miaosha">
          <span class="h">{{hour}}</span>
          <span class="m">{{minute}}</span>
          <span class="s">{{second}}</span>
          <a class="bg-miaosha"></a>
        </p>
        <ul class="miaosha-nav">
          <li class="active">
            <a href="">00:00场</a>
          </li>
          <li>
            <a href="">08:00场</a>
          </li>
          <li>
            <a href="">12:00场</a>
          </li>
          <li>
            <a href="">16:00场</a>
          </li>
          <li>
            <a href="">20:00场</a>
          </li>
        </ul>
      </div>
      <div class="snap-up-con">
        <ul>
          <li v-for="item in shoppings"
              :key="item.id">
            <img :src="item.url"
                 alt="">
            <div class="qg">
              <div class="qg-line">
                <el-progress :text-inside="true"
                             :stroke-width="8"
                             :percentage="23"
                             :show-text="false"
                             status="exception"></el-progress>
              </div>
              <div class="qg-num">已抢购 23%</div>
            </div>
            <div class="title">
              <a href="">{{item.tip}}</a>
            </div>
            <div class="snap-up-price">
              <span> ¥{{item.afterprice}}</span>
              <span>{{item.beforeprice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="snap-up-right">
      <div class="snap-up-right-header">
        <h3>厂商周</h3>
        <ul class="yd"
            ref="yd">
          <li class="active"></li>
          <li></li>
        </ul>

      </div>
      <div class="snap-up-right-con"
           ref="right-con">
        <el-carousel height="456px"
                     arrow="never">
          <el-carousel-item v-for="item in 2"
                            :key="item">
            <img src="../../assets/img/2022040216201994622.jpg"
                 alt="">
            <img src="../../assets/img/2022040216201994622.jpg"
                 alt="">
            <img src="../../assets/img/2022040216201994622.jpg"
                 alt="">
            <img src="../../assets/img/2022040216201994622.jpg"
                 alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["shoppings"],
  data () {
    return {
      hour: "",
      minute: "",
      second: "",
    }
  },
  mounted () {
    let oldtime = new Date("3022/05/01/ 00:00:00"); //设置时间
    let that = this
    function time () {
      let newtime = new Date();  // 获取现在时间
      let lastTime = parseInt((oldtime - newtime) / 1000); //  设置的时间 - 现在的时间
      let hour = parseInt(lastTime / 60 / 60 % 24); //时
      hour = hour < 10 ? '0' + hour : hour;
      let minute = parseInt(lastTime / 60 % 60); //分
      minute = minute < 10 ? '0' + minute : minute;
      let second = parseInt(lastTime % 60);//秒
      second = second < 10 ? '0' + second : second;
      that.hour = hour;
      that.minute = minute;
      that.second = second;
    }
    setInterval(time, 1000);
  }
}
</script>
<style scoped>
.snap-up {
  display: flex;
  width: 1200px;
  margin: 20px auto;
}
.snap-up-left {
  display: flex;
  width: 996px;
  height: 41px;
  float: left;
  border-bottom: 2px solid #3c3c3c;
}
.snap-up-right-con img {
  transition: 0.5s;
}
.snap-up-right-con img:hover {
  margin-left: -10px;
}
.snap-up-left img {
  width: 64px;
  height: 39px;
  margin-right: 20px;
}
.miaosha {
  position: relative;
}
.bg-miaosha {
  display: block;
  width: 224px;
  height: 39px;
  background: url(../../assets/img/home_miaosha.png) no-repeat;
}
.miaosha span {
  margin-top: 5px;
}
.miaosha span:first-child {
  margin-left: 30px;
}
.miaosha span:nth-child(2),
.miaosha span:nth-child(3) {
  margin-left: 11px;
}
.miaosha span {
  float: left;
  width: 26px;
  height: 24px;
  text-align: center;
  line-height: 24px;
}
.miaosha-nav li {
  width: 80px;
  margin-right: 50px;
  float: left;
  font-size: 20px;
  font-weight: bold;
}
.miaosha-nav li:hover {
  padding-bottom: 13px;
  border-bottom: 2px solid red;
}
a {
  color: #666;
}
.miaosha-nav .active a {
  color: red;
}
.snap-up-header {
  width: 996px;
  display: inline-block;
}
.snap-up-right {
  width: 204px;
  height: 500px;
  float: right;
}
.snap-up-con {
  display: inline-block;
  width: 996px;
  height: 500px;
}
.snap-up-right-header {
  width: 204px;
  border-bottom: 2px solid red;
  height: 41px;
  /* line-height: 40px; */
}
.snap-up-right-con {
  width: 204px;
  height: 500px;
  /* border: 1px solid red; */
}
.snap-up-con {
  width: 996px;
  height: 454px;
  border-left: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
}
.snap-up-con li {
  float: left;
  width: 199px;
  height: 227px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  position: relative;
}
.snap-up-con img {
  width: 150px;
  height: 150px;
}
.snap-up-con .title {
  width: 180px;
  height: 22px;
  line-height: 22px;
  font-size: 1px;
  overflow: hidden;
}
.snap-up-con .snap-up-price {
  text-align: left;
  color: red;
  margin: 2px;
}
.snap-up-con .snap-up-price span:last-child {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
  padding-left: 10px;
}

.snap-up-con .qg-line {
  width: 150px;
  height: 8px;
  background: #ffb7b7;
  margin: 8px auto;
  border-radius: 5px;
  overflow: hidden;
}

.qg {
  position: relative;
}
.snap-up-con .qg-num {
  position: absolute;
  width: 76px;
  height: 20px;
  background: #fe8d91;
  border-radius: 10px;
  top: -6px;
  left: 60px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
}
.snap-up-right-header h3 {
  text-align: left;
  float: left;
}
.yd {
  float: right;
}
.yd li {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c8c8c8;
  float: left;
  margin-right: 5px;
  margin-top: 10px;
}
.yd .active {
  background: red;
}
.snap-up-right-con {
  width: 203px;
  height: 456px;
  border-right: 1px solid #e5e5e5;
}
.snap-up-right-con > ul {
  display: none;
}
.snap-up-right-con li {
  width: 203px;
  height: 115px;
}
.snap-up-right-con ul {
  display: block;
}
.snap-up-right-con img {
  width: 202px;
  height: 114px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.snap-up-right-con p img {
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
</style>

