<template>
  <div id="app">
    <Header v-if="!$route.meta.Header"></Header>
    <Logo v-if="!$route.meta.isLogo"></Logo>
    <router-view />
    <Footer v-if="!$route.meta.Footer"></Footer>
  </div>

</template>
<script>
import Header from "./components/header/Header.vue"
import Footer from "./components/footer/Footer.vue"
import Logo from "./components/header/Logo.vue"

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Logo,
  },

  data () {
    return {

    }
  },
  mounted () {

  }
  ,
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  created () {
    //解决vuex在页面刷新后数据丢失问题

    //因为js代码是运行在内存中的，代码运行时所有的变量，函数也都是保存在
    //内存中的。当我们在刷新页面的时候，以前申请的内存被释放，重新加载
    //脚本代码，变量重新赋值，如果我们想保证这些数据不丢失，我们必须将这些
    //数据保存在外部，例如：localStorage、SessionStorage等，做数据持久化处理

    //在页面加载时读取sessionStorage里的状态信息
    // console.log('');
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });

  },

}
</script>
<style lang="scss">
@import url(//at.alicdn.com/t/font_3283832_4s1i7sboh4b.css);
.clear:after {
  contain: "";
  clear: both;
  display: block;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
img {
  vertical-align: middle;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  outline: none;
  border: none;
  background: none;
}
.quit-login {
  font-size: 12px;
}
</style>
