<template>
  <div class="axi">

    <div>
      <!-- axios：模块
      向后端服务器发起请求
      如何更改vue的端口号
      node_modules -> vue -> cli-service -> lib -> options.js

      使用
      1、安装依赖
      npm install --save axios vue-axios
      2、在main.js中配置
      import axios from 'axios'
      import VueAxios from 'vue-axios'
      Vue.use(VueAxios, axios)
      3.使用
      注意：为了解决跨域携带参数问题
      使用qs
      let qs = require("qs") -->
    </div>

    我是axi组件
    <p>内容是 {{obj}}</p>

    <p>{{person}}</p>
  </div>
</template>
<script>
// let qs = require("qs"); //用来解决跨域中携带参数问题
// 404 ：说明请求地址错误
// 400 ：说明参数有问题
export default {
  data () {
    return {
      obj: [],
      person: {}
    }
  },
  // mounted () {
  //   // get访问数据  不携带参数

  //   this.axios.get("http://192.168.0.148:8080/hotel/reserve/query")
  //     .then(res => {
  //       console.log(res)
  //       this.obj = res.data;
  //     })
  //   // post  用于携带参数
  //   let user = {
  //     username: "admin",
  //     password: "123"
  //   };
  //   this.axios.post("http://192.168.0.148:8080/hotel/login/find", qs.stringify(user))
  //     .then(res => {
  //       console.log(res)
  //       this.person = res.data

  //     })
  // }
}
</script>