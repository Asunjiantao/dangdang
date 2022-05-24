<template>
  <div class='sortA clear'>
    <div class="sortA-nav">
      <h2>日用百货</h2>
      <ul>
        <li><a href="">滴露<span>旗舰店</span></a><i></i></li>
        <li><a href="">水星家纺<span>旗舰店</span><i></i></a></li>
        <li><a href="">戴森<span>旗舰店</span></a><i></i></li>
        <li><a href="">碧然德<span>旗舰店</span></a><i></i></li>
        <li><a href="">蕉下<span>旗舰店</span></a><i></i></li>
      </ul>
    </div>
    <div class="sortA-content">
      <div class="sortA-content-left">
        <a href=""><img src="../../assets/img/mh-1645067432.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/tmx-1645068854 - 副本.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/pczcxt-1648694930.jpg"
               alt=""></a>
        <a href=""><img src="../../assets/img/pczcxt19206-1641353495 (1).jpg"
               alt=""></a>
      </div>
      <div class="sortA-content-center">
        <a href=""><img src="../../assets/img/lc-1646622712.jpg"
               alt=""></a>
      </div>
      <div class="sortAp-content-right">
        <div class="sortA-content-left">
          <a href=""><img src="../../assets/img/230200176718110_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/230200176718115_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/230200176747917_y.jpg"
                 alt=""></a>
          <a href=""><img src="../../assets/img/230200176747928_y.jpg"
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
.sortA-nav li span {
  padding-left: 10px;
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
  border-width: 1px 1px 0px 1px;
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