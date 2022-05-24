<template>
  <div class="addSuccess">
    <div class="addSuccess-top">
      <div class="addSuccess-left">
        <span class="bg"></span>
        <span class="success">商品已成功添加至购物车</span>
      </div>
      <div class="addSuccess-right">
        <button @click="gobuycar">去购物车结算</button>
        <button @click="gohome">继续购物</button>
      </div>
    </div>

    <div class="tab">
      <div class="tab-title">
        <h3>推广商品</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="tab-con">
        <ul>
          <li v-for="item in getShoppings"
              :key="item.url">
            <img :src="item.url"
                 alt="">
            <p></p>
            <a href="">
              <p class="title">{{item.tip}}</p>
              <p class="info">{{item.titleContnet}}</p>
            </a>
            <p class="price">¥ {{item.afterprice}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  methods: {
    gobuycar () {
      this.$router.push({ path: "/buycar" });
      // location.reload()
    },
    gohome () {
      this.$router.push("/")
    }
  },
  computed: {
    ...mapState({
      getShoppings: state => state.shoppings
    }),
  }
}
</script>
<style scoped>
.addSuccess {
  width: 960px;
  margin: 20px auto;
}
.addSuccess-top {
  display: flex;
  border: 4px solid #f5f5f5;
}
.addSuccess-left {
  padding: 17px 40px 0;
  height: 210px;
  width: 533px;
  border-right: 4px solid #f5f5f5;
  display: flex;
}
.addSuccess-left .bg {
  background: url(../../assets/images/icon_r_201404.png) no-repeat 0 0;
  padding: 0 0 0 40px;
  height: 30px;
  overflow: hidden;
  color: #646464;
}
.success {
  padding-left: 20px;
  color: #646464;
  font-size: 18px;
}
.addSuccess-right {
  float: left;
  padding: 40px 0 0 40px;
  width: 295px;
}
.addSuccess-right button {
  padding: 5px 10px;
  border-radius: 3px;
  height: 30px;
  text-align: center;
  display: inline-block;
}
.addSuccess-right button:first-child {
  margin: 25px 15px 0 0;
  background: #fe8d00;
  color: #fff;
}
.addSuccess-right button:last-child {
  background: #f0f0f0;
  margin: 25px 0 0;
  color: #969696;
}
.tab {
  background-color: #fff;
  border: 1px solid #d1d1d1;
  color: #404040;
  font-size: 12px;
  margin: 20px auto 0;
  width: 958px;
  position: relative;
  text-align: left;
  overflow: hidden;
}
.tab-title {
  border-bottom: 1px solid #d1d1d1;
  overflow: hidden;
}
.tab-title h3 {
  color: #404040;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
}
.tab-con ul {
  padding-top: 10px;
}
.tab-con li {
  width: 153px;
  height: 250px;
  margin: 0px 19px;
  float: left;
}
.tab-con li img {
  display: block;
  width: 150px;
  height: 150px;
}
.tab-con .title {
  color: #686868;
  font-size: 12px;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
}
.tab-con .info {
  height: 20px;
  line-height: 20px;
  color: #c30;
  overflow: hidden;
}
.tab .price {
  color: #c30;
  font-size: 14px;
  margin-top: 10px;
}
.tab img:hover {
  border: 1px solid #ffa069;
}
.tab a:hover {
  text-decoration: underline;
  color: red;
}
.tab p:hover {
  color: red;
}
</style>