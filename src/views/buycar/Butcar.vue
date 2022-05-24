<template>
  <div class="buycar">
    <div class="buycar-top-img">
      <img src="../../assets/images/2022041917201922581.jpg"
           alt="">
    </div>
    <div class="buycar-logo-line">
      <div class="buycar-logo">
        <router-link to="/"> <img src="../../assets/images/dd_logo.jpg"
               alt=""></router-link>
      </div>
    </div>
    <div class=" have-buycar"
         v-show="$store.state.buycars != ''">
      <div>
      </div>
      <div class="cart">
        <div class="cart-title">
          <ul>
            <li>
              <span><input type="checkbox"
                       @click="Allchose">全选</span>
            </li>
            <li>商品信息</li>
            <li>单价（元）</li>
            <li> 数量 </li>
            <li>金额（元）</li>
            <li>操作</li>
          </ul>
        </div>
        <div class="ddzy">
          <span><input type="checkbox"
                   @click="Allchose"></span>
          <span class="bg-a"></span>
          <span>当当自营</span>
          <span class="bg-b">优惠卷</span>
        </div>
        <div class="cart-con">
          <table>
            <tr v-for="(item,index) in getBuycarsGe"
                :key="index">
              <td class="cart-con-checkbox"><input type="checkbox"
                       v-model="item.checked"></td>
              <td class="cart-con-img"><img :src="item.url"
                     alt=""></td>
              <td class="cart-con-title">{{item.tip}}</td>
              <td class="cart-con-price">¥ {{item.afterprice}}</td>
              <td class="cart-con-num">
                <el-input-number v-model="item.num"
                                 :min="1"
                                 :max="100"
                                 label="描述文字"></el-input-number>
              </td>
              <td class="m">¥{{item.totle}}</td>
              <td @click="remove(item.index)"
                  class="cart-con-remove">
                <a href="javascript:;">删除</a>
              </td>
            </tr>
          </table>
        </div>

      </div>
      <div class="cound">
        <div class="cound-left">
          <span><input type="checkbox"
                   @click="Allchose">全选</span>
          <span @click="dele">批量删除</span>
          <span>已选择<em class="red"> {{num}}</em>件商品</span>
        </div>
        <div class="cound-right">
          <p class="total">总计(不含运费) ：<em>¥ {{total}}</em></p>
          <button class="btn"
                  ref="total">结 &nbsp; 算</button>
        </div>
      </div>
    </div>
    <Nobuycar v-show="$store.state.buycars == '' " />
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
import { mapState, mapGetters } from "vuex"
import Nobuycar from './Nobuycar.vue'
export default {
  components: {
    Nobuycar
  },
  props: ["shoppings"],
  data () {
    return {
      count: 0,
      num: 0,
      total: 0,
    }
  },
  computed: {
    ...mapState({
      getBuyCars: state => state.buycars,
      getShoppings: state => state.shoppings
    }),
    ...mapGetters(
      ["getBuycarsGe"],
    )
  },
  methods: {

    dele () {

    },
    remove (item) {
      let index = this.getBuycarsGe.indexOf(item);
      this.getBuycarsGe.splice(index, 1)
    },
    Allchose () {
      this.getBuyCars.forEach(function (res) {
        res.checked = true
      })
    },
  },
  watch: {
    getBuyCars: {
      handler (news, old) {
        console.log(news, old);
        this.count = 0;
        this.total = 0;
        this.numa = 0
        this.getBuycarsGe.forEach(res => {
          if (res.checked) {
            this.count++
            this.num = this.count;
            this.total += res.totle
          }
          // this.numa += res.num
        })
      },
      deep: true
    }
  },
  created () {

  }
}
</script>
<style scoped>
.buycar-top-img {
  width: 996px;
  padding: 17px 0;
  margin: 0 auto;
}
.buycar-logo-line {
  width: 100%;
  border-bottom: 4px solid #ff2832;
  height: 100px;
}
.buycar-logo {
  display: flex;
  width: 996px;
  margin: 0 auto;
  height: 70px;
  padding: 20px 0 0 15px;
}
.cart {
  width: 996px;
  margin: 0 auto;
}
.cart-title {
  height: 36px;
  line-height: 36px;
  width: 1000px;
  margin-top: 10px;
  font-size: 12px;
}
.cart-title input {
  vertical-align: middle;
  margin-right: 5px;
}
.cart-title li {
  float: left;
  width: 130px;
  color: #969696;
}
.cart-title li:first-child {
  width: 200px;
  text-align: left;
}
.cart-title li:nth-child(2) {
  width: 280px;
  text-align: left;
}
.ddzy {
  font-size: 12px;
  display: flex;
  padding: 15px;
}
.ddzy span {
  margin: 0 8px;
}
.ddzy .bg-a {
  width: 18px;
  height: 18px;
  background: url(../../assets/images/icon_sprite.png) no-repeat 0 -30px;
}
.ddzy .bg-b {
  width: 64px;
  height: 20px;
  background: url(../../assets/images/coupon_icon_sprite.png) no-repeat 0 -116px;
  line-height: 20px;
  padding-right: 16px;
  color: #fff;
}
.cart-con {
  font-size: 12px;
  /* display: inline-block; */
  width: 996px;
  border: 1px solid #ebebeb;
  background: #f5f5f5;
  padding-left: 10px;
}

.cart-con-img {
  padding: 20px;
}
.cart-con-img img {
  width: 80px;
}
.cart-con-title {
  width: 335px;
  height: 36px;
  overflow: hidden;
  text-align: left;
  margin-top: 20px;
  display: inline-block;
}
.cart-con-price {
  width: 132px;
  text-align: center;
  display: inline-block;
}
.cart-con-num {
  width: 132px;
  height: 30px;
  display: inline-block;
  padding-left: 15px;
}
.el-input-number {
  width: 150px;
}
.cart-con tr {
  display: inherit;
  border-bottom: 1px solid #ebebeb;
}
.cart-con tr:last-child {
  border-bottom: 1px solid transparent;
}
.cart-con-remove {
  display: inline-block;
  width: 100px;
}
.m {
  width: 132px;
  display: inline-block;
}
.cound {
  width: 1084px;
  height: 72px;
  background: url(../../assets/images/shopping_total.png) no-repeat;
  margin: 20px auto;
  position: relative;
}
.cound-left {
  position: absolute;
}
.cound-right {
  position: absolute;
  right: 0;
  color: #969696;
}
.cound input {
  vertical-align: middle;
  margin-right: 10px;
}
.cound span {
  padding-left: 50px;
  line-height: 60px;
  font-size: 12px;
  color: #969696;
}
.cound span:nth-child(2) {
  color: #666;
}
.cound .red {
  color: red;
}
em {
  font-style: normal;
}
.cound .total {
  position: absolute;
  width: 200px;
  height: 50px;
  right: 200px;
  top: 30px;
  font-size: 12px;
}
.cound .total em {
  color: #ff2832;
  font-size: 18px;
}
.cound .btn {
  position: absolute;
  width: 116px;
  height: 38px;
  background: #e1e1e1;
  right: 50px;
  top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
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
.el-input-number[data-v-665039ca] {
  margin-left: -27px;
}
</style>