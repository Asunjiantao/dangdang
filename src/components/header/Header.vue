<template>
  <div id="nav">
    <HeaderTop v-show="$route.path == '/' "></HeaderTop>
    <div class="nav-wrap">
      <div class="header">
        <ul class="nav-left ">
          <li>
            <span> 送至：</span><span ref="site">北京</span>
          </li>
        </ul>
        <ul class="nav-right">
          <li>
            <router-link to="/login">
              <span v-if="$store.state.user==''||$store.state.user.username==''||$store.state.usera==''">欢迎光临，请<a href=""
                   class="login-color">登录 </a>当当 <a href="">成为会员</a>
              </span>
              <span v-else
                    class="login-color">Hi，{{$store.state.user.username}} {{$store.state.usera.phone}} <button @click="quit"
                        class="quit-login"><a href=""> [退出]</a></button>
              </span>
            </router-link>
          </li>
          <li>
            <span class="iconfont shoppingcart">&#xe600;</span>
            <router-link to="/buycar">购物车</router-link>&nbsp;<em style="color:red;">{{num}}</em>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">我的订单</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">我的云书房</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">我的当当</router-link>
            <i class="iconfont down">&#xe626;</i>
            <div class="mydd nav-none"></div>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">当当拼团</router-link>
            <i class="iconfont down">&#xe626;</i>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">小说投稿</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">企业采购</router-link>
            <i class="iconfont down">&#xe626;</i>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">客户服务</router-link>
            <i class="iconfont down">&#xe626;</i>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">我的订单</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="/">切换无障碍</router-link>
          </li>
          <!-- <router-link :to="{name:'Info',params:{id:1}}">Info</router-link> -->

        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import HeaderTop from "./HeaderTop.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    HeaderTop
  },
  data () {
    return {
      num: ''
    }
  },
  computed: {
    ...mapGetters(
      ["getBuycarsGe"],
    )
  },
  created () {
    this.num = this.getBuycarsGe.length
  },
  methods: {
    quit () {
      // 退出
      sessionStorage.removeItem("user");
      this.$store.state.user = ''
      // this.$router.push({ path: "/" })
      this.$message({
        showClose: true,
        message: '退出登录成功',
        duration: 500,
        type: 'success'
      });

    },
  },
}
</script>
<style scoped>
@import url(//at.alicdn.com/t/font_3283832_2gsqubg3lz8.css);
@import url(../../assets/css/header.css);
.nav-none {
  display: none;
}
.down {
  font-size: 12px;
}
</style>