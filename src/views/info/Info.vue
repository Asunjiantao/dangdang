<template>
  <div class="info">
    <!-- 详情页 -->
    <div v-if="$store.state.isflag.isinfo">
      <div class="info-top">
        <div class="info-sub-nav">
          <ul>
            <li><a href="">童书榜</a></li>
            <li><a href="">童书频道</a></li><span>|</span>
            <li><a href="">0-2岁馆</a></li><span>|</span>
            <li><a href="">3-6岁馆</a></li><span>|</span>
            <li><a href="">7-10岁馆</a></li><span>|</span>
            <li><a href="">11-14岁馆</a></li><span>|</span>
            <li><a href="">儿童文学馆</a></li><span>|</span>
            <li><a href="">绘本馆</a></li><span>|</span>
            <li><a href="">科普百科馆</a></li><span>|</span>
            <li><a href="">新书速递</a></li><span>|</span>
            <li><a href="">童书特惠</a></li><span>|</span>
            <li><a href="">童书88元10件</a></li><span>|</span>
            <li><a href="">全部同书</a></li><span>|</span>
          </ul>
        </div>
        <div class="info-sub-img">
          <img src="../../assets/images/2022041008082496160.jpg"
               alt="">
        </div>
      </div>
      <div class="info-wrap">
        <div class="info-left">
          <img class="info-img"
               :src="obj.url"
               alt="">
        </div>
        <div class="info-right">
          <h2 class="title">{{obj.tip}}</h2>
          <h2 class="title-content">{{obj.titleContnet}}</h2>
          <div class="ddprice">
            <p>当当价：<span>降价通知</span></p>
            <span class="info-price">¥ {{obj.afterprice}}</span>
          </div>
          <p class="info-cound">领卷：{{obj.cound}}</p>
          <p class="info-info">促销</p>
          <div class="info-shoppingscart">
            <div class="num">
              <input type="text"
                     v-model="num">
              <button @click="add">+</button>
              <button @click="minus"
                      :disabled="isdisabled">-</button>
            </div>
            <div class="addshoppingcart"
                 @click="addSuccessa">
              <i class="iconfont shoppingcart">&#xe73d;</i>
              <button>加入购物车</button>
            </div>

            <div class="buy">
              <a href="">立即购买</a>
            </div>
          </div>
        </div>
      </div>
      <div class="info-con">
        <h3>为您推荐</h3>
        <ul>
          <li v-for="item in  getShoppings"
              :key="item.id">
            <img :src="item.url"
                 alt="">
            <p class="info-tip">{{item.tip}}</p>
            <p class="info-price">¥{{item.afterprice}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 添加购物车成功页面 -->
    <AddSuccess v-if="$store.state.isflag.isAddSuccess" />
  </div>
</template>
<script>
import { mapState } from "vuex"
import AddSuccess from "../buycar/AddSuccess.vue"
export default {
  components: {
    AddSuccess
  },
  props: ["shoppings"],
  data () {
    return {
      obj: {},
      num: 1,
      isdisabled: true
    }
  },
  computed: {
    ...mapState({
      getShoppings: state => state.shoppings
    }),
  },
  created () {// vue的生命周期函数

    //拿到要查看商品的id
    // console.log(this.$route.params.id)
    // 拿到数组
    // console.log(sessionStorage.getItem("shoppings"))
    var res = JSON.parse(sessionStorage.getItem("shoppings"));
    // 拿到商品id
    var getid = this.$route.params.id;
    // 遍历数组
    res.forEach(res => {
      // 找到与id对应的记录，用obj来存储
      if (res.id == getid) {
        this.obj = res;
      }
    })

    this.$store.commit("setinfo", true);
    this.$store.commit("setAddSuccess", false);
  },
  methods: {
    // 加
    add () {
      if (this.num >= 1) {
        this.num++
        this.isdisabled = false
      }
    },
    // 减
    minus () {
      if (this.num > 1) {
        this.num--
      } else {
        return this.isdisabled = true
      }
    },
    addSuccessa () {
      this.$store.commit("setinfo", false);
      this.$store.commit("setAddSuccess", true);
      this.obj.num = this.num;
      this.$store.commit("addBuyCars", this.obj);
    },
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit("setinfo", true)
    this.$store.commit("setAddSuccess", false);
    next()
  },
}
</script>
<style scoped>
@import "../../assets/css/info.css";
.addshoppingcart button {
  font-size: 16px;
  color: #fff;
}
.info-img {
  width: 300px;
  height: 300px;
}
.info-con {
  width: 1200px;
  margin: 0 auto;
}
.info-con li {
  width: 199px;
  float: left;
  font-size: 12px;
}
.info-con img {
  width: 190px;
}
.info-tip {
  height: 30px;
  overflow: hidden;
  padding-left: 20px;
  text-align: left;
}
.info-price {
  font-size: 12px;
  color: red;
  text-align: left;
  padding-left: 20px;
}
.info-con h3 {
  width: 1140px;
  text-align: left;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid red;
  margin: 0 auto;
  margin-bottom: 10px;
}

.info-con h3:hover {
  color: red;
}
</style>