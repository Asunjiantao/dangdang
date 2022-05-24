<template>
  <div class="login">
    <div class="login-top">
      <div>
        <router-link to="/"><img src="../../assets/images/logo.png"
               alt=""></router-link>
      </div>
      <div>
        <p>切换无障碍</p>
        <p><img src="../../assets/images/icon-xinxi.png"
               alt=""><span>“登录页面“改进建议</span></p>
      </div>
    </div>
    <div class="login-bottom">
      <div class="login-left">
        <a href=""><img src="../../assets/images/0b6560f6f9c27790b5cbf10e2f5fa90.png"
               alt=""></a>
      </div>
      <div class="loginTo"
           ref="login">
        <div class="code-img">
          <img class="code1"
               @click="toggle"
               src="../../assets/images/code1.png"
               alt="">
        </div>
        <div class="login-user">
          <h3 @click="passwordLogin"
              ref="p">密码登录</h3>
          <span style="line-height:40px;padding:12px;">|</span>
          <h3 @click="codeLogin"
              ref="c">验证码登录</h3>
        </div>
        <div class="password-login"
             ref="password">
          <p>
            <input placeholder="手机号/昵称/邮箱"
                   type="text"
                   v-model="user.username">
          </p>
          <p>
            <input placeholder="密码"
                   type="password"
                   ref="ipt"
                   v-model="user.password">

          </p>
          <i ref="icon_show"
             title="显示密码"
             class="iconfont icon_show">&#xe653;</i>
          <p class="content">登录即同意 <a href="">用户协议、隐私政策</a></p>
          <button @click="login"
                  class="login-to">登录</button>
          <p class="register"><a href="">立即注册</a><span>|</span><a href="">忘记密码</a></p>
          <div class="login-footer">
            <a href=""><img src="../../assets/images/wechat.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/alipay.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/qq.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/weibo.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/baidu.png"
                   alt=""></a>

          </div>
        </div>
        <div class="code-login"
             ref="code">
          <p>
            <input placeholder="手机号"
                   type="text"
                   v-model="usera.phone">
          </p>
          <p class="code">
            <input placeholder="验证码"
                   type="text"
                   v-model="usera.code">
            <button class="send"
                    ref="send"
                    :disabled='time<60'
                    @click="send">{{content}}</button>
          </p>
          <p class="content">登录即同意 <a href="">用户协议、隐私政策</a></p>
          <button @click="codea"
                  class="login-to">登录</button>
          <p class="register"><a href="">立即注册</a><span>|</span><a href="">忘记密码</a></p>
          <div class="login-footer">
            <a href=""><img src="../../assets/images/wechat.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/alipay.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/qq.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/weibo.png"
                   alt=""></a>
            <a href=""><img src="../../assets/images/baidu.png"
                   alt=""></a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let qs = require("qs");//用来解决跨域携带参数问题
export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: "",
      time: 60,
      content: "发送验证码",
      coderes: '',
      usera: {
        phone: "",
        code: "",
      },
      isCode: '',
      user: {
        username: this.username,
        password: this.password
      }
    }
  },
  methods: {

    login () {
      // 利用本地存储，将user保存起来
      // if (this.username != "" && this.password != "") {
      //   sessionStorage.setItem("user", JSON.stringify(user));
      //   alert("登录成功")
      //   this.$router.push("/")
      // } else {
      //   this.username = ""
      //   this.password = ""
      //   alert("不能为空")
      // }

      // let user = {
      //   username: this.username,
      //   password: this.password
      // }

      let that = this
      if (this.user.username == "" && this.user.password == "") {
        this.$message({
          showClose: true,
          message: '手机号码或密码不能为空',
          duration: 500,
          type: 'error'
        });
      } else {
        this.axios.post(("http://101.43.226.174:3000/api/login"), qs.stringify(this.user))
          .then(res => {
            if (res.data.status === 200) {
              sessionStorage.setItem("user", JSON.stringify(that.user));
              this.$message({
                showClose: true,
                message: '登录成功',
                duration: 500,
                type: 'success'
              });
              this.$router.push("/")
            } else {
              this.$message({
                showClose: true,
                message: '用户名或密码错误',
                duration: 500,
                type: 'error'
              });
            }
            console.log(res);
          })
      }
      this.$store.commit("setuser", this.user)

    },
    codeLogin () {
      this.$refs.code.style.display = "block"
      this.$refs.password.style.display = "none"
      this.$refs.c.style.color = "#2c3e50"
      this.$refs.p.style.color = "#717171"
      this.$refs.p.style.fontWeight = "500"
      this.$refs.c.style.fontWeight = "bold"
    },
    passwordLogin () {
      this.$refs.code.style.display = "none"
      this.$refs.password.style.display = "block"
      this.$refs.c.style.color = "#717171"
      this.$refs.p.style.color = "#2c3e50"
      this.$refs.c.style.fontWeight = "500"
      this.$refs.p.style.fontWeight = "bold"

    },
    send () {
      let regCode = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!regCode.test(this.usera.phone)) {
        this.$message({
          showClose: true,
          message: '手机号码格式不正确',
          duration: 500,
          type: 'error'
        });
        this.usera.phone = ''
        this.usera.code = ''
      } else {
        let timer = setInterval(() => {
          if (this.time > 1) {
            this.time--
            this.content = this.time + '后重新发送'
          } else {
            clearInterval(timer)
            this.time = 60
            this.content = '重新发送验证码'
          }
        }, 1000);

        this.axios.post("http://101.43.226.174:3000/api/phone", (qs.stringify(this.usera)))
          .then(res => {
            this.isCode = res.data.code
          })
      }
      this.$store.commit("setuser", this.usera)
    },
    toggle () {
      alert(1)
    },
    codea () {

      let regCode = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (this.usera.phone == '' || this.usera.code == '') {
        this.$message({
          showClose: true,
          message: '手机号码或验证码不能为空',
          duration: 500,
          type: 'error'
        });
      } else if (!regCode.test(this.usera.phone)) {
        this.$message({
          showClose: true,
          message: '手机号码格式不正确',
          duration: 500,
          type: 'error'
        });
        this.usera.phone = ''
        this.usera.code = ''
      } else {
        if (this.isCode != this.usera.code) {
          this.$message({
            showClose: true,
            message: '验证码不正确',
            duration: 500,
            type: 'error'
          });
        } else {
          this.$message({
            showClose: true,
            message: '登录成功',
            duration: 500,
            type: 'success'
          });
          this.$router.push({ path: "/" })
        }
      }

    },
  },
  // mounted 页面渲染完毕就不会执行了
  mounted () {
    this.$store.commit("setnavflag", false);

    let flag = 0;
    let that = this
    this.$refs.icon_show.onclick = function () {
      if (flag == 0) {
        that.$refs.ipt.type = "text";
        flag = 1;
        that.$refs.icon_show.innerHTML = "&#xe6d9;";
        that.$refs.icon_show.title = '隐藏密码'
      } else {
        that.$refs.ipt.type = 'password';
        flag = 0;
        that.$refs.icon_show.innerHTML = "&#xe653;";
        that.$refs.icon_show.title = '显示密码'
      }

    }
  },
  // 离开的时候flag为true，为了让导航条在其他组件显示出来
  beforeRouteLeave (to, from, next) {
    console.log("我是已经离开了当前路由")
    this.$store.commit("setnavflag", true)
    next()
  },
}
</script>
<style scoped>
@import "../../assets/css/login.css";
.icon_show {
  position: relative;
  bottom: 50px;
  left: 130px;
  font-size: 18px;
  cursor: pointer;
}
</style>