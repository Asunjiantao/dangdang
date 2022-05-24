<template>
  <div class='sortA'>
    <div class="sortA-nav">
      <h2>孕婴童</h2>
      <ul>
        <li><a href="">童书畅销榜</a></li>
        <li><a href="">童书3-6岁榜</a></li>
        <li><a href="">童书7-10岁榜</a></li>
      </ul>
    </div>
    <div class="sortA-content">
      <div class="sortA-content-left">
        <a href=""><img src="../../assets/img/237520186236078_y.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/79140128404867_y.jpg"
               alt=""></a>
      </div>
      <div class="sortA-content-center">
        <a href=""><img src="../../assets/img/F860301-1644806357.jpg"
               alt=""></a>
      </div>
      <div class="sortA-content-right">
        <a href=""><img src="../../assets/img/I0415944-1644808838 - 副本.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/I048155-1641797467.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/F2263501-1644806502.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/F2263501-1644806502.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/I0422387-1644808860 - 副本.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/I0422635-1647251469 - 副本.jpg"
               alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data () {
    return {
    };
  },


}

</script>
<style  scoped >
.sortA {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.sortA-nav {
  height: 40px;
  line-height: 40px;
}
.sortA li {
  padding: 0 30px;
  margin: 10px 0 0 -13px;
  background: url(http://img63.ddimg.cn/upload_img/00111/home/title_bg.png)
    no-repeat right 13px;
}
.sortA-nav h2 {
  height: 33px;
  line-height: 40px;
  float: left;
  border-right: 1px solid #b7b7b7;
  margin: 10px 0 7px;
  padding: 0px 20px 0 6px;
  font-size: 20px;
}
.sortA-nav a {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
.sortA-nav a span {
  font-weight: 100;
}
li {
  float: left;
}
.sortA h2:hover {
  color: #ff2832;
}
.sortA li:hover a {
  color: #ff2832;
}
.sortA-content {
  display: inline-block;
}
.sortA-content div {
  float: left;
}
.sortA-content a {
  float: left;
  width: 221px;
  height: 195px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-width: 0 1px 1px 0;
}
.sortA-content-left {
  width: 221px;
  border: 1px solid #e6e6e6;
  border-width: 1px 0px 1px 1px;
}
.sortA-content img {
  width: 199px;
  height: 170px;
}
.sortA-content-right {
  width: 663px;
}
.sortA-content-right a {
  border-width: 1px 1px 1px 0px;
}
.sortA-content-center a {
  width: 314px;
  height: 389px;
  border-width: 0 1px 0px 1px;
}
.sortA-content-center img {
  width: 314px;
  height: 389px;
}
</style>