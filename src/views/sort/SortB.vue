<template>
  <div class='sortA'>
    <div class="sortA-nav">
      <h2>食品</h2>
      <ul>
        <li><a href="">优选食品</a></li>
      </ul>
    </div>
    <div class="sortA-content">
      <div class="sortA-content-left">
        <a href=""><img src="../../assets/img/dxd-1620648629.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/xianhuabing-1646907675 - 副本.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/14540161249619_y.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/14540159781288_y.jpg"
               alt=""></a>
      </div>
      <div class="sortA-content-center">
        <a href=""><img src="../../assets/img/60pc-1640935880.jpg"
               alt=""></a>
      </div>
      <div class="sortAp-content-right">
        <div class="sortA-content-left">
          <a href=""><img src="../../assets/img/14540161246038_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/14540161246506_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/79590222262270_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/13530-1646907290.jpg"
                 alt=""></a>
        </div>
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
  width: 400px;
  float: left;
}
.sortA-content a {
  float: left;
  width: 199px;
  height: 170px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-width: 0 1px 1px 0;
}
.sortA-content-left {
  border: 1px solid #e6e6e6;
  border-width: 1px 0px 1px 1px;
}
.sortA-content img {
  width: 199px;
  height: 170px;
}

.sortA-content-center a {
  width: 399px;
  height: 341px;
  border-width: 0 1px 1px 0;
}
.sortA-content-center img {
  width: 399px;
  height: 341px;
}
</style>